import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';

interface AccessibilityReport {
  score: number;
  issues: {
    missingAltText: number;
    emptyHeadings: number;
    lowContrast: number;
    missingLabels: number;
    keyboardTraps: number;
    missingLandmarks: number;
  };
  recommendations: string[];
}

export function useAccessibilityValidation(): AccessibilityReport {
  const [location] = useLocation();
  const [report, setReport] = useState<AccessibilityReport>({
    score: 100,
    issues: {
      missingAltText: 0,
      emptyHeadings: 0,
      lowContrast: 0,
      missingLabels: 0,
      keyboardTraps: 0,
      missingLandmarks: 0
    },
    recommendations: []
  });

  useEffect(() => {
    const validateAccessibility = () => {
      const issues = {
        missingAltText: 0,
        emptyHeadings: 0,
        lowContrast: 0,
        missingLabels: 0,
        keyboardTraps: 0,
        missingLandmarks: 0
      };
      const recommendations: string[] = [];

      // Check images for alt text
      const images = Array.from(document.querySelectorAll('img'));
      images.forEach(img => {
        if (!img.hasAttribute('alt')) {
          issues.missingAltText++;
        } else if (img.getAttribute('alt') === '' && !img.hasAttribute('role')) {
          issues.missingAltText++;
        }
      });

      if (issues.missingAltText > 0) {
        recommendations.push(`Add descriptive alt text to ${issues.missingAltText} images`);
      }

      // Check headings for empty content
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      headings.forEach(heading => {
        if (!heading.textContent?.trim()) {
          issues.emptyHeadings++;
        }
      });

      if (issues.emptyHeadings > 0) {
        recommendations.push(`Remove or fill ${issues.emptyHeadings} empty headings`);
      }

      // Check form inputs for labels
      const inputs = Array.from(document.querySelectorAll('input, select, textarea'));
      inputs.forEach(input => {
        const hasLabel = document.querySelector(`label[for="${input.id}"]`) ||
                        input.hasAttribute('aria-label') ||
                        input.hasAttribute('aria-labelledby') ||
                        input.closest('label');
        if (!hasLabel) {
          issues.missingLabels++;
        }
      });

      if (issues.missingLabels > 0) {
        recommendations.push(`Add labels to ${issues.missingLabels} form inputs`);
      }

      // Check for main landmark
      const hasMain = document.querySelector('main, [role="main"]');
      if (!hasMain) {
        issues.missingLandmarks++;
        recommendations.push('Add main landmark element');
      }

      // Check for navigation landmark
      const hasNav = document.querySelector('nav, [role="navigation"]');
      if (!hasNav) {
        issues.missingLandmarks++;
        recommendations.push('Add navigation landmark');
      }

      // Calculate score (100 - 10 points per issue type)
      const totalIssueTypes = Object.values(issues).filter(count => count > 0).length;
      const score = Math.max(0, 100 - (totalIssueTypes * 10));

      setReport({ score, issues, recommendations });
    };

    const timeout = setTimeout(validateAccessibility, 200);
    return () => clearTimeout(timeout);
  }, [location]);

  return report;
}

// Enhanced accessible components
interface AccessibleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function AccessibleButton({
  children,
  onClick,
  href,
  className = '',
  ariaLabel,
  disabled = false,
  type = 'button'
}: AccessibleButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center
    px-4 py-2 rounded-lg font-medium
    transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-poe-accent focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${className}
  `;

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={baseClasses}
        aria-label={ariaLabel}
        role="button"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClasses}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

// Skip navigation component for keyboard users
export function SkipNavigation() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-poe-accent text-poe-dark px-4 py-2 rounded"
    >
      Skip to main content
    </a>
  );
}

// Screen reader only text component
export function ScreenReaderOnly({ children }: { children: React.ReactNode }) {
  return (
    <span className="sr-only">
      {children}
    </span>
  );
}

// High contrast mode detector and optimizer
export function useHighContrastMode() {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    const checkHighContrast = () => {
      if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-contrast: high)');
        setIsHighContrast(mediaQuery.matches);
        
        const handleChange = (e: MediaQueryListEvent) => {
          setIsHighContrast(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
      }
    };

    checkHighContrast();
  }, []);

  return isHighContrast;
}

// Focus management for modals and dynamic content
export function useFocusManagement() {
  const restoreFocus = (element: HTMLElement | null) => {
    if (element && typeof element.focus === 'function') {
      element.focus();
    }
  };

  const trapFocus = (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    
    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  };

  return { restoreFocus, trapFocus };
}

// Accessibility validation panel for development
export function AccessibilityValidationPanel() {
  const report = useAccessibilityValidation();
  const [isVisible, setIsVisible] = useState(false);

  if (import.meta.env.PROD) return null;

  return (
    <div className="fixed bottom-36 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={`px-3 py-2 rounded-lg text-sm font-medium ${
          report.score >= 80 ? 'bg-green-500' : report.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
        } text-white`}
      >
        A11y: {report.score}%
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 w-80 bg-poe-surface border border-poe-accent/20 rounded-lg p-4 shadow-lg max-h-96 overflow-y-auto">
          <h3 className="text-poe-accent font-semibold mb-3">Accessibility Report</h3>
          
          <div className="mb-4">
            <div className={`text-lg font-bold ${
              report.score >= 80 ? 'text-green-400' : 
              report.score >= 60 ? 'text-yellow-400' : 
              'text-red-400'
            }`}>
              Score: {report.score}/100
            </div>
          </div>

          <div className="space-y-2 text-xs">
            {Object.entries(report.issues).map(([key, count]) => (
              count > 0 && (
                <div key={key} className="text-red-400">
                  {key.replace(/([A-Z])/g, ' $1').toLowerCase()}: {count}
                </div>
              )
            ))}
          </div>

          {report.recommendations.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-poe-text mb-2">Recommendations:</h4>
              <ul className="space-y-1 text-xs text-poe-text-secondary">
                {report.recommendations.map((rec, index) => (
                  <li key={index}>• {rec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}