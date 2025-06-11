import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Sitemap.xml endpoint
  app.get('/sitemap.xml', (_req, res) => {
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
      { url: '/blog/advanced-socket-strategies', priority: '0.7', changefreq: 'monthly' },
      { url: '/blog/poe-settlers-league-crafting-changes', priority: '0.7', changefreq: 'monthly' },
      { url: '/faq', priority: '0.6', changefreq: 'monthly' },
      { url: '/about', priority: '0.5', changefreq: 'yearly' },
      { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
      { url: '/terms', priority: '0.3', changefreq: 'yearly' }
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

    res.set('Content-Type', 'application/xml');
    res.send(sitemap);
  });

  // Robots.txt endpoint
  app.get('/robots.txt', (_req, res) => {
    const robots = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://vorici-calculator.com/sitemap.xml`;
    
    res.set('Content-Type', 'text/plain');
    res.send(robots);
  });

  const httpServer = createServer(app);

  return httpServer;
}
