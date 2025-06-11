# Deployment Guide - Vorici Calculator

## Prerequisites

- Node.js 18+ installed
- Netlify account (recommended) or alternative hosting platform
- Google Analytics 4 account (optional)
- Domain name (optional)

## Environment Variables

### Required for Analytics
```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX  # Your Google Analytics 4 measurement ID
```

### Optional
```bash
NODE_ENV=production
```

## Quick Deployment to Netlify

### Method 1: Git Integration (Recommended)
1. Push your code to GitHub/GitLab
2. Connect repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Deploy

### Method 2: Manual Upload
1. Run `npm run build` locally
2. Upload `dist` folder to Netlify
3. Configure redirects in Netlify dashboard

## Build Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type checking
npm run check
```

## File Structure After Build

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other assets]
├── sitemap.xml
├── robots.txt
├── manifest.json
├── sw.js
└── [other static files]
```

## Configuration Files

### netlify.toml
Already configured with:
- SPA routing redirects
- Security headers
- Cache optimization
- Build settings

### robots.txt
Configured for:
- Search engine crawling
- Sitemap location
- Asset protection

### sitemap.xml
Includes all pages with:
- Proper priorities
- Update frequencies
- Last modification dates

## DNS & Domain Setup

### Custom Domain
1. Add domain in Netlify dashboard
2. Update DNS records:
   ```
   CNAME www your-site.netlify.app
   A @ 75.2.60.5
   ```

### SSL Certificate
- Automatically provisioned by Netlify
- Includes www and apex domain
- Auto-renewal enabled

## Analytics Setup

### Google Analytics 4
1. Create GA4 property
2. Get measurement ID (G-XXXXXXXXXX)
3. Add to environment variables
4. Verify tracking in GA4 dashboard

### Search Console
1. Add property in Google Search Console
2. Verify ownership via DNS or HTML file
3. Submit sitemap: `https://yourdomain.com/sitemap.xml`

## Performance Optimization

### Automated Optimizations
- Vite build optimization
- Asset compression
- Code splitting
- Tree shaking
- Critical CSS inlining

### CDN Configuration
- Static assets cached for 1 year
- HTML cached for 1 hour
- Automatic GZIP compression

### Core Web Vitals Targets
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1
- First Input Delay: <100ms

## Monitoring & Analytics

### Key Metrics to Track
- Calculator usage rates
- Session duration
- Page load times
- Error rates
- User flow completion

### Recommended Tools
- Google Analytics 4 (user behavior)
- Google Search Console (SEO)
- Netlify Analytics (traffic)
- Lighthouse CI (performance)

## Security

### Headers Configured
- Content Security Policy
- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Referrer Policy

### Data Protection
- No sensitive data stored
- LocalStorage only for preferences
- No backend database
- GDPR compliant

## Troubleshooting

### Common Issues

#### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Analytics Not Tracking
- Verify measurement ID format
- Check browser console for errors
- Ensure environment variable is set

#### PWA Not Installing
- Verify manifest.json is accessible
- Check service worker registration
- Ensure HTTPS is enabled

#### Routing Issues
- Verify netlify.toml redirects
- Check SPA routing configuration
- Ensure all routes return index.html

### Support Resources
- GitHub Issues: [Repository URL]
- Documentation: This file
- Community: Reddit r/pathofexile

## Maintenance

### Regular Tasks
- Update dependencies monthly
- Monitor Core Web Vitals
- Review analytics data
- Update content for new leagues

### League Updates
- Update calculation formulas if mechanics change
- Refresh blog content for new leagues
- Monitor community feedback
- Update meta descriptions with current league

## Success Metrics

### Technical KPIs
- Lighthouse Performance Score: 90+
- Core Web Vitals: All green
- Uptime: 99.9%+
- Page Load Time: <2s

### Business KPIs
- Monthly Active Users: 1,000+
- Calculator Usage Rate: 70%+
- Session Duration: 3+ minutes
- Return Visitor Rate: 40%+

## Scaling Considerations

### Traffic Growth
- Netlify handles automatic scaling
- CDN ensures global performance
- No server-side bottlenecks

### Feature Additions
- Modular architecture supports extensions
- TypeScript ensures code quality
- Component library enables rapid development

## Backup & Recovery

### Automated Backups
- Git repository (code)
- Netlify deployment history
- Analytics data export

### Recovery Procedures
1. Revert to previous deployment
2. Restore from Git history
3. Rebuild from source

This deployment guide ensures a smooth launch and ongoing operation of the Vorici Calculator.