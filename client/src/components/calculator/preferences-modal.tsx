import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useUserPreferences } from '@/hooks/use-user-preferences';
import { CalculatorTab } from '@/lib/types';

interface PreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PreferencesModal({ isOpen, onClose }: PreferencesModalProps) {
  const { preferences, updateDisplaySetting, setFavoriteCalculator } = useUserPreferences();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-charcoal-stone border-exalted-gold">
        <DialogHeader>
          <DialogTitle className="text-exalted-gold font-heading">Calculator Preferences</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Favorite Calculator */}
          <div className="space-y-2">
            <Label className="text-light-slate">Default Calculator</Label>
            <Select
              value={preferences.favoriteCalculator}
              onValueChange={(value: CalculatorTab) => setFavoriteCalculator(value)}
            >
              <SelectTrigger className="bg-dark-slate border-poe-border text-light-slate">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-charcoal-stone border-exalted-gold">
                <SelectItem value="chromatic">Chromatic Orbs</SelectItem>
                <SelectItem value="jeweller">Jeweller's Orbs</SelectItem>
                <SelectItem value="fusing">Orbs of Fusing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Display Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-exalted-gold">Display Settings</h3>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="show-advanced" className="text-light-slate">
                Show Advanced Options
              </Label>
              <Switch
                id="show-advanced"
                checked={preferences.displaySettings.showAdvancedOptions}
                onCheckedChange={(checked) => updateDisplaySetting('showAdvancedOptions', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="auto-save" className="text-light-slate">
                Auto-save Session
              </Label>
              <Switch
                id="auto-save"
                checked={preferences.displaySettings.autoSaveSession}
                onCheckedChange={(checked) => updateDisplaySetting('autoSaveSession', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="show-tooltips" className="text-light-slate">
                Show Tooltips
              </Label>
              <Switch
                id="show-tooltips"
                checked={preferences.displaySettings.showTooltips}
                onCheckedChange={(checked) => updateDisplaySetting('showTooltips', checked)}
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
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