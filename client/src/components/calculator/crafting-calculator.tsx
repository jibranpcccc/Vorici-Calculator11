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
        <div className="bg-dark-slate rounded-lg p-4 border border-light-slate/30">
          <div className="flex items-center justify-between">
            <span className="text-light-slate">Average Cost</span>
            <span className="text-2xl font-heading font-bold text-exalted-gold">
              {result.averageCost}
            </span>
          </div>
          <div className="text-sm text-light-slate">
            {calculator.state.activeTab === 'chromatic' && 'Chromatic Orbs'}
            {calculator.state.activeTab === 'jeweller' && "Jeweller's Orbs"}
            {calculator.state.activeTab === 'fusing' && 'Orbs of Fusing'}
          </div>
        </div>
        
        <div className="bg-dark-slate rounded-lg p-4 border border-light-slate/30">
          <div className="flex items-center justify-between">
            <span className="text-light-slate">Success Chance</span>
            <span className="text-2xl font-heading font-bold text-dexterity-green">
              {result.successChance.toFixed(3)}%
            </span>
          </div>
          <div className="text-sm text-light-slate">Per attempt</div>
        </div>

        <div className="bg-dark-slate rounded-lg p-4 border border-light-slate/30">
          <div className="text-light-slate mb-2">Recommended Method</div>
          <div className="text-exalted-gold font-medium font-heading">{result.recommendedMethod}</div>
          <div className="text-sm text-light-slate">
            {result.recommendedMethod.includes('Bench') 
              ? 'Guaranteed result at fixed cost'
              : 'Statistical average based on probability'
            }
          </div>
        </div>

        {/* Utility Buttons */}
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() => setBreakdownModal({ isOpen: true, type: calculator.state.activeTab })}
            className="btn-poe"
          >
            Cost Breakdown
          </Button>
          <Button
            onClick={handleCopyResults}
            className="btn-poe"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy Results
          </Button>
          <Button
            onClick={calculator.resetTab}
            variant="outline"
            className="border-exalted-gold/50 hover:border-exalted-gold text-off-white hover:text-exalted-gold"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-dark-slate rounded-2xl border border-exalted-gold/30 p-6 md:p-8 glow-gold max-w-4xl mx-auto">
      <Tabs value={calculator.state.activeTab} onValueChange={calculator.setActiveTab as any}>
        <TabsList className="grid w-full grid-cols-3 bg-transparent border-b border-exalted-gold/20 rounded-none h-auto p-0">
          <TabsTrigger 
            value="chromatic" 
            className="calculator-tab"
          >
            Chromatic Orbs
          </TabsTrigger>
          <TabsTrigger 
            value="jeweller" 
            className="calculator-tab"
          >
            Jeweller's Orbs
          </TabsTrigger>
          <TabsTrigger 
            value="fusing" 
            className="calculator-tab"
          >
            Orbs of Fusing
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
