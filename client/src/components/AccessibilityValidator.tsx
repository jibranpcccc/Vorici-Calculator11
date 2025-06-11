import { useEffect } from 'react';

interface AccessibilityReport {
  images: {
    missingAlt: string[];
    decorativeImages: number;
    total: number;
  };
  links: {
    emptyLinks: number;
    genericText: string[];
    total: number;
  };
  forms: {
    missingLabels: number;
    missingFieldsets: number;
    total: number;
  };
  headings: {
    structure: boolean;
    skipLevels: number;
    empty: number;
  };
  contrast: {
    lowContrast: number;
    total: number;
  };
  keyboard: {
    nonFocusable: number;
    missingSkipLinks: boolean;
  };
  aria: {
    missingLabels: number;
    invalidRoles: number;
    missingLandmarks: number;
  };
}

export function validateAccessibility(): AccessibilityReport {
  // Check images
  const images = document.querySelectorAll('img');
  const missingAlt: string[] = [];
  let decorativeImages = 0;

  images.forEach(img => {
    if (!img.hasAttribute('alt')) {
      missingAlt.push(img.src || 'Unknown image');
    } else if (img.alt === '') {
      decorativeImages++;
    }
  });

  // Check links
  const links = document.querySelectorAll('a');
  let emptyLinks = 0;
  const genericText: string[] = [];
  const genericPhrases = ['click here', 'read more', 'more', 'here', 'link'];

  links.forEach(link => {
    const text = link.textContent?.trim().toLowerCase() || '';
    if (!text) {
      emptyLinks++;
    } else if (genericPhrases.includes(text)) {
      genericText.push(text);
    }
  });

  // Check forms
  const formInputs = document.querySelectorAll('input, select, textarea');
  let missingLabels = 0;
  const fieldsets = document.querySelectorAll('fieldset');

  formInputs.forEach(input => {
    const id = input.id;
    const hasLabel = id && document.querySelector(`label[for="${id}"]`);
    const hasAriaLabel = input.hasAttribute('aria-label') || input.hasAttribute('aria-labelledby');
    
    if (!hasLabel && !hasAriaLabel) {
      missingLabels++;
    }
  });

  // Check headings structure
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let skipLevels = 0;
  let emptyHeadings = 0;
  let previousLevel = 0;

  headings.forEach(heading => {
    const level = parseInt(heading.tagName.charAt(1));
    if (level > previousLevel + 1) {
      skipLevels++;
    }
    if (!heading.textContent?.trim()) {
      emptyHeadings++;
    }
    previousLevel = level;
  });

  // Check keyboard navigation
  const focusableElements = document.querySelectorAll(
    'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  let nonFocusable = 0;

  focusableElements.forEach(element => {
    const tabIndex = element.getAttribute('tabindex');
    if (tabIndex === '-1') {
      nonFocusable++;
    }
  });

  const hasSkipLinks = !!document.querySelector('a[href^="#"]:first-child');

  // Check ARIA
  const elementsWithRoles = document.querySelectorAll('[role]');
  let invalidRoles = 0;
  const validRoles = [
    'alert', 'application', 'article', 'banner', 'button', 'cell', 'checkbox',
    'columnheader', 'combobox', 'complementary', 'contentinfo', 'definition',
    'dialog', 'directory', 'document', 'form', 'grid', 'gridcell', 'group',
    'heading', 'img', 'link', 'list', 'listbox', 'listitem', 'log', 'main',
    'marquee', 'math', 'menu', 'menubar', 'menuitem', 'menuitemcheckbox',
    'menuitemradio', 'navigation', 'note', 'option', 'presentation', 'progressbar',
    'radio', 'radiogroup', 'region', 'row', 'rowgroup', 'rowheader', 'scrollbar',
    'search', 'separator', 'slider', 'spinbutton', 'status', 'tab', 'tablist',
    'tabpanel', 'textbox', 'timer', 'toolbar', 'tooltip', 'tree', 'treegrid',
    'treeitem'
  ];

  elementsWithRoles.forEach(element => {
    const role = element.getAttribute('role');
    if (role && !validRoles.includes(role)) {
      invalidRoles++;
    }
  });

  const landmarks = document.querySelectorAll('main, nav, aside, header, footer, [role="main"], [role="navigation"], [role="complementary"], [role="banner"], [role="contentinfo"]');
  const missingLandmarks = landmarks.length === 0 ? 1 : 0;

  const ariaLabelledElements = document.querySelectorAll('[aria-labelledby], [aria-describedby]');
  let missingAriaLabels = 0;

  ariaLabelledElements.forEach(element => {
    const labelledBy = element.getAttribute('aria-labelledby');
    const describedBy = element.getAttribute('aria-describedby');
    
    if (labelledBy && !document.getElementById(labelledBy)) {
      missingAriaLabels++;
    }
    if (describedBy && !document.getElementById(describedBy)) {
      missingAriaLabels++;
    }
  });

  return {
    images: {
      missingAlt,
      decorativeImages,
      total: images.length
    },
    links: {
      emptyLinks,
      genericText,
      total: links.length
    },
    forms: {
      missingLabels,
      missingFieldsets: Math.max(0, formInputs.length - fieldsets.length),
      total: formInputs.length
    },
    headings: {
      structure: skipLevels === 0,
      skipLevels,
      empty: emptyHeadings
    },
    contrast: {
      lowContrast: 0, // Would need color contrast calculation
      total: 0
    },
    keyboard: {
      nonFocusable,
      missingSkipLinks: !hasSkipLinks
    },
    aria: {
      missingLabels: missingAriaLabels,
      invalidRoles,
      missingLandmarks
    }
  };
}

// Accessible component wrapper
interface AccessibleContainerProps {
  children: React.ReactNode;
  role?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  className?: string;
  tabIndex?: number;
}

export function AccessibleContainer({
  children,
  role,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  className = '',
  tabIndex
}: AccessibleContainerProps) {
  return (
    <div
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      tabIndex={tabIndex}
      className={className}
    >
      {children}
    </div>
  );
}

// Skip navigation component
export function SkipNavigation() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-poe-accent text-poe-dark px-4 py-2 rounded-md z-50 transition-all"
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

// Accessibility monitor
export function AccessibilityMonitor() {
  useEffect(() => {
    const checkAccessibility = () => {
      const report = validateAccessibility();
      
      // Log accessibility issues
      if (report.images.missingAlt.length > 0) {
        console.warn(`${report.images.missingAlt.length} images missing alt text:`, report.images.missingAlt);
      }
      
      if (report.links.emptyLinks > 0) {
        console.warn(`${report.links.emptyLinks} empty links found`);
      }
      
      if (report.links.genericText.length > 0) {
        console.warn(`Generic link text found:`, report.links.genericText);
      }
      
      if (report.forms.missingLabels > 0) {
        console.warn(`${report.forms.missingLabels} form inputs missing labels`);
      }
      
      if (!report.headings.structure) {
        console.warn(`Heading structure issues: ${report.headings.skipLevels} level skips`);
      }
      
      if (report.keyboard.missingSkipLinks) {
        console.warn('Missing skip navigation links');
      }
      
      if (report.aria.missingLandmarks > 0) {
        console.warn('Missing ARIA landmarks');
      }
    };

    // Check after DOM is ready
    setTimeout(checkAccessibility, 1000);
    
    // Monitor DOM changes
    const observer = new MutationObserver(() => {
      setTimeout(checkAccessibility, 500);
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  return null;
}