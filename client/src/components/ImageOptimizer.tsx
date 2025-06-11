import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  sizes,
  quality = 75
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate responsive srcset for different screen densities
  const generateSrcSet = (baseSrc: string): string => {
    if (baseSrc.startsWith('data:') || baseSrc.includes('svg')) {
      return baseSrc;
    }

    // For external images or when we can't optimize, return as-is
    if (baseSrc.startsWith('http') || baseSrc.startsWith('//')) {
      return baseSrc;
    }

    // Generate WebP alternatives if possible
    const webpSrc = baseSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    return `${webpSrc} 1x, ${baseSrc} 1x`;
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  // Preload critical images
  useEffect(() => {
    if (priority && typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);

      return () => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      };
    }
  }, [src, priority]);

  if (hasError) {
    return (
      <div 
        className={`bg-poe-surface border border-poe-accent/20 rounded flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      >
        <span className="text-poe-text-secondary text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-poe-surface border border-poe-accent/20 rounded animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          <span className="text-poe-text-secondary text-xs">Loading...</span>
        </div>
      )}
      
      <img
        ref={imgRef}
        src={src}
        srcSet={generateSrcSet(src)}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ${className}`}
        style={{
          maxWidth: '100%',
          height: 'auto',
          ...(width && height && { aspectRatio: `${width}/${height}` })
        }}
      />
    </div>
  );
}

// Component for optimized background images
interface OptimizedBackgroundProps {
  src: string;
  alt: string;
  children: React.ReactNode;
  className?: string;
  overlay?: boolean;
}

export function OptimizedBackground({ 
  src, 
  alt, 
  children, 
  className = '', 
  overlay = false 
}: OptimizedBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = src;
  }, [src]);

  return (
    <div 
      className={`relative ${className}`}
      role="img"
      aria-label={alt}
    >
      {isLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${src})` }}
        />
      )}
      
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Hook for validating images on page
export function useImageValidation() {
  useEffect(() => {
    const validateImages = () => {
      const images = Array.from(document.querySelectorAll('img'));
      const issues: string[] = [];

      images.forEach((img, index) => {
        // Check for missing alt attributes
        if (!img.hasAttribute('alt')) {
          issues.push(`Image ${index + 1}: Missing alt attribute`);
        }

        // Check for empty alt on non-decorative images
        if (img.getAttribute('alt') === '' && !img.hasAttribute('role')) {
          issues.push(`Image ${index + 1}: Empty alt without decorative role`);
        }

        // Check for missing width/height (CLS prevention)
        if (!img.hasAttribute('width') || !img.hasAttribute('height')) {
          if (!img.style.aspectRatio && !img.classList.contains('w-auto')) {
            issues.push(`Image ${index + 1}: Missing dimensions (may cause layout shift)`);
          }
        }

        // Check for lazy loading on below-fold images
        if (!img.hasAttribute('loading') && img.getBoundingClientRect().top > window.innerHeight) {
          issues.push(`Image ${index + 1}: Should use lazy loading`);
        }
      });

      if (issues.length > 0 && import.meta.env.DEV) {
        console.warn('Image optimization issues found:', issues);
      }
    };

    // Run validation after DOM updates
    const timeout = setTimeout(validateImages, 500);
    return () => clearTimeout(timeout);
  }, []);
}