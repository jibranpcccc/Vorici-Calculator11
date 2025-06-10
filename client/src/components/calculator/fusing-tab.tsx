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
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-4">
          Link Configuration
        </h3>
        
        <div>
          <Label className="block text-sm font-medium mb-2">Item Quality (%)</Label>
          <Input
            type="number"
            value={quality}
            onChange={(e) => onQualityChange(Math.max(0, Math.min(30, parseInt(e.target.value) || 0)))}
            min={0}
            max={30}
            className="w-full bg-poe-dark border-poe-gold/30 text-poe-text"
          />
        </div>

        <div>
          <Label className="block text-sm font-medium mb-2">Current Links</Label>
          <Select value={currentLinks.toString()} onValueChange={(v) => onCurrentLinksChange(parseInt(v))}>
            <SelectTrigger className="w-full bg-poe-dark border-poe-gold/30 text-poe-text">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-poe-dark border-poe-gold/30">
              {[0, 1, 2, 3, 4, 5].map((links) => (
                <SelectItem key={links} value={links.toString()} className="text-poe-text">
                  {links === 0 ? 'Unlinked' : `${links}-Link`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="block text-sm font-medium mb-2">Target Links</Label>
          <Select value={targetLinks.toString()} onValueChange={(v) => onTargetLinksChange(parseInt(v))}>
            <SelectTrigger className="w-full bg-poe-dark border-poe-gold/30 text-poe-text">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-poe-dark border-poe-gold/30">
              {[2, 3, 4, 5, 6].map((links) => (
                <SelectItem key={links} value={links.toString()} className="text-poe-text">
                  {links}-Link
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-4">
          Linking Results
        </h3>
        {/* Results content will be injected here */}
      </div>
    </div>
  );
}
