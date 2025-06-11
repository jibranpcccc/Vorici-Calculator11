// Simple analytics with no external dependencies to avoid loading issues
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId) {
    console.warn('Missing Google Analytics key: VITE_GA_MEASUREMENT_ID');
    return;
  }
  // Simple implementation without external scripts
};

export const trackPageView = (url: string) => {
  // Placeholder for page view tracking
};

export const trackEvent = (action: string, category?: string, label?: string, value?: number) => {
  // Placeholder for event tracking
};

export const trackCalculatorUsage = (calculatorType: string, action: string) => {
  trackEvent('calculator_usage', calculatorType, action);
};

export const trackResultAction = (action: string, calculatorType: string) => {
  trackEvent('result_action', 'calculator_results', `${action}_${calculatorType}`);
};

export const trackSessionAction = (action: string, cost: number) => {
  trackEvent('session_action', 'session_tracker', action, cost);
};