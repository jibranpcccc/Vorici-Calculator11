import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCalculator } from '@/hooks/use-calculator';
import { ChromaticTab } from './chromatic-tab';
import { JewellerTab } from './jeweller-tab';
import { FusingTab } from './fusing-tab';
import { SessionTracker } from './session-tracker';
import { CostBreakdownModal } from './cost-breakdown-modal';
import { Copy, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function CraftingCalculator() {
  const calculator = useCalculator();
  const { toast } = useToast();
  const [breakdownModal, setBreakdownModal] = useState<{
    isOpen: boolean;
    type: 'chromatic' | 'jeweller' | 'fusing';
  }>({ isOpen: false, type: 'chromatic' });

  const getCurrentResult = () => {
    switch (calculator.state.activeTab) {
      case 'chromatic':
        return calculator.results.chromatic;
      case 'jeweller':
        return calculator.results.jeweller;
      case 'fusing':
        return calculator.results.fusing;
    }
  };

  const getCurrentCost = () => getCurrentResult().averageCost;

  const handleCopyResults = async () => {
    const result = getCurrentResult();
    const text = `Average Cost: ${result.averageCost} orbs
Success Chance: ${result.successChance.toFixed(3)}% per attempt
Recommended Method: ${result.recommendedMethod}`;

    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Results copied!",
        description: "Calculation results copied to clipboard",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Unable to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleAddToSession = () => {
    calculator.addToSession(getCurrentCost());
    toast({
      title: "Added to session",
      description: `${getCurrentCost()} orbs added to session tracker`,
    });
  };

  const renderResults = () => {
    const result = getCurrentResult();
    
    return (
      <div className="space-y-4">
        <div className="card-poe">
          <div className="flex items-center justify-between mb-3">
            <span className="text-light-slate font-medium">Average Cost</span>
            <div className="text-right">
              <span className="text-3xl font-heading font-bold text-exalted-gold block leading-none">
                {result.averageCost}
              </span>
              <span className="text-sm text-light-slate mt-1 block">
                {calculator.state.activeTab === 'chromatic' && 'Chromatic Orbs'}
                {calculator.state.activeTab === 'jeweller' && "Jeweller's Orbs"}
                {calculator.state.activeTab === 'fusing' && 'Orbs of Fusing'}
              </span>
            </div>
          </div>
          <div className="w-full bg-dark-slate rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-exalted-gold to-vibrant-gold h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(result.averageCost / 100 * 10, 100)}%` }}
            ></div>
          </div>
        </div>
        
        <div className="card-poe">
          <div className="flex items-center justify-between mb-3">
            <span className="text-light-slate font-medium">Success Chance</span>
            <div className="text-right">
              <span className="text-3xl font-heading font-bold text-dexterity-green block leading-none">
                {result.successChance.toFixed(3)}%
              </span>
              <span className="text-sm text-light-slate mt-1 block">Per attempt</span>
            </div>
          </div>
          <div className="w-full bg-dark-slate rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-dexterity-green to-green-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${result.successChance}%` }}
            ></div>
          </div>
        </div>

        <div className="card-poe">
          <div className="text-light-slate mb-3 font-medium">Recommended Method</div>
          <div className="text-exalted-gold font-bold font-heading text-lg mb-2">{result.recommendedMethod}</div>
          <div className="text-sm text-light-slate bg-charcoal-stone rounded-lg p-3 border-l-4 border-exalted-gold">
            {result.recommendedMethod.includes('Bench') 
              ? '✓ Guaranteed result at fixed cost'
              : '📊 Statistical average based on probability'
            }
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
          <button
            onClick={() => setBreakdownModal({ isOpen: true, type: calculator.state.activeTab })}
            className="btn-poe flex items-center justify-center"
          >
            📊 Cost Breakdown
          </button>
          <button
            onClick={handleCopyResults}
            className="btn-poe flex items-center justify-center"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy Results
          </button>
          <button
            onClick={calculator.resetTab}
            className="btn-secondary flex items-center justify-center"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset Calculator
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="card-poe max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-heading font-bold text-exalted-gold mb-2">Path of Exile Crafting Calculator</h2>
        <p className="text-light-slate">Calculate the optimal costs for socket coloring, jeweller's orbs, and fusing orbs</p>
      </div>
      
      <Tabs value={calculator.state.activeTab} onValueChange={calculator.setActiveTab as any}>
        <TabsList className="grid w-full grid-cols-3 bg-transparent rounded-none h-auto p-0 gap-2 mb-8">
          <TabsTrigger 
            value="chromatic" 
            className="calculator-tab"
          >
            🎨 Chromatic Orbs
          </TabsTrigger>
          <TabsTrigger 
            value="jeweller" 
            className="calculator-tab"
          >
            💎 Jeweller's Orbs
          </TabsTrigger>
          <TabsTrigger 
            value="fusing" 
            className="calculator-tab"
          >
            🔗 Orbs of Fusing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chromatic" className="mt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ChromaticTab
                itemBase={calculator.state.chromaticItem.base}
                itemLevel={calculator.state.chromaticItem.level}
                socketColors={calculator.state.chromaticSockets.colors}
                onItemBaseChange={(base) => calculator.updateChromaticItem({ base })}
                onItemLevelChange={(level) => calculator.updateChromaticItem({ level })}
                onSocketClick={calculator.cycleSocketColor}
              />
            </div>
            <div>{renderResults()}</div>
          </div>
        </TabsContent>

        <TabsContent value="jeweller" className="mt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <JewellerTab
                currentSockets={calculator.state.jewellerCurrentSockets}
                targetSockets={calculator.state.jewellerTargetSockets}
                itemLevel={calculator.state.jewellerItemLevel}
                onCurrentSocketsChange={(sockets) => calculator.updateJewellerSockets('current', sockets)}
                onTargetSocketsChange={(sockets) => calculator.updateJewellerSockets('target', sockets)}
                onItemLevelChange={(level) => calculator.updateJewellerSockets('itemLevel', level)}
              />
            </div>
            <div>{renderResults()}</div>
          </div>
        </TabsContent>

        <TabsContent value="fusing" className="mt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <FusingTab
                quality={calculator.state.fusingQuality}
                targetLinks={calculator.state.fusingTargetLinks}
                currentLinks={calculator.state.fusingCurrentLinks}
                onQualityChange={(quality) => calculator.updateFusing('quality', quality)}
                onTargetLinksChange={(links) => calculator.updateFusing('targetLinks', links)}
                onCurrentLinksChange={(links) => calculator.updateFusing('currentLinks', links)}
              />
            </div>
            <div>{renderResults()}</div>
          </div>
        </TabsContent>
      </Tabs>

      <SessionTracker
        sessionTotal={calculator.state.sessionTotal}
        currentCost={getCurrentCost()}
        onAddToSession={handleAddToSession}
        onResetSession={calculator.resetSession}
      />

      <CostBreakdownModal
        isOpen={breakdownModal.isOpen}
        onClose={() => setBreakdownModal({ ...breakdownModal, isOpen: false })}
        result={calculator.results[breakdownModal.type]}
        title={`${breakdownModal.type.charAt(0).toUpperCase() + breakdownModal.type.slice(1)} Calculator`}
      />
    </div>
  );
}
