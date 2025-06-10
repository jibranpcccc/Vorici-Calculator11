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
    <div className="space-y-6">
      <div className="card-poe">
        <h3 className="text-2xl font-heading font-bold text-exalted-gold mb-6 flex items-center">
          💎 Socket Configuration
        </h3>
        
        <div className="mb-6">
          <Label className="block text-sm font-medium mb-3 text-off-white">Current Sockets</Label>
          <div className="flex items-center justify-center gap-4 bg-charcoal-stone rounded-lg p-4 border border-exalted-gold/20">
            <button
              className="btn-secondary w-12 h-12 rounded-full flex items-center justify-center"
              onClick={() => onCurrentSocketsChange(Math.max(0, currentSockets - 1))}
            >
              <Minus className="w-4 h-4" />
            </button>
            <div className="text-center">
              <span className="text-4xl font-heading font-bold text-exalted-gold block">
                {currentSockets}
              </span>
              <span className="text-sm text-light-slate">Sockets</span>
            </div>
            <button
              className="btn-secondary w-12 h-12 rounded-full flex items-center justify-center"
              onClick={() => onCurrentSocketsChange(Math.min(6, currentSockets + 1))}
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mb-6">
          <Label className="block text-sm font-medium mb-3 text-off-white">Target Sockets</Label>
          <div className="flex items-center justify-center gap-4 bg-charcoal-stone rounded-lg p-4 border border-exalted-gold/20">
            <button
              className="btn-secondary w-12 h-12 rounded-full flex items-center justify-center"
              onClick={() => onTargetSocketsChange(Math.max(1, targetSockets - 1))}
            >
              <Minus className="w-4 h-4" />
            </button>
            <div className="text-center">
              <span className="text-4xl font-heading font-bold text-dexterity-green block">
                {targetSockets}
              </span>
              <span className="text-sm text-light-slate">Target</span>
            </div>
            <button
              className="btn-secondary w-12 h-12 rounded-full flex items-center justify-center"
              onClick={() => onTargetSocketsChange(Math.min(6, targetSockets + 1))}
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-light-slate mt-2 text-center">Maximum 6 sockets on most items</p>
        </div>

        <div>
          <Label className="block text-sm font-medium mb-3 text-off-white">Item Level</Label>
          <Input
            type="number"
            value={itemLevel}
            onChange={(e) => onItemLevelChange(parseInt(e.target.value) || 1)}
            min={1}
            max={100}
            className="input-poe"
            placeholder="Enter item level (1-100)"
          />
          <p className="text-sm text-light-slate mt-2">Higher item levels allow more sockets</p>
        </div>
      </div>
    </div>
  );
}
