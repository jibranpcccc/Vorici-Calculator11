// SEO utilities for generating dynamic content and structured data

export interface PageMeta {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  lastModified?: string;
}

export const generatePageMeta = (
  type: 'homepage' | 'calculator' | 'guide' | 'blog' | 'faq',
  customData?: Partial<PageMeta>
): PageMeta => {
  const baseDomain = 'https://vorici-calculator.com';
  
  const defaults: Record<string, PageMeta> = {
    homepage: {
      title: 'Vorici Calculator | Instant PoE Socket-Colour Odds & Bench Costs',
      description: 'Calculate instant off-colour socket odds for Path of Exile. Live probability charts, updated crafting bench costs for Patch 3.25, and step-by-step off-colouring guide.',
      keywords: ['vorici calculator', 'poe chromatic calculator', 'socket colour chance', 'off-colour sockets', 'crafting bench costs', 'path of exile', 'chromatic orb', 'tainted chromatic'],
      canonicalUrl: baseDomain,
      ogImage: `${baseDomain}/images/calculator-preview.jpg`
    },
    calculator: {
      title: 'Path of Exile Crafting Calculator | Socket Colors & Linking Costs',
      description: 'Professional PoE crafting calculator for chromatic orbs, jeweller orbs, and orbs of fusing. Real-time cost analysis with session tracking.',
      keywords: ['poe calculator', 'path of exile crafting', 'socket calculator', 'chromatic calculator', 'jeweller calculator', 'fusing calculator'],
      canonicalUrl: `${baseDomain}/calculator`,
      ogImage: `${baseDomain}/images/calculator-tool.jpg`
    },
    guide: {
      title: 'Path of Exile Crafting Guides | Socket Coloring & Linking Strategies',
      description: 'Expert guides for Path of Exile socket crafting, off-coloring techniques, and optimal currency usage strategies.',
      keywords: ['poe guides', 'socket coloring guide', 'path of exile crafting', 'off-color sockets', 'vorici method'],
      canonicalUrl: `${baseDomain}/guides`,
      ogImage: `${baseDomain}/images/crafting-guide.jpg`
    },
    blog: {
      title: 'Path of Exile Crafting Blog | Latest Tips & Strategies',
      description: 'Latest Path of Exile crafting news, optimization tips, and community strategies for socket coloring and item crafting.',
      keywords: ['poe blog', 'path of exile news', 'crafting tips', 'socket strategies', 'poe updates'],
      canonicalUrl: `${baseDomain}/blog`,
      ogImage: `${baseDomain}/images/blog-preview.jpg`
    },
    faq: {
      title: 'Path of Exile Crafting FAQ | Common Socket & Crafting Questions',
      description: 'Frequently asked questions about Path of Exile socket coloring, crafting bench costs, and optimal currency strategies.',
      keywords: ['poe faq', 'socket questions', 'crafting help', 'chromatic orb help', 'path of exile help'],
      canonicalUrl: `${baseDomain}/faq`,
      ogImage: `${baseDomain}/images/faq-preview.jpg`
    }
  };

  return {
    ...defaults[type],
    ...customData,
    lastModified: new Date().toISOString()
  };
};

export const generateSitemap = () => {
  const baseUrl = 'https://vorici-calculator.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const pages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/guides', priority: '0.9', changefreq: 'weekly' },
    { url: '/guides/socket-coloring-mechanics', priority: '0.8', changefreq: 'monthly' },
    { url: '/guides/6-linking-strategies', priority: '0.8', changefreq: 'monthly' },
    { url: '/guides/path-of-exile-crafting-guide', priority: '0.8', changefreq: 'monthly' },
    { url: '/guides/how-to-use-the-calculator', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/blog/top-5-crafting-mistakes', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog/chromatic-orb-optimization', priority: '0.7', changefreq: 'monthly' },
    { url: '/faq', priority: '0.6', changefreq: 'monthly' },
    { url: '/about', priority: '0.5', changefreq: 'yearly' },
    { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

export const validateSEO = (element: HTMLElement) => {
  const issues: string[] = [];
  const recommendations: string[] = [];

  // Check title tag
  const title = document.title;
  if (!title) {
    issues.push('Missing title tag');
  } else if (title.length < 30) {
    recommendations.push('Title is too short - consider expanding to 50-60 characters');
  } else if (title.length > 60) {
    recommendations.push('Title is too long - consider shortening to under 60 characters');
  }

  // Check meta description
  const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content');
  if (!metaDesc) {
    issues.push('Missing meta description');
  } else if (metaDesc.length < 120) {
    recommendations.push('Meta description is short - consider expanding to 150-160 characters');
  } else if (metaDesc.length > 160) {
    recommendations.push('Meta description is too long - consider shortening to under 160 characters');
  }

  // Check heading structure
  const headings = Array.from(element.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  const h1s = headings.filter(h => h.tagName === 'H1');
  
  if (h1s.length === 0) {
    issues.push('Missing H1 tag');
  } else if (h1s.length > 1) {
    issues.push(`Multiple H1 tags found (${h1s.length})`);
  }

  // Check images without alt text
  const images = Array.from(element.querySelectorAll('img'));
  const imagesWithoutAlt = images.filter(img => !img.getAttribute('alt'));
  if (imagesWithoutAlt.length > 0) {
    issues.push(`${imagesWithoutAlt.length} images missing alt text`);
  }

  return {
    issues,
    recommendations,
    score: Math.max(0, 100 - (issues.length * 20) - (recommendations.length * 5))
  };
};