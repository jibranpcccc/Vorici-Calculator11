import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface OpenGraphData {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  locale?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
}

export function useOpenGraphOptimization(data: OpenGraphData) {
  const [location] = useLocation();

  useEffect(() => {
    const updateMetaTag = (property: string, content: string, isProperty = true) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const baseUrl = 'https://vorici-calculator.com';
    const currentUrl = `${baseUrl}${location}`;
    
    // Default values based on current page
    const defaults = getPageDefaults(location);
    
    // Open Graph tags
    updateMetaTag('og:title', data.title || defaults.title);
    updateMetaTag('og:description', data.description || defaults.description);
    updateMetaTag('og:image', data.image || defaults.image);
    updateMetaTag('og:url', data.url || currentUrl);
    updateMetaTag('og:type', data.type || 'website');
    updateMetaTag('og:site_name', data.siteName || 'Vorici Calculator');
    updateMetaTag('og:locale', data.locale || 'en_US');
    
    // Additional OG tags for better sharing
    updateMetaTag('og:image:width', '1200');
    updateMetaTag('og:image:height', '630');
    updateMetaTag('og:image:alt', data.title || defaults.title);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', data.twitterCard || 'summary_large_image', false);
    updateMetaTag('twitter:site', data.twitterSite || '@VoriciCalc', false);
    updateMetaTag('twitter:creator', data.twitterCreator || '@VoriciCalc', false);
    updateMetaTag('twitter:title', data.title || defaults.title, false);
    updateMetaTag('twitter:description', data.description || defaults.description, false);
    updateMetaTag('twitter:image', data.image || defaults.image, false);
    updateMetaTag('twitter:image:alt', data.title || defaults.title, false);
    
    // Additional social media optimizations
    updateMetaTag('article:publisher', 'https://www.facebook.com/VoriciCalculator');
    updateMetaTag('fb:app_id', ''); // Add if Facebook app exists
    
  }, [data, location]);
}

function getPageDefaults(location: string): Required<Pick<OpenGraphData, 'title' | 'description' | 'image'>> {
  const baseImage = 'https://vorici-calculator.com/images/og-image.jpg';
  
  switch (location) {
    case '/':
      return {
        title: 'Vorici Calculator - Path of Exile Crafting Cost Calculator',
        description: 'Calculate optimal crafting costs for Path of Exile. Real-time socket coloring, jeweller\'s orb, and fusing orb probability calculations.',
        image: baseImage
      };
    
    case '/guides':
      return {
        title: 'Path of Exile Crafting Guides - Complete Strategy Hub',
        description: 'Master Path of Exile crafting with comprehensive guides on socket coloring, linking strategies, and currency optimization.',
        image: baseImage
      };
    
    case '/guides/path-of-exile-crafting-guide':
      return {
        title: 'Complete Path of Exile Crafting Guide - Master Every Method',
        description: 'Comprehensive 3200+ word guide covering all Path of Exile crafting systems, from basics to advanced techniques.',
        image: baseImage
      };
    
    case '/guides/socket-coloring-mechanics':
      return {
        title: 'Socket Coloring Mechanics Guide - Path of Exile Off-Coloring',
        description: 'Master socket coloring with probability tables, attribute weighting explanations, and advanced off-coloring strategies.',
        image: baseImage
      };
    
    case '/guides/6-linking-strategies':
      return {
        title: '6-Linking Strategies Guide - Path of Exile Item Linking',
        description: 'Complete guide to 6-linking items efficiently, including quality impact analysis and cost optimization strategies.',
        image: baseImage
      };
    
    case '/blog':
      return {
        title: 'Path of Exile Crafting Blog - Latest Updates & Strategies',
        description: 'Stay updated with the latest Path of Exile league changes, crafting strategies, and community insights.',
        image: baseImage
      };
    
    case '/faq':
      return {
        title: 'Frequently Asked Questions - Vorici Calculator Help',
        description: 'Common questions about Path of Exile crafting calculations, socket coloring, and using the Vorici Calculator.',
        image: baseImage
      };
    
    case '/about':
      return {
        title: 'About Vorici Calculator - Expert Path of Exile Tool Team',
        description: 'Meet the expert team behind Path of Exile\'s most trusted crafting calculator, serving 100k+ players worldwide.',
        image: baseImage
      };
    
    default:
      return {
        title: 'Vorici Calculator - Path of Exile Crafting Tool',
        description: 'Professional Path of Exile crafting calculator with real-time probability calculations and cost optimization.',
        image: baseImage
      };
  }
}

// Automatic Open Graph optimization component
export function OpenGraphOptimizer() {
  const [location] = useLocation();
  const defaults = getPageDefaults(location);
  
  useOpenGraphOptimization({
    title: defaults.title,
    description: defaults.description,
    image: defaults.image
  });
  
  return null;
}