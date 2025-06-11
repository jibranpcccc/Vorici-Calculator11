#!/bin/bash

# Production deployment script for static hosting
# Optimizes build for maximum performance

echo "🚀 Building optimized production bundle..."

# Clean previous builds
rm -rf dist/

# Set production environment
export NODE_ENV=production
export VITE_PROD_BUILD=true

# Build with optimizations
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully"
    
    # Copy static assets to dist root
    cp -r client/public/* dist/public/ 2>/dev/null || true
    
    # Create deployment info
    echo "Built at: $(date)" > dist/public/build-info.txt
    echo "Optimizations: fonts-local, css-critical, lazy-loading, compression" >> dist/public/build-info.txt
    
    # Calculate bundle sizes
    echo "📊 Bundle Analysis:"
    find dist/public/assets -name "*.js" -exec wc -c {} + | tail -1 | awk '{print "JavaScript: " $1/1024 " KB"}'
    find dist/public/assets -name "*.css" -exec wc -c {} + | tail -1 | awk '{print "CSS: " $1/1024 " KB"}'
    
    echo "🎯 Ready for deployment to:"
    echo "  • Replit Deployments (Static Edge)"
    echo "  • Netlify"
    echo "  • Vercel"
    echo "  • Any static host with CDN"
    
else
    echo "❌ Build failed"
    exit 1
fi