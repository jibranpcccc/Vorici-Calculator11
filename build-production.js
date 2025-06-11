#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting production build optimization...');

// Set production environment
process.env.NODE_ENV = 'production';

try {
  // Clean previous builds
  console.log('🧹 Cleaning previous builds...');
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }

  // Build with optimizations
  console.log('📦 Building optimized production bundle...');
  execSync('vite build --mode production', { 
    stdio: 'inherit',
    env: { 
      ...process.env, 
      NODE_ENV: 'production',
      VITE_GA_MEASUREMENT_ID: process.env.VITE_GA_MEASUREMENT_ID || 'G-PLACEHOLDER'
    }
  });

  // Build server
  console.log('🔧 Building production server...');
  execSync('esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist --minify', { 
    stdio: 'inherit' 
  });

  // Analyze bundle size
  console.log('📊 Analyzing bundle size...');
  const distPath = path.join(process.cwd(), 'dist/public');
  if (fs.existsSync(distPath)) {
    const files = fs.readdirSync(distPath, { recursive: true });
    const jsFiles = files.filter(f => typeof f === 'string' && f.endsWith('.js'));
    const cssFiles = files.filter(f => typeof f === 'string' && f.endsWith('.css'));
    
    console.log('\n📈 Bundle Analysis:');
    console.log(`JS Files: ${jsFiles.length}`);
    console.log(`CSS Files: ${cssFiles.length}`);
    
    // Calculate total sizes
    let totalJSSize = 0;
    let totalCSSSize = 0;
    
    jsFiles.forEach(file => {
      const fullPath = path.join(distPath, file);
      if (fs.existsSync(fullPath)) {
        const size = fs.statSync(fullPath).size;
        totalJSSize += size;
        if (size > 50000) { // > 50KB
          console.log(`⚠️  Large JS file: ${file} (${(size/1024).toFixed(1)}KB)`);
        }
      }
    });
    
    cssFiles.forEach(file => {
      const fullPath = path.join(distPath, file);
      if (fs.existsSync(fullPath)) {
        const size = fs.statSync(fullPath).size;
        totalCSSSize += size;
      }
    });
    
    console.log(`\nTotal JS Size: ${(totalJSSize/1024).toFixed(1)}KB`);
    console.log(`Total CSS Size: ${(totalCSSSize/1024).toFixed(1)}KB`);
    console.log(`Combined Size: ${((totalJSSize + totalCSSSize)/1024).toFixed(1)}KB`);
    
    if (totalJSSize > 200000) { // > 200KB
      console.log('\n⚠️  Bundle size is larger than recommended (200KB)');
      console.log('Consider implementing code splitting or tree shaking');
    } else {
      console.log('\n✅ Bundle size is within recommended limits');
    }
  }

  console.log('\n✅ Production build completed successfully!');
  console.log('\n🚀 To serve the production build:');
  console.log('   NODE_ENV=production npm start');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}