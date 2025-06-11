import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface CanonicalURLProps {
  url?: string;
  forceCanonical?: boolean;
}

export function CanonicalURLManager({ url, forceCanonical = false }: CanonicalURLProps) {
  const [location] = useLocation();

  useEffect(() => {
    // Generate canonical URL
    const baseUrl = 'https://vorici-calculator.com';
    let canonicalUrl = url;
    
    if (!canonicalUrl) {
      // Remove trailing slashes and normalize path
      let normalizedPath = location === '/' ? '' : location.replace(/\/$/, '');
      canonicalUrl = `${baseUrl}${normalizedPath}`;
    }

    // Remove existing canonical link
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Add new canonical link
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = canonicalUrl;
    document.head.appendChild(link);

    // Cleanup on unmount
    return () => {
      const linkToRemove = document.querySelector(`link[rel="canonical"][href="${canonicalUrl}"]`);
      if (linkToRemove) {
        linkToRemove.remove();
      }
    };
  }, [location, url, forceCanonical]);

  return null;
}

// URL optimization utilities
export const URLOptimizer = {
  // Generate SEO-friendly slugs
  generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  },

  // Validate URL structure
  validateURL(url: string): {
    isValid: boolean;
    issues: string[];
    suggestions: string[];
  } {
    const issues: string[] = [];
    const suggestions: string[] = [];

    // Check length
    if (url.length > 100) {
      issues.push('URL too long (over 100 characters)');
      suggestions.push('Consider shortening the URL path');
    }

    // Check for spaces
    if (url.includes(' ')) {
      issues.push('URL contains spaces');
      suggestions.push('Replace spaces with hyphens');
    }

    // Check for uppercase
    if (url !== url.toLowerCase()) {
      issues.push('URL contains uppercase letters');
      suggestions.push('Use lowercase letters only');
    }

    // Check for stop words
    const stopWords = ['and', 'or', 'but', 'the', 'a', 'an', 'to', 'of'];
    const pathParts = url.split('/').filter(Boolean);
    const hasStopWords = pathParts.some(part => 
      stopWords.some(stopWord => part.includes(stopWord))
    );
    
    if (hasStopWords) {
      issues.push('URL contains stop words');
      suggestions.push('Remove unnecessary stop words');
    }

    // Check depth
    if (pathParts.length > 3) {
      issues.push('URL structure too deep');
      suggestions.push('Flatten URL structure for better SEO');
    }

    return {
      isValid: issues.length === 0,
      issues,
      suggestions
    };
  },

  // Analyze page depth and crawlability
  analyzePageDepth(url: string): {
    depth: number;
    isOptimal: boolean;
    crawlability: 'excellent' | 'good' | 'poor';
  } {
    const pathParts = url.split('/').filter(Boolean);
    const depth = pathParts.length;

    let isOptimal = depth <= 2;
    let crawlability: 'excellent' | 'good' | 'poor' = 'excellent';

    if (depth > 2 && depth <= 3) {
      crawlability = 'good';
      isOptimal = false;
    } else if (depth > 3) {
      crawlability = 'poor';
      isOptimal = false;
    }

    return { depth, isOptimal, crawlability };
  }
};

// Component for URL structure validation in development
export function URLStructureValidator() {
  const [location] = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) {
      const validation = URLOptimizer.validateURL(location);
      const depthAnalysis = URLOptimizer.analyzePageDepth(location);

      if (!validation.isValid || !depthAnalysis.isOptimal) {
        console.group('URL Structure Analysis');
        console.log('Current URL:', location);
        console.log('Depth:', depthAnalysis.depth, `(${depthAnalysis.crawlability})`);
        
        if (validation.issues.length > 0) {
          console.warn('Issues:', validation.issues);
          console.info('Suggestions:', validation.suggestions);
        }
        
        console.groupEnd();
      }
    }
  }, [location]);

  return null;
}