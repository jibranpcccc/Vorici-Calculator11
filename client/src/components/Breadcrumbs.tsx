import { useLocation } from "wouter";
import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import { useEffect } from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

const pathLabels: Record<string, string> = {
  '': 'Home',
  'guides': 'Guides',
  'blog': 'Blog',
  'faq': 'FAQ',
  'about': 'About',
  'privacy-policy': 'Privacy Policy',
  'path-of-exile-crafting-guide': 'Complete Path of Exile Crafting Guide',
  'socket-coloring-mechanics': 'Socket Coloring Mechanics Guide',
  '6-linking-strategies': '6-Linking Strategies Guide',
  'how-to-use-the-calculator': 'How to Use the Calculator',
  'top-5-crafting-mistakes': 'Top 5 Path of Exile Crafting Mistakes',
  'poe-league-crafting-changes': 'PoE League Crafting Changes',
  'advanced-socket-strategies': 'Advanced Socket Strategies',
  'poe-settlers-league-crafting-changes': 'PoE Settlers League Crafting Changes'
};

export default function Breadcrumbs() {
  const [location] = useLocation();
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ];

    let currentPath = '';
    for (const segment of pathSegments) {
      currentPath += `/${segment}`;
      const label = pathLabels[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      breadcrumbs.push({
        label,
        href: currentPath
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Generate JSON-LD structured data for breadcrumbs
  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.label,
        "item": `https://vorici-calculator.com${crumb.href}`
      }))
    };

    // Remove existing breadcrumb schema
    const existingSchema = document.querySelector('script[type="application/ld+json"][data-breadcrumb]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Add new breadcrumb schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      const schemaToRemove = document.querySelector('script[type="application/ld+json"][data-breadcrumb]');
      if (schemaToRemove) {
        schemaToRemove.remove();
      }
    };
  }, [location]);

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-4 px-4 bg-poe-darker border-b border-poe-accent/20">
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 mx-2 text-poe-text-secondary" />
            )}
            {index === 0 && (
              <Home className="w-4 h-4 mr-2 text-poe-accent" />
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-poe-accent font-medium" aria-current="page">
                {crumb.label}
              </span>
            ) : (
              <Link href={crumb.href}>
                <span className="text-poe-text-secondary hover:text-poe-accent transition-colors">
                  {crumb.label}
                </span>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}