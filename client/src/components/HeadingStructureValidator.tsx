import { useEffect } from 'react';

// Heading structure validation for SEO
export function validateHeadingStructure(): {
  isValid: boolean;
  errors: string[];
  suggestions: string[];
} {
  const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  const errors: string[] = [];
  const suggestions: string[] = [];

  // Check for single H1
  const h1Elements = headings.filter(h => h.tagName === 'H1');
  if (h1Elements.length === 0) {
    errors.push('Missing H1 tag - every page needs exactly one H1');
  } else if (h1Elements.length > 1) {
    errors.push(`Multiple H1 tags found (${h1Elements.length}) - use only one H1 per page`);
  }

  // Check heading hierarchy
  let previousLevel = 0;
  headings.forEach((heading, index) => {
    const currentLevel = parseInt(heading.tagName.charAt(1));
    
    if (index === 0 && currentLevel !== 1) {
      errors.push('First heading should be H1');
    }
    
    if (currentLevel > previousLevel + 1) {
      errors.push(`Heading level skip detected: ${heading.tagName} follows H${previousLevel}`);
    }
    
    previousLevel = currentLevel;
  });

  // Check for empty headings
  const emptyHeadings = headings.filter(h => !h.textContent?.trim());
  if (emptyHeadings.length > 0) {
    errors.push(`Found ${emptyHeadings.length} empty heading(s)`);
  }

  // Generate suggestions
  if (headings.length < 3) {
    suggestions.push('Consider adding more headings to improve content structure');
  }
  
  if (headings.length > 10) {
    suggestions.push('Consider consolidating content - many headings may indicate complex structure');
  }

  return {
    isValid: errors.length === 0,
    errors,
    suggestions
  };
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
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  // Generate semantic ID if not provided
  const headingId = id || children?.toString().toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  const baseClasses = {
    1: 'text-4xl md:text-5xl font-bold text-poe-accent',
    2: 'text-3xl md:text-4xl font-bold text-poe-text',
    3: 'text-2xl md:text-3xl font-semibold text-poe-text',
    4: 'text-xl md:text-2xl font-semibold text-poe-text',
    5: 'text-lg md:text-xl font-medium text-poe-text',
    6: 'text-base md:text-lg font-medium text-poe-text'
  };

  return (
    <Tag 
      id={headingId}
      className={`${baseClasses[level]} ${className}`}
      data-keywords={keywords.join(',')}
    >
      {children}
    </Tag>
  );
}

// Heading structure monitor component
export function HeadingStructureMonitor() {
  useEffect(() => {
    const checkStructure = () => {
      const validation = validateHeadingStructure();
      
      if (!validation.isValid) {
        console.warn('Heading structure issues detected:', validation.errors);
      }
      
      if (validation.suggestions.length > 0) {
        console.info('Heading structure suggestions:', validation.suggestions);
      }
    };

    // Check on mount and when DOM changes
    checkStructure();
    
    const observer = new MutationObserver(() => {
      setTimeout(checkStructure, 100); // Debounce
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  return null;
}