import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';

interface SEOValidationReport {
  title: {
    exists: boolean;
    length: number;
    isOptimal: boolean;
    content: string;
  };
  metaDescription: {
    exists: boolean;
    length: number;
    isOptimal: boolean;
    content: string;
  };
  headingStructure: {
    h1Count: number;
    hasLogicalHierarchy: boolean;
    skippedLevels: string[];
    emptyHeadings: number;
  };
  images: {
    total: number;
    missingAlt: number;
    emptyAlt: number;
    optimized: number;
  };
  internalLinks: {
    total: number;
    broken: number;
    noTitle: number;
    optimized: number;
  };
  canonicalUrl: {
    exists: boolean;
    isCorrect: boolean;
    url: string;
  };
  schema: {
    hasStructuredData: boolean;
    types: string[];
    isValid: boolean;
  };
}

export function usePageSEOValidation(): SEOValidationReport {
  const [location] = useLocation();
  const [report, setReport] = useState<SEOValidationReport>({
    title: { exists: false, length: 0, isOptimal: false, content: '' },
    metaDescription: { exists: false, length: 0, isOptimal: false, content: '' },
    headingStructure: { h1Count: 0, hasLogicalHierarchy: true, skippedLevels: [], emptyHeadings: 0 },
    images: { total: 0, missingAlt: 0, emptyAlt: 0, optimized: 0 },
    internalLinks: { total: 0, broken: 0, noTitle: 0, optimized: 0 },
    canonicalUrl: { exists: false, isCorrect: false, url: '' },
    schema: { hasStructuredData: false, types: [], isValid: true }
  });

  useEffect(() => {
    const validateSEO = () => {
      // Validate title tag
      const titleElement = document.querySelector('title');
      const title = titleElement?.textContent || '';
      const titleReport = {
        exists: !!title,
        length: title.length,
        isOptimal: title.length >= 30 && title.length <= 60,
        content: title
      };

      // Validate meta description
      const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      const metaDescReport = {
        exists: !!metaDesc,
        length: metaDesc.length,
        isOptimal: metaDesc.length >= 140 && metaDesc.length <= 160,
        content: metaDesc
      };

      // Validate heading structure
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      const h1Elements = headings.filter(h => h.tagName === 'H1');
      const headingLevels = headings.map(h => parseInt(h.tagName.charAt(1)));
      const skippedLevels: string[] = [];
      let hasLogicalHierarchy = true;

      for (let i = 1; i < headingLevels.length; i++) {
        const current = headingLevels[i];
        const previous = headingLevels[i - 1];
        if (current > previous + 1) {
          hasLogicalHierarchy = false;
          skippedLevels.push(`H${previous} to H${current}`);
        }
      }

      const emptyHeadings = headings.filter(h => !h.textContent?.trim()).length;

      const headingReport = {
        h1Count: h1Elements.length,
        hasLogicalHierarchy,
        skippedLevels,
        emptyHeadings
      };

      // Validate images
      const images = Array.from(document.querySelectorAll('img'));
      const missingAlt = images.filter(img => !img.getAttribute('alt')).length;
      const emptyAlt = images.filter(img => img.getAttribute('alt') === '').length;
      const optimized = images.filter(img => {
        const alt = img.getAttribute('alt');
        const loading = img.getAttribute('loading');
        return alt && alt.length > 0 && loading === 'lazy';
      }).length;

      const imageReport = {
        total: images.length,
        missingAlt,
        emptyAlt,
        optimized
      };

      // Validate internal links
      const links = Array.from(document.querySelectorAll('a[href^="/"], a[href^="#"]'));
      const noTitle = links.filter(link => !link.getAttribute('title') && !link.getAttribute('aria-label')).length;
      
      const linkReport = {
        total: links.length,
        broken: 0, // Would need actual navigation testing
        noTitle,
        optimized: links.length - noTitle
      };

      // Validate canonical URL
      const canonicalElement = document.querySelector('link[rel="canonical"]');
      const canonicalUrl = canonicalElement?.getAttribute('href') || '';
      const expectedCanonical = `https://vorici-calculator.com${location}`;
      
      const canonicalReport = {
        exists: !!canonicalUrl,
        isCorrect: canonicalUrl === expectedCanonical,
        url: canonicalUrl
      };

      // Validate structured data
      const schemaElements = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
      const schemaTypes: string[] = [];
      let isValid = true;

      schemaElements.forEach(element => {
        try {
          const data = JSON.parse(element.textContent || '');
          if (data['@type']) {
            schemaTypes.push(data['@type']);
          }
        } catch (e) {
          isValid = false;
        }
      });

      const schemaReport = {
        hasStructuredData: schemaElements.length > 0,
        types: schemaTypes,
        isValid
      };

      setReport({
        title: titleReport,
        metaDescription: metaDescReport,
        headingStructure: headingReport,
        images: imageReport,
        internalLinks: linkReport,
        canonicalUrl: canonicalReport,
        schema: schemaReport
      });
    };

    // Run validation after DOM updates
    const timeout = setTimeout(validateSEO, 100);
    return () => clearTimeout(timeout);
  }, [location]);

  return report;
}

export function SEOValidationPanel() {
  const report = usePageSEOValidation();
  const [isVisible, setIsVisible] = useState(false);

  // Only show in development
  if (import.meta.env.PROD) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-poe-accent text-poe-dark px-3 py-2 rounded-lg text-sm font-medium"
      >
        SEO Report
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 w-80 bg-poe-surface border border-poe-accent/20 rounded-lg p-4 shadow-lg max-h-96 overflow-y-auto">
          <h3 className="text-poe-accent font-semibold mb-3">SEO Validation Report</h3>
          
          {/* Title */}
          <div className="mb-3">
            <h4 className="text-sm font-medium text-poe-text">Title Tag</h4>
            <div className={`text-xs ${report.title.isOptimal ? 'text-green-400' : 'text-yellow-400'}`}>
              {report.title.exists ? `✓ ${report.title.length} chars` : '✗ Missing'}
              {!report.title.isOptimal && report.title.exists && ' (not optimal length)'}
            </div>
          </div>

          {/* Meta Description */}
          <div className="mb-3">
            <h4 className="text-sm font-medium text-poe-text">Meta Description</h4>
            <div className={`text-xs ${report.metaDescription.isOptimal ? 'text-green-400' : 'text-yellow-400'}`}>
              {report.metaDescription.exists ? `✓ ${report.metaDescription.length} chars` : '✗ Missing'}
              {!report.metaDescription.isOptimal && report.metaDescription.exists && ' (not optimal length)'}
            </div>
          </div>

          {/* Heading Structure */}
          <div className="mb-3">
            <h4 className="text-sm font-medium text-poe-text">Headings</h4>
            <div className={`text-xs ${report.headingStructure.h1Count === 1 && report.headingStructure.hasLogicalHierarchy ? 'text-green-400' : 'text-red-400'}`}>
              H1 Count: {report.headingStructure.h1Count}
              {!report.headingStructure.hasLogicalHierarchy && ` | Skipped levels: ${report.headingStructure.skippedLevels.join(', ')}`}
            </div>
          </div>

          {/* Images */}
          <div className="mb-3">
            <h4 className="text-sm font-medium text-poe-text">Images</h4>
            <div className="text-xs text-poe-text-secondary">
              Total: {report.images.total} | Missing Alt: {report.images.missingAlt} | Optimized: {report.images.optimized}
            </div>
          </div>

          {/* Schema */}
          <div className="mb-3">
            <h4 className="text-sm font-medium text-poe-text">Structured Data</h4>
            <div className={`text-xs ${report.schema.hasStructuredData ? 'text-green-400' : 'text-yellow-400'}`}>
              {report.schema.hasStructuredData ? `✓ Types: ${report.schema.types.join(', ')}` : '✗ No schema found'}
            </div>
          </div>

          {/* Canonical */}
          <div>
            <h4 className="text-sm font-medium text-poe-text">Canonical URL</h4>
            <div className={`text-xs ${report.canonicalUrl.exists && report.canonicalUrl.isCorrect ? 'text-green-400' : 'text-yellow-400'}`}>
              {report.canonicalUrl.exists ? (report.canonicalUrl.isCorrect ? '✓ Correct' : '⚠ Incorrect URL') : '✗ Missing'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}