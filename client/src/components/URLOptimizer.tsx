import { useEffect } from 'react';
import { useLocation } from 'wouter';

// Clean URL structure mapping
const urlPatterns = {
  // Clean, keyword-rich URLs
  '/guides/path-of-exile-crafting-guide': {
    clean: true,
    keywords: ['path', 'exile', 'crafting', 'guide'],
    depth: 2
  },
  '/guides/socket-coloring-mechanics': {
    clean: true,
    keywords: ['socket', 'coloring', 'mechanics'],
    depth: 2
  },
  '/guides/6-linking-strategies': {
    clean: true,
    keywords: ['6', 'linking', 'strategies'],
    depth: 2
  },
  '/blog/top-5-crafting-mistakes': {
    clean: true,
    keywords: ['top', '5', 'crafting', 'mistakes'],
    depth: 2
  },
  '/blog/poe-settlers-league-crafting-changes': {
    clean: true,
    keywords: ['poe', 'settlers', 'league', 'crafting', 'changes'],
    depth: 2
  }
};

// URL validation and optimization
export function validateURL(url: string): boolean {
  // Check for clean URL structure
  const hasCleanStructure = !url.includes('?') && !url.includes('#') && url.length < 100;
  const hasKeywords = url.split('/').some(segment => 
    ['poe', 'crafting', 'guide', 'calculator', 'socket', 'linking'].includes(segment)
  );
  const hasReasonableDepth = url.split('/').filter(Boolean).length <= 3;
  
  return hasCleanStructure && hasKeywords && hasReasonableDepth;
}

// Generate SEO-friendly slugs
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Remove multiple consecutive hyphens
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

// URL breadcrumb optimization for SEO
export function URLOptimizer() {
  const [location] = useLocation();

  useEffect(() => {
    // Track URL structure for SEO analytics
    const currentPattern = urlPatterns[location as keyof typeof urlPatterns];
    
    if (currentPattern) {
      // Log clean URL structure
      console.debug('SEO URL Validated:', {
        url: location,
        keywords: currentPattern.keywords,
        depth: currentPattern.depth,
        clean: currentPattern.clean
      });
    }

    // Ensure proper URL formatting
    if (!validateURL(location)) {
      console.warn('URL structure could be optimized:', location);
    }
  }, [location]);

  return null; // This is a utility component
}

// Canonical URL generator
export function generateCanonicalURL(path: string): string {
  const baseURL = 'https://vorici-calculator.com';
  const cleanPath = path.replace(/\/$/, '') || '/'; // Remove trailing slash except for root
  return `${baseURL}${cleanPath}`;
}

// URL hierarchy validation
export function validatePageDepth(url: string): { isOptimal: boolean; depth: number; suggestions: string[] } {
  const segments = url.split('/').filter(Boolean);
  const depth = segments.length;
  const suggestions: string[] = [];

  if (depth > 3) {
    suggestions.push('Consider flattening URL structure for better crawlability');
  }

  if (depth === 0) {
    suggestions.push('Root page - optimal for homepage');
  } else if (depth <= 2) {
    suggestions.push('Optimal page depth for SEO');
  }

  return {
    isOptimal: depth <= 2,
    depth,
    suggestions
  };
}