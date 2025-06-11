import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Copy, MessageCircle, Share2 } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { shareToReddit, shareToTwitter, shareToDiscord, generateShareText, trackCommunityEngagement } from '@/lib/social-media';
import { CalculationResult } from '@/lib/types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: CalculationResult;
  calculatorType: string;
  config: string;
}

export function ShareModal({ isOpen, onClose, result, calculatorType, config }: ShareModalProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const shareData = {
    calculator: calculatorType,
    cost: result.averageCost,
    method: result.recommendedMethod,
    config,
  };

  const handleCopyText = async () => {
    const text = generateShareText(shareData);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      trackCommunityEngagement('clipboard', 'copy');
      toast({
        title: "Copied!",
        description: "Share text copied to clipboard",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Unable to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleDiscordShare = async () => {
    try {
      const discordText = shareToDiscord(shareData);
      trackCommunityEngagement('discord', 'share');
      toast({
        title: "Discord format copied!",
        description: "Formatted text copied for Discord sharing",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Unable to copy Discord format",
        variant: "destructive",
      });
    }
  };

  const handleRedditShare = () => {
    shareToReddit(shareData);
    trackCommunityEngagement('reddit', 'share');
    onClose();
  };

  const handleTwitterShare = () => {
    shareToTwitter(shareData);
    trackCommunityEngagement('twitter', 'share');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-charcoal-stone border-exalted-gold">
        <DialogHeader>
          <DialogTitle className="text-exalted-gold font-heading flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            Share Your Results
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Preview */}
          <div className="bg-dark-slate rounded-lg p-4 border border-poe-border">
            <h4 className="text-sm font-medium text-light-slate mb-2">Preview:</h4>
            <pre className="text-xs text-light-slate whitespace-pre-wrap">
              {generateShareText(shareData)}
            </pre>
          </div>

          {/* Share Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={handleCopyText}
              variant="outline"
              className="border-poe-border text-light-slate hover:bg-dark-slate"
            >
              <Copy className="w-4 h-4 mr-2" />
              {copied ? 'Copied!' : 'Copy Text'}
            </Button>

            <Button
              onClick={handleDiscordShare}
              variant="outline" 
              className="border-[#5865F2] text-[#5865F2] hover:bg-[#5865F2] hover:text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Discord
            </Button>

            <Button
              onClick={handleRedditShare}
              variant="outline"
              className="border-[#FF4500] text-[#FF4500] hover:bg-[#FF4500] hover:text-white"
            >
              📱 Reddit
            </Button>

            <Button
              onClick={handleTwitterShare}
              variant="outline"
              className="border-[#1DA1F2] text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white"
            >
              🐦 Twitter
            </Button>
          </div>

          {/* Tips */}
          <div className="text-xs text-light-slate bg-dark-slate rounded-lg p-3">
            <h5 className="font-medium mb-1">Sharing Tips:</h5>
            <ul className="space-y-1">
              <li>• Reddit: Include [Tool] in title for r/pathofexile</li>
              <li>• Discord: Use in build-planning channels</li>
              <li>• Twitter: Tag @pathofexile for visibility</li>
            </ul>
          </div>

          <div className="flex justify-end">
            <Button
              variant="outline"
              onClick={onClose}
              className="border-poe-border text-light-slate hover:bg-dark-slate"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}