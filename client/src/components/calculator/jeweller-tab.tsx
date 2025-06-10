import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Minus, Plus } from 'lucide-react';

interface JewellerTabProps {
  currentSockets: number;
  targetSockets: number;
  itemLevel: number;
  onCurrentSocketsChange: (sockets: number) => void;
  onTargetSocketsChange: (sockets: number) => void;
  onItemLevelChange: (level: number) => void;
}

export function JewellerTab({
  currentSockets,
  targetSockets,
  itemLevel,
  onCurrentSocketsChange,
  onTargetSocketsChange,
  onItemLevelChange,
}: JewellerTabProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-4">
          Socket Configuration
        </h3>
        
        <div>
          <Label className="block text-sm font-medium mb-2">Current Sockets</Label>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="bg-poe-dark border-poe-gold/30 hover:bg-poe-gold/10"
              onClick={() => onCurrentSocketsChange(Math.max(0, currentSockets - 1))}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="text-2xl font-gaming font-bold text-poe-gold w-8 text-center">
              {currentSockets}
            </span>
            <Button
              variant="outline"
              size="sm"
              className="bg-poe-dark border-poe-gold/30 hover:bg-poe-gold/10"
              onClick={() => onCurrentSocketsChange(Math.min(6, currentSockets + 1))}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div>
          <Label className="block text-sm font-medium mb-2">Target Sockets</Label>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="bg-poe-dark border-poe-gold/30 hover:bg-poe-gold/10"
              onClick={() => onTargetSocketsChange(Math.max(1, targetSockets - 1))}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="text-2xl font-gaming font-bold text-poe-gold w-8 text-center">
              {targetSockets}
            </span>
            <Button
              variant="outline"
              size="sm"
              className="bg-poe-dark border-poe-gold/30 hover:bg-poe-gold/10"
              onClick={() => onTargetSocketsChange(Math.min(6, targetSockets + 1))}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div>
          <Label className="block text-sm font-medium mb-2">Item Level</Label>
          <Input
            type="number"
            value={itemLevel}
            onChange={(e) => onItemLevelChange(parseInt(e.target.value) || 1)}
            min={1}
            max={100}
            className="w-full bg-poe-dark border-poe-gold/30 text-poe-text"
          />
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-4">
          Socket Results
        </h3>
        {/* Results content will be injected here */}
      </div>
    </div>
  );
}
