// Social media sharing and community engagement utilities

export interface ShareableResult {
  calculator: string;
  cost: number;
  method: string;
  config: string;
}

export const generateShareText = (result: ShareableResult): string => {
  return `🎯 Vorici Calculator Result:\n${result.calculator}: ${result.cost} orbs average\nMethod: ${result.method}\nConfig: ${result.config}\n\nCalculate yours: https://vorici-calculator.com`;
};

export const shareToReddit = (result: ShareableResult) => {
  const title = encodeURIComponent(`[Tool] ${result.calculator} calculation - ${result.cost} orbs average`);
  const text = encodeURIComponent(generateShareText(result));
  const url = `https://reddit.com/r/pathofexile/submit?title=${title}&text=${text}`;
  window.open(url, '_blank');
};

export const shareToTwitter = (result: ShareableResult) => {
  const text = encodeURIComponent(generateShareText(result));
  const url = `https://twitter.com/intent/tweet?text=${text}`;
  window.open(url, '_blank');
};

export const shareToDiscord = (result: ShareableResult) => {
  // Copy formatted text for Discord sharing
  const discordText = `\`\`\`
Vorici Calculator Result:
${result.calculator}: ${result.cost} orbs average
Method: ${result.method}
Config: ${result.config}

Calculate yours: https://vorici-calculator.com
\`\`\``;
  
  navigator.clipboard.writeText(discordText);
  return discordText;
};

// Community engagement metrics
export const trackCommunityEngagement = (platform: string, action: string) => {
  // Analytics tracking for social media engagement
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'social_share', {
      event_category: 'community',
      event_label: `${platform}_${action}`,
    });
  }
};

// Reddit community guidelines compliance
export const redditPostGuidelines = {
  title: 'Keep titles descriptive and include [Tool] tag',
  content: 'Include calculator results and brief explanation',
  frequency: 'Limit posts to major updates or interesting calculations',
  engagement: 'Respond to comments and provide help',
};

// Discord community integration
export const discordChannels = {
  'r/pathofexile': 'General discussion and tool sharing',
  'PoE Discord': 'Real-time help and calculations',
  'Build Planning': 'Specific build optimization discussions',
};