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
    <div className="space-y-6">
      <div className="card-poe">
        <h3 className="text-2xl font-heading font-bold text-exalted-gold mb-6 flex items-center">
          🎨 Item Configuration
        </h3>
        
        {/* Item Base */}
        <div className="mb-6">
          <Label className="block text-sm font-medium mb-3 text-off-white">Item Base Type</Label>
          <Select value={itemBase} onValueChange={onItemBaseChange}>
            <SelectTrigger className="select-poe">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-dark-slate border-exalted-gold/30">
              {itemBaseOptions.map((option) => (
                <SelectItem key={option.value} value={option.value} className="text-off-white hover:bg-exalted-gold/20">
                  {option.icon} {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm text-light-slate mt-2">Different item bases have different socket color probabilities</p>
        </div>

        {/* Item Level */}
        <div className="mb-6">
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
          <p className="text-sm text-light-slate mt-2">Higher item levels can affect socket generation</p>
        </div>

        {/* Socket Configuration */}
        <div>
          <Label className="block text-sm font-medium mb-3 text-off-white">Desired Socket Colors</Label>
          <div className="bg-charcoal-stone rounded-lg p-4 border border-exalted-gold/20">
            <SocketSelector
              colors={socketColors as any}
              onSocketClick={onSocketClick}
              className="mb-4"
            />
            <div className="text-sm text-light-slate bg-dark-slate rounded-md p-3 border-l-4 border-dexterity-green">
              <strong>💡 Tip:</strong> Click sockets to cycle through colors: Red → Green → Blue → White → Disabled
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
