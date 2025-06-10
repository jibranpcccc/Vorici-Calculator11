import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useCalculations } from '@/hooks/useCalculations';
import SocketVisualizer from './SocketVisualizer';
import CostBreakdownModal from './CostBreakdownModal';
import { ItemBase } from '@/lib/types';
import { Copy, RotateCcw, Calculator as CalculatorIcon, Plus, Minus } from 'lucide-react';
import { ChromaticOrbIcon, JewellersOrbIcon, FusingOrbIcon, StrengthIcon, DexterityIcon, IntelligenceIcon } from './icons/ItemBaseIcons';

const itemBaseOptions: { value: ItemBase; label: string; icon: React.ReactNode }[] = [
  { value: 'strength', label: 'Strength (Red) - Armor', icon: <StrengthIcon className="w-5 h-5" /> },
  { value: 'dexterity', label: 'Dexterity (Green) - Evasion', icon: <DexterityIcon className="w-5 h-5" /> },
  { value: 'intelligence', label: 'Intelligence (Blue) - Energy Shield', icon: <IntelligenceIcon className="w-5 h-5" /> },
  { value: 'str-dex', label: 'Hybrid Str/Dex', icon: <span className="flex"><StrengthIcon className="w-4 h-4" /><DexterityIcon className="w-4 h-4 -ml-1" /></span> },
  { value: 'str-int', label: 'Hybrid Str/Int', icon: <span className="flex"><StrengthIcon className="w-4 h-4" /><IntelligenceIcon className="w-4 h-4 -ml-1" /></span> },
  { value: 'dex-int', label: 'Hybrid Dex/Int', icon: <span className="flex"><DexterityIcon className="w-4 h-4" /><IntelligenceIcon className="w-4 h-4 -ml-1" /></span> },
];

export default function Calculator() {
  const { toast } = useToast();
  const {
    activeTab,
    setActiveTab,
    itemConfig,
    updateItemConfig,
    updateSocketColor,
    calculations,
    session,
    addToSession,
    resetCurrentTab,
    copyResults,
    showBreakdown,
    setShowBreakdown,
  } = useCalculations();

  const handleCopyResults = async () => {
    const success = await copyResults();
    toast({
      title: success ? "Results Copied!" : "Copy Failed",
      description: success ? "Results copied to clipboard" : "Unable to copy to clipboard",
      variant: success ? "default" : "destructive",
    });
  };

  const handleAddToSession = () => {
    addToSession();
    toast({
      title: "Added to Session",
      description: `${calculations.averageCost} orbs added to session tracker`,
    });
  };

  const adjustValue = (field: 'currentSockets' | 'targetSockets' | 'level' | 'quality', delta: number) => {
    const current = itemConfig[field];
    const newValue = Math.max(0, Math.min(field === 'level' ? 100 : field === 'quality' ? 30 : 6, current + delta));
    updateItemConfig({ [field]: newValue });
  };

  return (
    <section id="calculator" className="mb-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-gaming font-bold text-poe-gold mb-4">
          The Ultimate Path of Exile<br />Crafting Calculator
        </h1>
        <p className="text-lg text-poe-text-dim max-w-2xl mx-auto">
          Calculate Chromatic Orb costs, socket probabilities, and 6-link odds instantly. 
          Updated for the current league with precise mathematics.
        </p>
      </div>

      <div className="bg-poe-dark-alt rounded-2xl border border-poe-gold/30 p-6 md:p-8 glow-effect max-w-4xl mx-auto">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)}>
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-transparent">
            <TabsTrigger value="chromatic" className="calculator-tab">
              Chromatic Orbs
            </TabsTrigger>
            <TabsTrigger value="jeweller" className="calculator-tab">
              Jeweller's Orbs
            </TabsTrigger>
            <TabsTrigger value="fusing" className="calculator-tab">
              Orbs of Fusing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chromatic">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-4">Item Configuration</h3>
                
                <div>
                  <Label className="block text-sm font-medium mb-2">Item Base</Label>
                  <Select value={itemConfig.base} onValueChange={(value: ItemBase) => updateItemConfig({ base: value })}>
                    <SelectTrigger className="w-full bg-poe-dark border-poe-gold/30 text-poe-text">
                      <SelectValue>
                        <div className="flex items-center gap-2">
                          {itemBaseOptions.find(opt => opt.value === itemConfig.base)?.icon}
                          {itemBaseOptions.find(opt => opt.value === itemConfig.base)?.label}
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="bg-poe-dark border-poe-gold/30">
                      {itemBaseOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <div className="flex items-center gap-2">
                            {option.icon}
                            <span>{option.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="block text-sm font-medium mb-2">Item Level</Label>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" onClick={() => adjustValue('level', -1)} className="bg-[#f5f4f4] hover:bg-[#f5f4f4]/90 text-poe-dark">
                      <Minus className="w-4 h-4" />
                    </Button>
                    <Input
                      type="number"
                      value={itemConfig.level}
                      onChange={(e) => updateItemConfig({ level: parseInt(e.target.value) || 70 })}
                      min="1"
                      max="100"
                      className="text-center bg-poe-dark border-poe-gold/30 text-poe-text"
                    />
                    <Button size="sm" variant="outline" onClick={() => adjustValue('level', 1)} className="bg-[#f5f4f4] hover:bg-[#f5f4f4]/90 text-poe-dark">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="block text-sm font-medium mb-2">Desired Socket Colors</Label>
                  <SocketVisualizer
                    colors={itemConfig.sockets.colors}
                    activeCount={itemConfig.sockets.activeCount}
                    onColorChange={updateSocketColor}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-4">Calculation Results</h3>
                
                <div className="space-y-4">
                  <div className="bg-poe-dark rounded-lg p-4 border border-poe-gold/20">
                    <div className="flex items-center justify-between">
                      <span className="text-poe-text-dim">Average Cost</span>
                      <span className="text-2xl font-gaming font-bold text-poe-gold">
                        {calculations.averageCost.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-sm text-poe-text-dim">Chromatic Orbs</div>
                  </div>
                  
                  <div className="bg-poe-dark rounded-lg p-4 border border-poe-gold/20">
                    <div className="flex items-center justify-between">
                      <span className="text-poe-text-dim">Success Chance</span>
                      <span className="text-2xl font-gaming font-bold text-green-400">
                        {calculations.successChance.toFixed(2)}%
                      </span>
                    </div>
                    <div className="text-sm text-poe-text-dim">Per attempt</div>
                  </div>

                  <div className="bg-poe-dark rounded-lg p-4 border border-poe-gold/20">
                    <div className="text-poe-text-dim mb-2">Recommended Method</div>
                    <div className="text-poe-gold font-medium">{calculations.recommendedMethod}</div>
                    <div className="text-sm text-poe-text-dim">
                      {calculations.averageCost > 100 ? 'More cost-effective than spamming' : 'Spam orbs for best results'}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setShowBreakdown(true)}
                    className="bg-[#f5f4f4] hover:bg-[#f5f4f4]/90 border-poe-gold/30 text-poe-dark"
                  >
                    <CalculatorIcon className="w-4 h-4 mr-2" />
                    Cost Breakdown
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleCopyResults}
                    className="bg-[#f5f4f4] hover:bg-[#f5f4f4]/90 border-poe-orange/30 text-poe-dark"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Results
                  </Button>
                  <Button
                    variant="outline"
                    onClick={resetCurrentTab}
                    className="bg-[#f5f4f4] hover:bg-[#f5f4f4]/90 border-poe-gold/30 text-poe-dark"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="jeweller">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-4">Socket Configuration</h3>
                
                <div>
                  <Label className="block text-sm font-medium mb-2">Current Sockets</Label>
                  <div className="flex items-center gap-4">
                    <Button size="sm" variant="outline" onClick={() => adjustValue('currentSockets', -1)} className="bg-[#f5f4f4] hover:bg-[#f5f4f4]/90 text-poe-dark">
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="text-2xl font-gaming font-bold text-poe-gold w-8 text-center">
                      {itemConfig.currentSockets}
                    </span>
                    <Button size="sm" variant="outline" onClick={() => adjustValue('currentSockets', 1)} className="bg-[#f5f4f4] hover:bg-[#f5f4f4]/90 text-poe-dark">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="block text-sm font-medium mb-2">Target Sockets</Label>
                  <div className="flex items-center gap-4">
                    <Button size="sm" variant="outline" onClick={() => adjustValue('targetSockets', -1)} className="bg-[#f5f4f4] hover:bg-[#f5f4f4]/90 text-poe-dark">
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="text-2xl font-gaming font-bold text-poe-gold w-8 text-center">
                      {itemConfig.targetSockets}
                    </span>
                    <Button size="sm" variant="outline" onClick={() => adjustValue('targetSockets', 1)} className="bg-[#f5f4f4] hover:bg-[#f5f4f4]/90 text-poe-dark">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-4">Socket Results</h3>
                <div className="bg-poe-dark rounded-lg p-4 border border-poe-gold/20">
                  <div className="flex items-center justify-between">
                    <span className="text-poe-text-dim">Average Cost</span>
                    <span className="text-2xl font-gaming font-bold text-poe-gold">
                      {calculations.averageCost.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm text-poe-text-dim">Jeweller's Orbs</div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="fusing">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-4">Link Configuration</h3>
                
                <div>
                  <Label className="block text-sm font-medium mb-2">Item Quality (%)</Label>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" onClick={() => adjustValue('quality', -1)} className="bg-[#f5f4f4] hover:bg-[#f5f4f4]/90 text-poe-dark">
                      <Minus className="w-4 h-4" />
                    </Button>
                    <Input
                      type="number"
                      value={itemConfig.quality}
                      onChange={(e) => updateItemConfig({ quality: parseInt(e.target.value) || 20 })}
                      min="0"
                      max="30"
                      className="text-center bg-poe-dark border-poe-gold/30 text-poe-text"
                    />
                    <Button size="sm" variant="outline" onClick={() => adjustValue('quality', 1)} className="bg-[#f5f4f4] hover:bg-[#f5f4f4]/90 text-poe-dark">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="block text-sm font-medium mb-2">Target Links</Label>
                  <Select 
                    value={itemConfig.targetLinks.toString()} 
                    onValueChange={(value) => updateItemConfig({ targetLinks: parseInt(value) })}
                  >
                    <SelectTrigger className="w-full bg-poe-dark border-poe-gold/30 text-poe-text">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-poe-dark border-poe-gold/30">
                      <SelectItem value="6">6-Link</SelectItem>
                      <SelectItem value="5">5-Link</SelectItem>
                      <SelectItem value="4">4-Link</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-4">Linking Results</h3>
                <div className="space-y-4">
                  <div className="bg-poe-dark rounded-lg p-4 border border-poe-gold/20">
                    <div className="flex items-center justify-between">
                      <span className="text-poe-text-dim">Average Cost</span>
                      <span className="text-2xl font-gaming font-bold text-poe-gold">
                        {calculations.averageCost.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-sm text-poe-text-dim">Orbs of Fusing</div>
                  </div>
                  
                  {calculations.recommendedMethod.includes('Bench') && (
                    <div className="bg-poe-dark rounded-lg p-4 border border-green-500/20">
                      <div className="text-green-400 font-medium mb-2">Bench Craft Recommended</div>
                      <div className="text-sm text-poe-text-dim">
                        Guaranteed vs ~{calculations.averageCost} average cost
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Session Tracker */}
        <div className="mt-8 pt-6 border-t border-poe-gold/20">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-gaming font-semibold text-poe-gold">Session Tracker</h4>
              <p className="text-sm text-poe-text-dim">Track your crafting costs across attempts</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-gaming font-bold text-poe-gold">
                {session.totalSpent.toLocaleString()}
              </div>
              <div className="text-sm text-poe-text-dim">Total Orbs Spent</div>
            </div>
            <Button
              onClick={handleAddToSession}
              className="bg-[#f5f4f4] text-poe-dark hover:bg-[#f5f4f4]/90 font-medium border border-poe-gold/30"
            >
              Add to Session
            </Button>
          </div>
        </div>
      </div>

      <CostBreakdownModal
        isOpen={showBreakdown}
        onClose={() => setShowBreakdown(false)}
        calculations={calculations}
        calculatorType={activeTab === 'chromatic' ? 'Socket Coloring' : 
                        activeTab === 'jeweller' ? 'Socket Count' : 'Socket Linking'}
      />
    </section>
  );
}
