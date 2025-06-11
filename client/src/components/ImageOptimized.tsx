import { useState } from 'react';

interface ImageOptimizedProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export default function ImageOptimized({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false
}: ImageOptimizedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // Generate srcset for responsive images
  const generateSrcSet = (baseSrc: string) => {
    const ext = baseSrc.split('.').pop();
    const baseName = baseSrc.replace(`.${ext}`, '');
    
    return [
      `${baseName}-400w.webp 400w`,
      `${baseName}-800w.webp 800w`,
      `${baseName}-1200w.webp 1200w`,
      `${baseSrc} ${width || 1200}w`
    ].join(', ');
  };

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
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-poe-surface animate-pulse rounded"
          style={{ width, height }}
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        srcSet={generateSrcSet(src)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </div>
  );
}