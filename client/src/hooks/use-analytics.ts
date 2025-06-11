import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { trackPageView } from '@/lib/analytics';

export function useAnalytics() {
  const [location] = useLocation();

  useEffect(() => {
    // Track page view when location changes
    trackPageView(location);
  }, [location]);

  // Return analytics utilities for components to use
  return {
    trackPageView,
  };
}