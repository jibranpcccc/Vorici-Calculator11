// Monetization strategy implementation for future consideration

export interface AffiliatePartner {
  name: string;
  description: string;
  url: string;
  category: 'gaming' | 'tools' | 'community';
  commission: number;
  minimumPayout: number;
}

export interface PremiumFeature {
  id: string;
  name: string;
  description: string;
  tier: 'basic' | 'premium' | 'pro';
  monthlyPrice: number;
  features: string[];
}

// Potential affiliate partnerships (for future implementation)
export const AFFILIATE_PARTNERS: AffiliatePartner[] = [
  {
    name: 'Path of Building',
    description: 'Official build planning tool',
    url: 'https://pathofbuilding.community',
    category: 'tools',
    commission: 0,
    minimumPayout: 0
  },
  {
    name: 'PoE Ninja',
    description: 'Economy and build analytics',
    url: 'https://poe.ninja',
    category: 'tools',
    commission: 0,
    minimumPayout: 0
  }
];

// Premium feature tiers (conceptual for future)
export const PREMIUM_FEATURES: PremiumFeature[] = [
  {
    id: 'basic',
    name: 'Free Tier',
    description: 'Full calculator access with basic features',
    tier: 'basic',
    monthlyPrice: 0,
    features: [
      'All calculator functions',
      'Basic session tracking',
      'Standard support'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Enhanced features for serious crafters',
    tier: 'premium', 
    monthlyPrice: 4.99,
    features: [
      'Everything in Free',
      'Advanced probability models',
      'Historical session data',
      'Priority support',
      'Custom presets (unlimited)',
      'League-specific calculations'
    ]
  },
  {
    id: 'pro',
    name: 'Professional',
    description: 'For content creators and theorycrafters',
    tier: 'pro',
    monthlyPrice: 9.99,
    features: [
      'Everything in Premium',
      'API access for integrations',
      'Advanced analytics',
      'White-label calculator embedding',
      'Priority feature requests',
      'Direct developer access'
    ]
  }
];

export const trackMonetizationEvent = (eventType: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'monetization_event', {
      event_category: 'revenue',
      event_label: eventType,
      value: value
    });
  }
};

// Donation/support functionality
export const generateSupportLinks = () => {
  return {
    kofi: 'https://ko-fi.com/vorici-calculator',
    paypal: 'https://paypal.me/vorici-calculator',
    patreon: 'https://patreon.com/vorici-calculator',
    github: 'https://github.com/sponsors/vorici-calculator'
  };
};

// Feature usage tracking for conversion optimization
export const trackFeatureUsage = (feature: string, tier: string) => {
  const usage = JSON.parse(localStorage.getItem('feature-usage') || '{}');
  const today = new Date().toDateString();
  
  if (!usage[today]) {
    usage[today] = {};
  }
  
  if (!usage[today][feature]) {
    usage[today][feature] = 0;
  }
  
  usage[today][feature]++;
  localStorage.setItem('feature-usage', JSON.stringify(usage));
  
  // Track premium feature interest
  if (tier !== 'basic') {
    trackMonetizationEvent('premium_feature_interest', 1);
  }
};