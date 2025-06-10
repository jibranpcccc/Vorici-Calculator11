import { ItemBase } from '@/lib/calculations/types';
import { SocketSelector } from './socket-selector';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

interface ChromaticTabProps {
  itemBase: ItemBase;
  itemLevel: number;
  socketColors: string[];
  onItemBaseChange: (base: ItemBase) => void;
  onItemLevelChange: (level: number) => void;
  onSocketClick: (index: number) => void;
}

const itemBaseOptions: { value: ItemBase; label: string; icon: string }[] = [
  { value: 'strength', label: 'Strength (Red) - Armor', icon: '🔴' },
  { value: 'dexterity', label: 'Dexterity (Green) - Evasion', icon: '🟢' },
  { value: 'intelligence', label: 'Intelligence (Blue) - Energy Shield', icon: '🔵' },
  { value: 'str-dex', label: 'Hybrid Str/Dex', icon: '🟡' },
  { value: 'str-int', label: 'Hybrid Str/Int', icon: '🟣' },
  { value: 'dex-int', label: 'Hybrid Dex/Int', icon: '🟠' },
];

export function ChromaticTab({
  itemBase,
  itemLevel,
  socketColors,
  onItemBaseChange,
  onItemLevelChange,
  onSocketClick,
}: ChromaticTabProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Inputs */}
      <div className="space-y-6">
        <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-4">
          Item Configuration
        </h3>
        
        {/* Item Base */}
        <div>
          <Label className="block text-sm font-medium mb-2">Item Base</Label>
          <Select value={itemBase} onValueChange={onItemBaseChange}>
            <SelectTrigger className="w-full bg-poe-dark border-poe-gold/30 text-poe-text">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-poe-dark border-poe-gold/30">
              {itemBaseOptions.map((option) => (
                <SelectItem key={option.value} value={option.value} className="text-poe-text">
                  {option.icon} {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Item Level */}
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

        {/* Socket Configuration */}
        <div>
          <Label className="block text-sm font-medium mb-2">Desired Socket Colors</Label>
          <SocketSelector
            colors={socketColors as any}
            onSocketClick={onSocketClick}
            className="mb-4"
          />
          <p className="text-sm text-poe-text-dim">
            Click sockets to cycle colors: Red → Green → Blue → White → Disabled
          </p>
        </div>
      </div>

      {/* Results section will be handled by parent component */}
      <div className="space-y-6">
        <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-4">
          Calculation Results
        </h3>
        {/* Results content will be injected here */}
      </div>
    </div>
  );
}
