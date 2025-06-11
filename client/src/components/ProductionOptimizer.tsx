import { useEffect } from 'react';

// Production-specific optimizations to address speed analysis findings
export function ProductionOptimizer() {
  useEffect(() => {
    // Remove Vite dev tools in production
    if (import.meta.env.PROD) {
      // Disable React DevTools
      if (typeof window !== 'undefined' && (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__) {
        (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__.onCommitFiberRoot = null;
        (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__.onCommitFiberUnmount = null;
      }

      // Clean up development artifacts
      const devElements = document.querySelectorAll('[data-reactroot]');
      devElements.forEach(el => el.removeAttribute('data-reactroot'));

      // Optimize critical rendering path
      const criticalCSS = document.getElementById('critical-css');
      if (criticalCSS) {
        // Move critical CSS inline styles to reduce render blocking
        const styles = criticalCSS.textContent;
        if (styles) {
          const styleEl = document.createElement('style');
          styleEl.textContent = styles;
          document.head.insertBefore(styleEl, document.head.firstChild);
          criticalCSS.remove();
        }
      }

      // Preload critical resources
      const preloadResources = [
        { href: '/fonts/inter-regular.woff2', as: 'font', type: 'font/woff2' },
        { href: '/fonts/inter-medium.woff2', as: 'font', type: 'font/woff2' }
      ];

      preloadResources.forEach(resource => {
        const existing = document.querySelector(`link[href="${resource.href}"]`);
        if (!existing) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = resource.href;
          link.as = resource.as;
          if (resource.type) link.type = resource.type;
          link.crossOrigin = 'anonymous';
          document.head.appendChild(link);
        }
      });

      // Enable resource hints for better loading
      const dnsPrefetchDomains = [
        'fonts.googleapis.com',
        'www.google-analytics.com'
      ];

      dnsPrefetchDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });

      // Optimize images for better Core Web Vitals
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });

      // Remove unused CSS variables in production
      const rootStyles = getComputedStyle(document.documentElement);
      const unusedVars = [];
      
      // Track which CSS variables are actually used
      const usedVars = new Set();
      const allElements = document.querySelectorAll('*');
      
      allElements.forEach(el => {
        const styles = getComputedStyle(el);
        Object.values(styles).forEach(value => {
          if (typeof value === 'string' && value.includes('var(--')) {
            const varMatch = value.match(/var\(--([^)]+)\)/g);
            if (varMatch) {
              varMatch.forEach(v => {
                const varName = v.match(/--([^)]+)/)?.[1];
                if (varName) usedVars.add(varName);
              });
            }
          }
        });
      });

      console.log(`Production optimization: ${usedVars.size} CSS variables in use`);
    }
  }, []);

  return null;
}

// Lazy loading wrapper for heavy components
export function LazyComponentWrapper({ 
  children, 
  fallback = <div className="animate-pulse bg-gray-200 h-8 w-full rounded" />
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  useEffect(() => {
    // Intersection observer for lazy loading components
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '50px' }
    );

    const lazyElements = document.querySelectorAll('.lazy-component');
    lazyElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="lazy-component">
      {children}
    </div>
  );
}

// Bundle size analyzer for development
export function BundleAnalyzer() {
  useEffect(() => {
    if (import.meta.env.DEV) {
      // Track bundle loading performance
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource' && entry.name.includes('vite')) {
            const size = (entry as any).transferSize;
            if (size > 100000) { // > 100KB
              console.warn(`Large dev bundle: ${entry.name} (${(size/1024).toFixed(1)}KB)`);
            }
          }
        });
      });

      observer.observe({ entryTypes: ['resource'] });
      
      return () => observer.disconnect();
    }
  }, []);

  return null;
}