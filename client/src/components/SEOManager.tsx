import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { HeadingStructureMonitor } from './HeadingStructureValidator';
import { MobileOptimizationMonitor } from './MobileOptimizationValidator';
import { AccessibilityMonitor, SkipNavigation } from './AccessibilityValidator';
import { URLOptimizer } from './URLOptimizer';

// Comprehensive SEO management system
export default function SEOManager() {
  const [location] = useLocation();

  useEffect(() => {
    // Add skip navigation if not present
    if (!document.querySelector('a[href="#main-content"]')) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-poe-accent text-poe-dark px-4 py-2 rounded-md z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Ensure main content area has proper ID
    const main = document.querySelector('main');
    if (main && !main.id) {
      main.id = 'main-content';
    }

    // Add focus outline styles for accessibility
    const style = document.createElement('style');
    style.textContent = `
      .focus\\:outline-none:focus {
        outline: 2px solid #d4af37 !important;
        outline-offset: 2px !important;
      }
      
      .sr-only {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      }
      
      .focus\\:not-sr-only:focus {
        position: static !important;
        width: auto !important;
        height: auto !important;
        padding: 0.5rem 1rem !important;
        margin: 0 !important;
        overflow: visible !important;
        clip: auto !important;
        white-space: normal !important;
      }
    `;
    
    if (!document.querySelector('#seo-accessibility-styles')) {
      style.id = 'seo-accessibility-styles';
      document.head.appendChild(style);
    }

    // Add lang attribute if missing
    if (!document.documentElement.lang) {
      document.documentElement.lang = 'en';
    }

    // Optimize image loading
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach((img, index) => {
      if (index < 3) {
        img.setAttribute('loading', 'eager');
        img.setAttribute('fetchpriority', 'high');
      } else {
        img.setAttribute('loading', 'lazy');
      }
    });

    // Add preload hints for critical resources
    const preloadHints = [
      { href: '/favicon.ico', as: 'image', type: 'image/x-icon' },
      { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
      { href: 'https://fonts.gstatic.com', rel: 'preconnect', crossorigin: 'anonymous' }
    ];

    preloadHints.forEach(hint => {
      const existing = document.querySelector(`link[href="${hint.href}"]`);
      if (!existing) {
        const link = document.createElement('link');
        if (hint.rel) {
          link.rel = hint.rel;
        } else {
          link.rel = 'preload';
          link.as = hint.as!;
          if (hint.type) link.type = hint.type;
        }
        link.href = hint.href;
        if (hint.crossorigin) link.crossOrigin = hint.crossorigin;
        document.head.appendChild(link);
      }
    });

    // Performance optimization
    const performanceObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          console.debug('LCP:', entry.startTime);
        }
        if (entry.entryType === 'first-input') {
          console.debug('FID:', entry.processingStart - entry.startTime);
        }
      });
    });

    if ('PerformanceObserver' in window) {
      performanceObserver.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
    }

    return () => {
      if ('PerformanceObserver' in window) {
        performanceObserver.disconnect();
      }
    };
  }, [location]);

  return (
    <>
      <SkipNavigation />
      <HeadingStructureMonitor />
      <MobileOptimizationMonitor />
      <AccessibilityMonitor />
      <URLOptimizer />
    </>
  );
}

// Content quality validator
export function validateContentQuality(element: HTMLElement): {
  readability: number;
  keywordDensity: Record<string, number>;
  wordCount: number;
  sentenceCount: number;
  suggestions: string[];
} {
  const text = element.textContent || '';
  const words = text.toLowerCase().split(/\s+/).filter(word => word.length > 0);
  const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
  
  // Calculate basic readability (Flesch Reading Ease approximation)
  const avgWordsPerSentence = words.length / sentences.length;
  const avgSyllablesPerWord = words.reduce((sum, word) => {
    return sum + countSyllables(word);
  }, 0) / words.length;
  
  const readabilityScore = 206.835 - (1.015 * avgWordsPerSentence) - (84.6 * avgSyllablesPerWord);
  
  // Calculate keyword density
  const keywordDensity: Record<string, number> = {};
  const targetKeywords = ['path', 'exile', 'crafting', 'calculator', 'socket', 'orb', 'vorici'];
  
  targetKeywords.forEach(keyword => {
    const count = words.filter(word => word.includes(keyword)).length;
    keywordDensity[keyword] = (count / words.length) * 100;
  });
  
  // Generate suggestions
  const suggestions: string[] = [];
  
  if (words.length < 300) {
    suggestions.push('Consider expanding content - minimum 300 words recommended for SEO');
  }
  
  if (readabilityScore < 60) {
    suggestions.push('Content may be too complex - consider shorter sentences and simpler words');
  }
  
  if (avgWordsPerSentence > 20) {
    suggestions.push('Average sentence length is too long - aim for 15-20 words per sentence');
  }
  
  const totalKeywordDensity = Object.values(keywordDensity).reduce((sum, density) => sum + density, 0);
  if (totalKeywordDensity < 1) {
    suggestions.push('Keyword density is low - include more target keywords naturally');
  } else if (totalKeywordDensity > 5) {
    suggestions.push('Keyword density is high - reduce keyword usage to avoid over-optimization');
  }
  
  return {
    readability: Math.max(0, Math.min(100, readabilityScore)),
    keywordDensity,
    wordCount: words.length,
    sentenceCount: sentences.length,
    suggestions
  };
}

function countSyllables(word: string): number {
  word = word.toLowerCase();
  if (word.length <= 3) return 1;
  
  const vowels = 'aeiouy';
  let syllableCount = 0;
  let previousWasVowel = false;
  
  for (let i = 0; i < word.length; i++) {
    const isVowel = vowels.includes(word[i]);
    if (isVowel && !previousWasVowel) {
      syllableCount++;
    }
    previousWasVowel = isVowel;
  }
  
  // Handle silent 'e'
  if (word.endsWith('e')) {
    syllableCount--;
  }
  
  return Math.max(1, syllableCount);
}