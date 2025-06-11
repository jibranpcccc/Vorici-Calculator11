import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';

interface LinkValidationReport {
  internalLinks: {
    total: number;
    working: number;
    broken: number;
    missingTitle: number;
    details: Array<{
      href: string;
      text: string;
      status: 'working' | 'broken' | 'unknown';
      hasTitle: boolean;
      anchorText: string;
    }>;
  };
  externalLinks: {
    total: number;
    checked: number;
    missingRel: number;
    details: Array<{
      href: string;
      text: string;
      hasRel: boolean;
      hasTarget: boolean;
    }>;
  };
  anchors: {
    total: number;
    working: number;
    broken: number;
  };
}

// Valid internal routes for the application
const validRoutes = [
  '/',
  '/guides',
  '/guides/path-of-exile-crafting-guide',
  '/guides/socket-coloring-mechanics', 
  '/guides/6-linking-strategies',
  '/guides/how-to-use-the-calculator',
  '/blog',
  '/blog/top-5-crafting-mistakes',
  '/blog/poe-league-crafting-changes',
  '/blog/advanced-socket-strategies',
  '/blog/poe-settlers-league-crafting-changes',
  '/faq',
  '/about',
  '/privacy-policy',
  '/terms'
];

export function useLinkValidation(): LinkValidationReport {
  const [location] = useLocation();
  const [report, setReport] = useState<LinkValidationReport>({
    internalLinks: { total: 0, working: 0, broken: 0, missingTitle: 0, details: [] },
    externalLinks: { total: 0, checked: 0, missingRel: 0, details: [] },
    anchors: { total: 0, working: 0, broken: 0 }
  });

  useEffect(() => {
    const validateLinks = () => {
      const allLinks = Array.from(document.querySelectorAll('a[href]')) as HTMLAnchorElement[];
      
      const internalLinkDetails: typeof report.internalLinks.details = [];
      const externalLinkDetails: typeof report.externalLinks.details = [];
      
      let workingInternal = 0;
      let brokenInternal = 0;
      let missingTitleInternal = 0;
      let missingRelExternal = 0;

      allLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        const text = link.textContent?.trim() || '';
        
        // Skip mail and tel links
        if (href.startsWith('mailto:') || href.startsWith('tel:')) return;

        // Check if it's an internal link
        if (href.startsWith('/') || href.startsWith('#') || 
            (!href.includes('://') && !href.startsWith('//'))) {
          
          let status: 'working' | 'broken' | 'unknown' = 'unknown';
          
          if (href.startsWith('#')) {
            // Anchor link - check if target exists
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            status = targetElement ? 'working' : 'broken';
          } else {
            // Internal route - check against valid routes
            const cleanHref = href.replace(/\/$/, '') || '/';
            status = validRoutes.includes(cleanHref) ? 'working' : 'broken';
          }

          const hasTitle = !!(link.getAttribute('title') || link.getAttribute('aria-label'));
          
          if (status === 'working') workingInternal++;
          if (status === 'broken') brokenInternal++;
          if (!hasTitle) missingTitleInternal++;

          internalLinkDetails.push({
            href,
            text,
            status,
            hasTitle,
            anchorText: text
          });
        } else {
          // External link
          const hasRel = link.hasAttribute('rel');
          const hasTarget = link.hasAttribute('target');
          
          if (!hasRel || !link.getAttribute('rel')?.includes('noopener')) {
            missingRelExternal++;
          }

          externalLinkDetails.push({
            href,
            text,
            hasRel: hasRel && link.getAttribute('rel')?.includes('noopener') || false,
            hasTarget
          });
        }
      });

      // Count anchors separately
      const anchors = Array.from(document.querySelectorAll('[id]'));
      const anchorLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
      let workingAnchors = 0;
      let brokenAnchors = 0;

      anchorLinks.forEach(link => {
        const targetId = link.getAttribute('href')?.substring(1);
        if (targetId && document.getElementById(targetId)) {
          workingAnchors++;
        } else {
          brokenAnchors++;
        }
      });

      setReport({
        internalLinks: {
          total: internalLinkDetails.length,
          working: workingInternal,
          broken: brokenInternal,
          missingTitle: missingTitleInternal,
          details: internalLinkDetails
        },
        externalLinks: {
          total: externalLinkDetails.length,
          checked: externalLinkDetails.length,
          missingRel: missingRelExternal,
          details: externalLinkDetails
        },
        anchors: {
          total: anchors.length,
          working: workingAnchors,
          broken: brokenAnchors
        }
      });
    };

    // Run validation after DOM updates
    const timeout = setTimeout(validateLinks, 200);
    return () => clearTimeout(timeout);
  }, [location]);

  return report;
}

// Component to fix common link issues automatically
export function LinkOptimizer() {
  useEffect(() => {
    const optimizeLinks = () => {
      const links = Array.from(document.querySelectorAll('a[href]')) as HTMLAnchorElement[];
      
      links.forEach(link => {
        const href = link.getAttribute('href') || '';
        
        // Fix external links - add security attributes
        if (href.includes('://') || href.startsWith('//')) {
          if (link.getAttribute('target') === '_blank') {
            const currentRel = link.getAttribute('rel') || '';
            if (!currentRel.includes('noopener')) {
              link.setAttribute('rel', currentRel ? `${currentRel} noopener noreferrer` : 'noopener noreferrer');
            }
          }
        }

        // Add titles to links without them
        if (!link.getAttribute('title') && !link.getAttribute('aria-label')) {
          const text = link.textContent?.trim();
          if (text && text.length > 0 && text.length < 100) {
            // Generate descriptive title based on href and context
            let title = text;
            
            if (href.startsWith('/guides/')) {
              title = `${text} - Crafting Guide`;
            } else if (href.startsWith('/blog/')) {
              title = `${text} - Blog Post`;
            } else if (href === '/') {
              title = 'Path of Exile Crafting Calculator - Home';
            } else if (href === '/faq') {
              title = 'Frequently Asked Questions';
            } else if (href === '/about') {
              title = 'About Vorici Calculator';
            }
            
            link.setAttribute('title', title);
          }
        }
      });
    };

    // Run optimization after component mount
    const timeout = setTimeout(optimizeLinks, 100);
    return () => clearTimeout(timeout);
  }, []);

  return null; // This component doesn't render anything
}

// Development tool for link validation
export function LinkValidationPanel() {
  const report = useLinkValidation();
  const [isVisible, setIsVisible] = useState(false);

  // Only show in development
  if (import.meta.env.PROD) return null;

  return (
    <>
      <LinkOptimizer />
      <div className="fixed bottom-20 right-4 z-50">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-medium"
        >
          Links ({report.internalLinks.broken + report.anchors.broken})
        </button>
        
        {isVisible && (
          <div className="absolute bottom-12 right-0 w-96 bg-poe-surface border border-poe-accent/20 rounded-lg p-4 shadow-lg max-h-96 overflow-y-auto">
            <h3 className="text-poe-accent font-semibold mb-3">Link Validation Report</h3>
            
            {/* Internal Links */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-poe-text mb-2">Internal Links</h4>
              <div className="text-xs text-poe-text-secondary">
                Total: {report.internalLinks.total} | 
                Working: <span className="text-green-400">{report.internalLinks.working}</span> | 
                Broken: <span className="text-red-400">{report.internalLinks.broken}</span> | 
                Missing Title: <span className="text-yellow-400">{report.internalLinks.missingTitle}</span>
              </div>
              
              {report.internalLinks.broken > 0 && (
                <div className="mt-2 space-y-1">
                  {report.internalLinks.details
                    .filter(link => link.status === 'broken')
                    .map((link, index) => (
                      <div key={index} className="text-xs text-red-400">
                        Broken: {link.href} ("{link.text}")
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* External Links */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-poe-text mb-2">External Links</h4>
              <div className="text-xs text-poe-text-secondary">
                Total: {report.externalLinks.total} | 
                Missing Security: <span className="text-yellow-400">{report.externalLinks.missingRel}</span>
              </div>
            </div>

            {/* Anchor Links */}
            <div>
              <h4 className="text-sm font-medium text-poe-text mb-2">Anchor Links</h4>
              <div className="text-xs text-poe-text-secondary">
                Working: <span className="text-green-400">{report.anchors.working}</span> | 
                Broken: <span className="text-red-400">{report.anchors.broken}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}