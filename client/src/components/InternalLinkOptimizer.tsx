import { Link } from 'wouter';
import { ExternalLink } from 'lucide-react';

interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isExternal?: boolean;
  title?: string;
  prefetch?: boolean;
}

// Internal link mapping for SEO optimization
const linkMapping = {
  // Calculator links
  '/': 'Path of Exile Crafting Calculator - Home',
  '/#calculator': 'Interactive Crafting Calculator',
  '/#chromatic': 'Chromatic Orb Calculator',
  '/#jeweller': 'Jeweller\'s Orb Calculator', 
  '/#fusing': 'Orb of Fusing Calculator',
  
  // Guide links
  '/guides': 'Crafting Guides Hub',
  '/guides/path-of-exile-crafting-guide': 'Complete Path of Exile Crafting Guide',
  '/guides/socket-coloring-mechanics': 'Socket Coloring Mechanics Guide',
  '/guides/6-linking-strategies': '6-Linking Strategies Guide',
  '/guides/how-to-use-the-calculator': 'Calculator Tutorial',
  
  // Blog links
  '/blog': 'Crafting Blog & Updates',
  '/blog/top-5-crafting-mistakes': 'Top 5 Crafting Mistakes',
  '/blog/poe-league-crafting-changes': 'League Crafting Changes',
  '/blog/advanced-socket-strategies': 'Advanced Socket Strategies',
  '/blog/poe-settlers-league-crafting-changes': 'Settlers League Changes',
  
  // Support pages
  '/faq': 'Frequently Asked Questions',
  '/about': 'About Vorici Calculator',
  '/privacy-policy': 'Privacy Policy'
};

// Related content suggestions for internal linking
const relatedContent = {
  '/': [
    '/guides/path-of-exile-crafting-guide',
    '/guides/socket-coloring-mechanics', 
    '/faq'
  ],
  '/guides': [
    '/blog/top-5-crafting-mistakes',
    '/',
    '/faq'
  ],
  '/blog': [
    '/guides/path-of-exile-crafting-guide',
    '/guides/6-linking-strategies',
    '/'
  ],
  '/faq': [
    '/',
    '/guides/how-to-use-the-calculator',
    '/about'
  ]
};

export default function InternalLinkOptimizer({ 
  href, 
  children, 
  className = '', 
  isExternal = false,
  title,
  prefetch = false 
}: InternalLinkProps) {
  const linkTitle = title || linkMapping[href as keyof typeof linkMapping] || href;
  
  if (isExternal) {
    return (
      <a 
        href={href}
        className={`${className} inline-flex items-center`}
        target="_blank"
        rel="noopener noreferrer"
        title={linkTitle}
      >
        {children}
        <ExternalLink className="w-3 h-3 ml-1" />
      </a>
    );
  }

  return (
    <Link href={href}>
      <span 
        className={className}
        title={linkTitle}
        data-prefetch={prefetch}
      >
        {children}
      </span>
    </Link>
  );
}

// Related content component for contextual internal linking
export function RelatedContent({ currentPath }: { currentPath: string }) {
  const related = relatedContent[currentPath as keyof typeof relatedContent] || [];
  
  if (related.length === 0) return null;

  return (
    <aside className="bg-poe-surface rounded-xl p-6 border border-poe-accent/20 mt-8">
      <h3 className="text-xl font-semibold text-poe-text mb-4">Related Content</h3>
      <ul className="space-y-2">
        {related.map((link) => (
          <li key={link}>
            <InternalLinkOptimizer 
              href={link}
              className="text-poe-accent hover:text-poe-accent/80 transition-colors"
            >
              {linkMapping[link as keyof typeof linkMapping] || link}
            </InternalLinkOptimizer>
          </li>
        ))}
      </ul>
    </aside>
  );
}

// Contextual anchor text generator for better SEO
export function generateAnchorText(targetUrl: string, context: 'guide' | 'calculator' | 'blog' | 'general' = 'general'): string {
  const variations = {
    '/guides/path-of-exile-crafting-guide': {
      guide: 'comprehensive crafting guide',
      calculator: 'detailed crafting mechanics',
      blog: 'complete Path of Exile crafting guide',
      general: 'master crafting guide'
    },
    '/guides/socket-coloring-mechanics': {
      guide: 'socket coloring mechanics',
      calculator: 'chromatic orb strategies',
      blog: 'socket color optimization',
      general: 'socket coloring guide'
    },
    '/': {
      guide: 'crafting calculator',
      calculator: 'main calculator tool',
      blog: 'Vorici Calculator',
      general: 'Path of Exile calculator'
    }
  };

  const targetVariations = variations[targetUrl as keyof typeof variations];
  return targetVariations?.[context] || linkMapping[targetUrl as keyof typeof linkMapping] || targetUrl;
}