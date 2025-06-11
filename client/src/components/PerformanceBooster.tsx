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

    const sendToAnalytics = (metric: any) => {
      // Send to Google Analytics if available
      if (import.meta.env.VITE_GA_MEASUREMENT_ID && 'gtag' in window) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_label: metric.id,
          non_interaction: true,
        });
      }
    };

    // Manual performance tracking with native APIs
    if ('performance' in window && 'PerformanceObserver' in window) {
      try {
        // Track Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          sendToAnalytics({ name: 'LCP', value: lastEntry.startTime, id: 'observer' });
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Track First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.name === 'first-contentful-paint') {
              sendToAnalytics({ name: 'FCP', value: entry.startTime, id: 'observer' });
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Track Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          if (clsValue > 0) {
            sendToAnalytics({ name: 'CLS', value: clsValue, id: 'observer' });
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

      } catch (e) {
        console.warn('Performance monitoring unavailable');
      }
    }
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