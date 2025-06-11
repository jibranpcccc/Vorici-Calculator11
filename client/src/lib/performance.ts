// Performance optimization utilities
export const lazyLoad = (importFunc: () => Promise<any>) => {
  return importFunc;
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap';
  fontLink.as = 'style';
  document.head.appendChild(fontLink);
};

// Image optimization
export const optimizeImage = (src: string, width?: number, height?: number) => {
  const img = new Image();
  img.loading = 'lazy';
  img.decoding = 'async';
  if (width) img.width = width;
  if (height) img.height = height;
  img.src = src;
  return img;
};

// Critical CSS inlining for above-the-fold content
export const inlineCriticalCSS = () => {
  const criticalCSS = `
    .card-poe { background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); }
    .btn-poe { background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%); }
    .text-exalted-gold { color: #d4af37; }
    .bg-poe-dark { background-color: #0a0a0a; }
  `;
  
  const style = document.createElement('style');
  style.innerHTML = criticalCSS;
  document.head.appendChild(style);
};

// Service Worker registration for caching
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered:', registration);
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  }
};