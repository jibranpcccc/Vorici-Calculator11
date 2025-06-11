import { useEffect, useState } from 'react';

interface MobileOptimizationReport {
  viewport: {
    hasMetaTag: boolean;
    isResponsive: boolean;
    width: string;
  };
  touchTargets: {
    tooSmall: number;
    tooClose: number;
    total: number;
  };
  fonts: {
    tooSmall: number;
    readable: number;
  };
  images: {
    withoutAlt: number;
    oversized: number;
    total: number;
  };
  performance: {
    layoutShifts: number;
    renderTime: number;
  };
}

export function validateMobileOptimization(): MobileOptimizationReport {
  // Check viewport meta tag
  const viewportMeta = document.querySelector('meta[name="viewport"]');
  const viewportContent = viewportMeta?.getAttribute('content') || '';
  
  // Check touch targets
  const clickableElements = document.querySelectorAll('button, a, input, select, textarea, [onclick], [role="button"]');
  let tooSmallTargets = 0;
  let tooCloseTargets = 0;
  
  clickableElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const size = Math.min(rect.width, rect.height);
    
    // Check minimum touch target size (44px recommended)
    if (size < 44) tooSmallTargets++;
    
    // Check spacing between touch targets
    const siblings = Array.from(element.parentElement?.children || []);
    siblings.forEach(sibling => {
      if (sibling !== element && sibling.getBoundingClientRect) {
        const siblingRect = sibling.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(rect.x - siblingRect.x, 2) + Math.pow(rect.y - siblingRect.y, 2)
        );
        if (distance < 8) tooCloseTargets++;
      }
    });
  });

  // Check font sizes
  const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6, li, td, th');
  let tooSmallFonts = 0;
  
  textElements.forEach(element => {
    const fontSize = parseInt(window.getComputedStyle(element).fontSize);
    if (fontSize < 16) tooSmallFonts++;
  });

  // Check images
  const images = document.querySelectorAll('img');
  let imagesWithoutAlt = 0;
  let oversizedImages = 0;
  
  images.forEach(img => {
    if (!img.alt) imagesWithoutAlt++;
    if (img.naturalWidth > 1200) oversizedImages++;
  });

  // Performance metrics
  const performanceEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
  const navigationTiming = performanceEntries[0];
  const renderTime = navigationTiming ? navigationTiming.loadEventEnd - navigationTiming.fetchStart : 0;

  return {
    viewport: {
      hasMetaTag: !!viewportMeta,
      isResponsive: viewportContent.includes('width=device-width'),
      width: viewportContent
    },
    touchTargets: {
      tooSmall: tooSmallTargets,
      tooClose: tooCloseTargets,
      total: clickableElements.length
    },
    fonts: {
      tooSmall: tooSmallFonts,
      readable: textElements.length - tooSmallFonts
    },
    images: {
      withoutAlt: imagesWithoutAlt,
      oversized: oversizedImages,
      total: images.length
    },
    performance: {
      layoutShifts: 0, // Would need CLS measurement
      renderTime
    }
  };
}

// Mobile-first responsive component
interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  breakpoints?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
}

export function ResponsiveContainer({ 
  children, 
  className = '',
  breakpoints = {
    sm: 'px-4',
    md: 'px-6',
    lg: 'px-8',
    xl: 'px-12'
  }
}: ResponsiveContainerProps) {
  const responsiveClasses = [
    breakpoints.sm,
    breakpoints.md && `md:${breakpoints.md}`,
    breakpoints.lg && `lg:${breakpoints.lg}`,
    breakpoints.xl && `xl:${breakpoints.xl}`
  ].filter(Boolean).join(' ');

  return (
    <div className={`container mx-auto ${responsiveClasses} ${className}`}>
      {children}
    </div>
  );
}

// Touch-friendly button component
interface TouchFriendlyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline';
}

export function TouchFriendlyButton({
  children,
  onClick,
  href,
  className = '',
  size = 'md',
  variant = 'primary'
}: TouchFriendlyButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 min-h-[44px] text-sm',
    md: 'px-6 py-3 min-h-[48px] text-base',
    lg: 'px-8 py-4 min-h-[52px] text-lg'
  };

  const variantClasses = {
    primary: 'bg-poe-accent text-poe-dark hover:bg-poe-accent/90',
    secondary: 'bg-poe-surface text-poe-text hover:bg-poe-surface/80',
    outline: 'border-2 border-poe-accent text-poe-accent hover:bg-poe-accent hover:text-poe-dark'
  };

  const baseClasses = `
    inline-flex items-center justify-center
    rounded-lg font-medium transition-colors
    touch-manipulation select-none
    focus:outline-none focus:ring-2 focus:ring-poe-accent focus:ring-offset-2
    active:scale-95 transition-transform
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={baseClasses} role="button">
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}

// Mobile optimization monitor
export function MobileOptimizationMonitor() {
  const [report, setReport] = useState<MobileOptimizationReport | null>(null);

  useEffect(() => {
    const checkMobileOptimization = () => {
      const mobileReport = validateMobileOptimization();
      setReport(mobileReport);

      // Log issues
      if (!mobileReport.viewport.hasMetaTag) {
        console.warn('Missing viewport meta tag');
      }
      
      if (mobileReport.touchTargets.tooSmall > 0) {
        console.warn(`${mobileReport.touchTargets.tooSmall} touch targets too small`);
      }
      
      if (mobileReport.fonts.tooSmall > 0) {
        console.warn(`${mobileReport.fonts.tooSmall} text elements too small for mobile`);
      }
      
      if (mobileReport.images.withoutAlt > 0) {
        console.warn(`${mobileReport.images.withoutAlt} images missing alt text`);
      }
    };

    // Check after DOM is ready
    setTimeout(checkMobileOptimization, 1000);
    
    // Check on window resize
    window.addEventListener('resize', checkMobileOptimization);
    
    return () => window.removeEventListener('resize', checkMobileOptimization);
  }, []);

  return null;
}