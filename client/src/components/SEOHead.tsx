import { useEffect } from "react";
import { useLocation } from "wouter";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  schemaData?: object | object[];
  ogImage?: string;
  ogType?: string;
  articleData?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

const defaultMetadata = {
  title: "Vorici Calculator - Path of Exile Crafting Cost Calculator",
  description: "Calculate optimal crafting costs for Path of Exile. Real-time socket coloring, jeweller's orb, and fusing orb probability calculations with accurate PoE mechanics.",
  keywords: "path of exile, poe, crafting calculator, vorici calculator, socket coloring, jeweller orb, fusing orb, poe crafting, path of exile calculator",
  ogImage: "https://vorici-calculator.com/og-image.png"
};

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  schemaData,
  ogImage,
  ogType = "website",
  articleData
}: SEOHeadProps) {
  const [location] = useLocation();
  
  useEffect(() => {
    const finalTitle = title || defaultMetadata.title;
    const finalDescription = description || defaultMetadata.description;
    const finalKeywords = keywords || defaultMetadata.keywords;
    const finalOgImage = ogImage || defaultMetadata.ogImage;
    const finalCanonicalUrl = canonicalUrl || `https://vorici-calculator.com${location}`;

    // Update title
    document.title = finalTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', finalDescription);
    updateMetaTag('keywords', finalKeywords);
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('author', 'Vorici Calculator Team');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags
    updateMetaTag('og:title', finalTitle, true);
    updateMetaTag('og:description', finalDescription, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', finalCanonicalUrl, true);
    updateMetaTag('og:image', finalOgImage, true);
    updateMetaTag('og:image:alt', 'Vorici Calculator - Path of Exile Crafting Tool', true);
    updateMetaTag('og:site_name', 'Vorici Calculator', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', finalTitle);
    updateMetaTag('twitter:description', finalDescription);
    updateMetaTag('twitter:image', finalOgImage);
    updateMetaTag('twitter:creator', '@VoriciCalculator');
    updateMetaTag('twitter:site', '@VoriciCalculator');

    // Article-specific meta tags
    if (articleData) {
      if (articleData.publishedTime) {
        updateMetaTag('article:published_time', articleData.publishedTime, true);
      }
      if (articleData.modifiedTime) {
        updateMetaTag('article:modified_time', articleData.modifiedTime, true);
      }
      if (articleData.author) {
        updateMetaTag('article:author', articleData.author, true);
      }
      if (articleData.section) {
        updateMetaTag('article:section', articleData.section, true);
      }
      if (articleData.tags) {
        articleData.tags.forEach(tag => {
          const tagMeta = document.createElement('meta');
          tagMeta.setAttribute('property', 'article:tag');
          tagMeta.setAttribute('content', tag);
          document.head.appendChild(tagMeta);
        });
      }
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', finalCanonicalUrl);

    // Schema.org structured data
    if (schemaData) {
      // Remove existing schema
      const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]:not([data-breadcrumb])');
      existingSchemas.forEach(schema => schema.remove());

      // Add new schema
      const schemas = Array.isArray(schemaData) ? schemaData : [schemaData];
      schemas.forEach(schema => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    // Additional SEO meta tags
    updateMetaTag('theme-color', '#d4af37');
    updateMetaTag('msapplication-TileColor', '#0a0a0a');
    updateMetaTag('application-name', 'Vorici Calculator');
    updateMetaTag('apple-mobile-web-app-title', 'Vorici Calculator');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    updateMetaTag('format-detection', 'telephone=no');

  }, [title, description, keywords, canonicalUrl, schemaData, ogImage, ogType, articleData, location]);

  return null;
}