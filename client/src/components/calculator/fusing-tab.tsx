import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FusingTabProps {
  quality: number;
  targetLinks: number;
  currentLinks: number;
  onQualityChange: (quality: number) => void;
  onTargetLinksChange: (links: number) => void;
  onCurrentLinksChange: (links: number) => void;
}

export function FusingTab({
  quality,
  targetLinks,
  currentLinks,
  onQualityChange,
  onTargetLinksChange,
  onCurrentLinksChange,
}: FusingTabProps) {
  return (
    <div className="space-y-6">
      <div className="card-poe">
        <h3 className="text-2xl font-heading font-bold text-exalted-gold mb-6 flex items-center">
          🔗 Link Configuration
        </h3>
        
        <div className="mb-6">
          <Label className="block text-sm font-medium mb-3 text-off-white">Item Quality (%)</Label>
          <Input
            type="number"
            value={quality}
            onChange={(e) => onQualityChange(Math.max(0, Math.min(30, parseInt(e.target.value) || 0)))}
            min={0}
            max={30}
            className="input-poe"
            placeholder="Enter quality (0-30%)"
          />
          <p className="text-sm text-light-slate mt-2">Higher quality increases linking success chance</p>
        </div>

        <div className="mb-6">
          <Label className="block text-sm font-medium mb-3 text-off-white">Current Links</Label>
          <Select value={currentLinks.toString()} onValueChange={(v) => onCurrentLinksChange(parseInt(v))}>
            <SelectTrigger className="select-poe">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-dark-slate border-exalted-gold/30">
              {[0, 1, 2, 3, 4, 5].map((links) => (
                <SelectItem key={links} value={links.toString()} className="text-off-white hover:bg-exalted-gold/20">
                  {links === 0 ? '🔌 Unlinked' : `🔗 ${links}-Link`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="block text-sm font-medium mb-3 text-off-white">Target Links</Label>
          <Select value={targetLinks.toString()} onValueChange={(v) => onTargetLinksChange(parseInt(v))}>
            <SelectTrigger className="select-poe">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-dark-slate border-exalted-gold/30">
              {[2, 3, 4, 5, 6].map((links) => (
                <SelectItem key={links} value={links.toString()} className="text-off-white hover:bg-exalted-gold/20">
                  ⭐ {links}-Link {links === 6 ? '(Rare!)' : ''}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm text-light-slate mt-2">6-Link items are extremely valuable and difficult to create</p>
        </div>
      </div>
    </div>
  );
}
