import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

interface PerformanceReport {
  metrics: PerformanceMetrics;
  scores: {
    performance: number;
    accessibility: number;
    seo: number;
  };
  optimizations: string[];
}

export function usePerformanceMonitoring(): PerformanceReport {
  const [report, setReport] = useState<PerformanceReport>({
    metrics: { fcp: 0, lcp: 0, fid: 0, cls: 0, ttfb: 0 },
    scores: { performance: 0, accessibility: 0, seo: 0 },
    optimizations: []
  });

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window === 'undefined' || !('performance' in window)) return;

      const optimizations: string[] = [];
      
      // Web Vitals measurement
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        
        entries.forEach((entry) => {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint' && entry.startTime > 1800) {
              optimizations.push('Optimize First Contentful Paint (current: ' + Math.round(entry.startTime) + 'ms)');
            }
          }
          
          if (entry.entryType === 'largest-contentful-paint') {
            if (entry.startTime > 2500) {
              optimizations.push('Optimize Largest Contentful Paint (current: ' + Math.round(entry.startTime) + 'ms)');
            }
          }
          
          if (entry.entryType === 'layout-shift' && (entry as any).value > 0.1) {
            optimizations.push('Reduce Cumulative Layout Shift (current: ' + (entry as any).value.toFixed(3) + ')');
          }
        });
      });

      // Observe various performance metrics
      try {
        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift'] });
      } catch (e) {
        // Fallback for browsers that don't support all entry types
      }

      // Check navigation timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart;
        if (ttfb > 600) {
          optimizations.push('Improve server response time (TTFB: ' + Math.round(ttfb) + 'ms)');
        }
      }

      // Resource loading analysis
      const resources = performance.getEntriesByType('resource');
      let largeImages = 0;
      let unoptimizedResources = 0;

      resources.forEach((resource) => {
        if (resource.name.includes('.jpg') || resource.name.includes('.png')) {
          if ((resource as any).transferSize > 100000) { // 100KB
            largeImages++;
          }
        }
        if (!resource.name.includes('.webp') && 
            (resource.name.includes('.jpg') || resource.name.includes('.png'))) {
          unoptimizedResources++;
        }
      });

      if (largeImages > 0) {
        optimizations.push(`Compress ${largeImages} large images (>100KB)`);
      }
      if (unoptimizedResources > 0) {
        optimizations.push(`Convert ${unoptimizedResources} images to WebP format`);
      }

      // DOM analysis
      const elements = document.querySelectorAll('*').length;
      if (elements > 1500) {
        optimizations.push('Reduce DOM complexity (current: ' + elements + ' elements)');
      }

      // CSS and JS analysis
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]').length;
      const scripts = document.querySelectorAll('script').length;
      
      if (stylesheets > 5) {
        optimizations.push('Minimize CSS files (current: ' + stylesheets + ' stylesheets)');
      }
      if (scripts > 10) {
        optimizations.push('Minimize JavaScript files (current: ' + scripts + ' scripts)');
      }

      setReport(prev => ({
        ...prev,
        optimizations: Array.from(new Set(optimizations)) // Remove duplicates
      }));
    };

    // Run initial measurement
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  return report;
}

// Core Web Vitals optimization hooks
export function useCoreWebVitals() {
  const [vitals, setVitals] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0
  });

  useEffect(() => {
    // Only run in production for accurate measurements
    if (import.meta.env.DEV) return;

    // Simplified vitals measurement without external library
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setVitals(prev => ({ ...prev, fcp: entry.startTime }));
        }
        if (entry.entryType === 'largest-contentful-paint') {
          setVitals(prev => ({ ...prev, lcp: entry.startTime }));
        }
        if (entry.entryType === 'layout-shift') {
          setVitals(prev => ({ ...prev, cls: (entry as any).value }));
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift'] });
    } catch (e) {
      // Browser doesn't support these metrics
    }
  }, []);

  return vitals;
}

// Performance optimization component
export function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const criticalResources = [
      '/fonts/font.woff2',
      '/images/logo.svg'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.includes('font') ? 'font' : 'image';
      if (resource.includes('font')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });

    // Optimize images with Intersection Observer
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    // Observe all lazy images
    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });

    return () => {
      imageObserver.disconnect();
    };
  }, []);

  return null;
}

// Performance monitoring panel for development
export function PerformancePanel() {
  const report = usePerformanceMonitoring();
  const [isVisible, setIsVisible] = useState(false);

  if (import.meta.env.PROD) return null;

  return (
    <div className="fixed bottom-68 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-orange-500 text-white px-3 py-2 rounded-lg text-sm font-medium"
      >
        Performance
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 w-80 bg-poe-surface border border-poe-accent/20 rounded-lg p-4 shadow-lg max-h-96 overflow-y-auto">
          <h3 className="text-poe-accent font-semibold mb-3">Performance Report</h3>
          
          {report.optimizations.length > 0 ? (
            <div>
              <h4 className="text-sm font-medium text-poe-text mb-2">Optimizations Needed:</h4>
              <ul className="space-y-1 text-xs text-poe-text-secondary">
                {report.optimizations.map((opt, index) => (
                  <li key={index}>• {opt}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="text-green-400 text-sm">
              ✓ Performance looks good!
            </div>
          )}
        </div>
      )}
    </div>
  );
}