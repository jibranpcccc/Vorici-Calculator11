import { useEffect } from 'react';

// Component to handle progressive loading and performance optimizations
export function PerformanceBooster() {
  useEffect(() => {
    // Remove defer-load classes after main content loads
    const handleLoad = () => {
      const deferredElements = document.querySelectorAll('.defer-load');
      deferredElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.remove('defer-load');
          (el as HTMLElement).style.opacity = '1';
          (el as HTMLElement).style.transform = 'translateY(0)';
          (el as HTMLElement).style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        }, index * 50); // Stagger animations
      });
    };

    // Load non-critical CSS asynchronously
    const loadNonCriticalCSS = () => {
      const stylesheets = document.querySelectorAll('link[rel="preload"][as="style"]');
      stylesheets.forEach(link => {
        if (link instanceof HTMLLinkElement) {
          link.rel = 'stylesheet';
          link.onload = () => {
            link.onload = null;
          };
        }
      });
    };

    // Optimize images loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('defer-load');
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
          if (img instanceof HTMLImageElement && img.dataset.src) {
            img.src = img.dataset.src;
          }
        });
      }
    };

    // Prefetch important routes
    const prefetchRoutes = () => {
      const importantRoutes = ['/calculator', '/guides'];
      importantRoutes.forEach(route => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
      });
    };

    // Service Worker registration for caching
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator && 'caches' in window) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('SW registered:', registration);
        } catch (error) {
          console.log('SW registration failed:', error);
        }
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleLoad);
    } else {
      handleLoad();
    }

    // Run optimizations
    setTimeout(() => {
      loadNonCriticalCSS();
      optimizeImages();
      prefetchRoutes();
      registerServiceWorker();
    }, 100);

    return () => {
      document.removeEventListener('DOMContentLoaded', handleLoad);
    };
  }, []);

  return null; // This component doesn't render anything
}

// Hook for Core Web Vitals monitoring
export function useCoreWebVitals() {
  useEffect(() => {
    // Only track in production
    if (import.meta.env.DEV) return;

    const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals';
    
    function getCLS(onPerfEntry: (metric: any) => void) {
      if (typeof onPerfEntry === 'function') {
        import('web-vitals').then(({ getCLS }) => {
          getCLS(onPerfEntry);
        });
      }
    }

    function getFID(onPerfEntry: (metric: any) => void) {
      if (typeof onPerfEntry === 'function') {
        import('web-vitals').then(({ getFID }) => {
          getFID(onPerfEntry);
        });
      }
    }

    function getFCP(onPerfEntry: (metric: any) => void) {
      if (typeof onPerfEntry === 'function') {
        import('web-vitals').then(({ getFCP }) => {
          getFCP(onPerfEntry);
        });
      }
    }

    function getLCP(onPerfEntry: (metric: any) => void) {
      if (typeof onPerfEntry === 'function') {
        import('web-vitals').then(({ getLCP }) => {
          getLCP(onPerfEntry);
        });
      }
    }

    function getTTFB(onPerfEntry: (metric: any) => void) {
      if (typeof onPerfEntry === 'function') {
        import('web-vitals').then(({ getTTFB }) => {
          getTTFB(onPerfEntry);
        });
      }
    }

    function sendToAnalytics(metric: any) {
      // Send to your analytics service
      if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
        const body = JSON.stringify({
          dsn: import.meta.env.VITE_GA_MEASUREMENT_ID,
          id: metric.id,
          page: window.location.pathname,
          href: window.location.href,
          event_name: metric.name,
          value: metric.value.toString(),
          speed: 'web-vitals'
        });

        if (navigator.sendBeacon) {
          navigator.sendBeacon(vitalsUrl, body);
        } else {
          fetch(vitalsUrl, {
            body,
            method: 'POST',
            keepalive: true
          });
        }
      }
    }

    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
  }, []);
}

// Resource hint component for better loading
export function ResourceHints() {
  useEffect(() => {
    // Add resource hints dynamically based on user behavior
    const addResourceHint = (href: string, rel: string, as?: string) => {
      const existing = document.querySelector(`link[href="${href}"]`);
      if (!existing) {
        const link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        if (as) link.setAttribute('as', as);
        document.head.appendChild(link);
      }
    };

    // Preload calculator route if user hovers over calculator links
    const handleCalculatorHover = () => {
      addResourceHint('/calculator', 'prefetch');
    };

    // Preload guide content if user hovers over guide links
    const handleGuideHover = () => {
      addResourceHint('/guides', 'prefetch');
    };

    // Add event listeners to relevant elements
    const calculatorLinks = document.querySelectorAll('a[href*="calculator"]');
    const guideLinks = document.querySelectorAll('a[href*="guide"]');

    calculatorLinks.forEach(link => {
      link.addEventListener('mouseenter', handleCalculatorHover, { once: true });
    });

    guideLinks.forEach(link => {
      link.addEventListener('mouseenter', handleGuideHover, { once: true });
    });

    return () => {
      calculatorLinks.forEach(link => {
        link.removeEventListener('mouseenter', handleCalculatorHover);
      });
      guideLinks.forEach(link => {
        link.removeEventListener('mouseenter', handleGuideHover);
      });
    };
  }, []);

  return null;
}