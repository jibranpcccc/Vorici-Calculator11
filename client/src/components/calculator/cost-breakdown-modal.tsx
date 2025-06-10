import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CalculationResult } from '@/lib/calculations/types';

interface CostBreakdownModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: CalculationResult;
  title: string;
}

export function CostBreakdownModal({ isOpen, onClose, result, title }: CostBreakdownModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-poe-dark-alt border border-poe-gold/30 text-poe-text max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-gaming font-bold text-poe-gold">
            {title} - Cost Breakdown & Formula
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-poe-dark rounded-lg p-4">
            <h4 className="font-gaming font-semibold text-poe-gold mb-2">Formula</h4>
            <code className="text-poe-text-dim font-mono text-sm">
              {result.costBreakdown.formula}
            </code>
          </div>
          
          <div className="bg-poe-dark rounded-lg p-4">
            <h4 className="font-gaming font-semibold text-poe-gold mb-2">Explanation</h4>
            <p className="text-poe-text-dim text-sm">
              {result.costBreakdown.explanation}
            </p>
          </div>
          
          <div className="bg-poe-dark rounded-lg p-4">
            <h4 className="font-gaming font-semibold text-poe-gold mb-2">Parameters</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {Object.entries(result.costBreakdown.parameters).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-poe-text-dim capitalize">
                    {key.replace(/([A-Z])/g, ' $1').toLowerCase()}:
                  </span>
                  <span className="text-poe-text font-mono">
                    {typeof value === 'number' ? value.toFixed(4) : value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-poe-dark rounded-lg p-4">
            <h4 className="font-gaming font-semibold text-poe-gold mb-2">Your Results</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-poe-text-dim">Average Cost:</span>
                <span className="text-poe-gold font-bold">{result.averageCost} orbs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-poe-text-dim">Success Rate:</span>
                <span className="text-green-400 font-bold">{result.successChance.toFixed(3)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-poe-text-dim">Recommended:</span>
                <span className="text-poe-orange font-bold">{result.recommendedMethod}</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
