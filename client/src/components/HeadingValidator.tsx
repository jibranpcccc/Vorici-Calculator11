import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';

interface HeadingStructureReport {
  h1: {
    count: number;
    content: string[];
    isValid: boolean;
  };
  hierarchy: {
    isLogical: boolean;
    skippedLevels: Array<{ from: number; to: number; position: number }>;
    structure: Array<{ level: number; text: string; isEmpty: boolean }>;
  };
  seo: {
    containsKeywords: boolean;
    optimalLength: boolean;
    recommendations: string[];
  };
}

export function useHeadingValidation(): HeadingStructureReport {
  const [location] = useLocation();
  const [report, setReport] = useState<HeadingStructureReport>({
    h1: { count: 0, content: [], isValid: false },
    hierarchy: { isLogical: true, skippedLevels: [], structure: [] },
    seo: { containsKeywords: false, optimalLength: false, recommendations: [] }
  });

  useEffect(() => {
    const validateHeadings = () => {
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')) as HTMLHeadingElement[];
      
      // H1 analysis
      const h1Elements = headings.filter(h => h.tagName === 'H1');
      const h1Content = h1Elements.map(h => h.textContent?.trim() || '');
      const h1IsValid = h1Elements.length === 1;

      // Structure analysis
      const structure = headings.map(h => ({
        level: parseInt(h.tagName.charAt(1)),
        text: h.textContent?.trim() || '',
        isEmpty: !h.textContent?.trim()
      }));

      // Hierarchy validation
      const skippedLevels: Array<{ from: number; to: number; position: number }> = [];
      let isLogical = true;

      for (let i = 1; i < structure.length; i++) {
        const current = structure[i].level;
        const previous = structure[i - 1].level;
        
        if (current > previous + 1) {
          isLogical = false;
          skippedLevels.push({
            from: previous,
            to: current,
            position: i
          });
        }
      }

      // SEO analysis
      const keywordTerms = ['path of exile', 'poe', 'crafting', 'calculator', 'socket', 'coloring', 'linking', 'orb', 'vorici'];
      const h1Text = h1Content[0]?.toLowerCase() || '';
      const containsKeywords = keywordTerms.some(keyword => h1Text.includes(keyword));
      const optimalLength = h1Text.length >= 20 && h1Text.length <= 70;

      const recommendations: string[] = [];
      if (!h1IsValid) {
        if (h1Elements.length === 0) {
          recommendations.push('Add an H1 heading to the page');
        } else {
          recommendations.push('Use only one H1 heading per page');
        }
      }
      if (!containsKeywords) {
        recommendations.push('Include relevant keywords in H1 (e.g., "Path of Exile", "Crafting Calculator")');
      }
      if (!optimalLength) {
        if (h1Text.length < 20) {
          recommendations.push('H1 text is too short - expand for better SEO');
        } else {
          recommendations.push('H1 text is too long - shorten for better readability');
        }
      }
      if (!isLogical) {
        recommendations.push('Fix heading hierarchy - avoid skipping heading levels');
      }
      if (structure.some(h => h.isEmpty)) {
        recommendations.push('Remove empty headings or add meaningful content');
      }

      setReport({
        h1: {
          count: h1Elements.length,
          content: h1Content,
          isValid: h1IsValid
        },
        hierarchy: {
          isLogical,
          skippedLevels,
          structure
        },
        seo: {
          containsKeywords,
          optimalLength,
          recommendations
        }
      });
    };

    // Run validation after DOM updates
    const timeout = setTimeout(validateHeadings, 150);
    return () => clearTimeout(timeout);
  }, [location]);

  return report;
}

// SEO-optimized heading component
interface SEOHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  id?: string;
  keywords?: string[];
}

export function SEOHeading({ level, children, className = '', id, keywords = [] }: SEOHeadingProps) {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  // Generate ID from content if not provided
  const generatedId = id || (typeof children === 'string' ? 
    children.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-') : 
    undefined);

  // Add keyword highlighting for SEO (only in development)
  const enhancedContent = import.meta.env.DEV && keywords.length > 0 ? 
    (typeof children === 'string' ? 
      keywords.reduce((text, keyword) => 
        text.replace(new RegExp(`(${keyword})`, 'gi'), '<mark>$1</mark>'), 
        children as string
      ) : children
    ) : children;

  return (
    <HeadingTag 
      id={generatedId}
      className={`${className} scroll-mt-4`}
      {...(typeof enhancedContent === 'string' && import.meta.env.DEV ? 
        { dangerouslySetInnerHTML: { __html: enhancedContent } } : 
        { children }
      )}
    />
  );
}

// Automatic heading structure fixer
export function HeadingStructureFixer() {
  const report = useHeadingValidation();

  useEffect(() => {
    // Only auto-fix in development mode
    if (!import.meta.env.DEV) return;

    if (report.seo?.recommendations?.length > 0) {
      console.group('Heading Structure Issues');
      console.warn('H1 Count:', report.h1.count, report.h1.isValid ? '✓' : '✗');
      console.warn('Hierarchy:', report.hierarchy.isLogical ? '✓' : '✗');
      
      if (report.hierarchy.skippedLevels.length > 0) {
        console.warn('Skipped levels:', report.hierarchy.skippedLevels);
      }
      
      console.info('Recommendations:', report.seo?.recommendations || []);
      console.groupEnd();
    }
  }, [report]);

  return null;
}