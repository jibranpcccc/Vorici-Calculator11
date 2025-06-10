import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CalculationResult } from '@/lib/types';

interface CostBreakdownModalProps {
  isOpen: boolean;
  onClose: () => void;
  calculations: CalculationResult;
  calculatorType: string;
}

export default function CostBreakdownModal({ 
  isOpen, 
  onClose, 
  calculations, 
  calculatorType 
}: CostBreakdownModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-poe-dark-alt border-poe-gold/30 text-poe-text max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-gaming font-bold text-poe-gold">
            Cost Breakdown & Formula
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 text-sm">
          <div className="bg-poe-dark rounded-lg p-4">
            <h4 className="font-gaming font-semibold text-poe-gold mb-2">
              {calculatorType} Formula
            </h4>
            <code className="text-poe-text-dim font-mono block bg-black/30 p-2 rounded">
              {calculations.costBreakdown.formula}
            </code>
          </div>
          
          <div className="bg-poe-dark rounded-lg p-4">
            <h4 className="font-gaming font-semibold text-poe-gold mb-2">Variables</h4>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(calculations.costBreakdown.variables).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-poe-text-dim">{key}:</span>
                  <span className="text-poe-text font-mono">
                    {typeof value === 'number' ? value.toLocaleString() : value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-poe-dark rounded-lg p-4">
            <h4 className="font-gaming font-semibold text-poe-gold mb-2">Explanation</h4>
            <p className="text-poe-text-dim">{calculations.costBreakdown.explanation}</p>
          </div>
          
          <div className="bg-poe-dark rounded-lg p-4">
            <h4 className="font-gaming font-semibold text-poe-gold mb-2">Your Result</h4>
            <ul className="text-poe-text-dim space-y-1">
              <li>Average Cost: <span className="text-poe-gold font-bold">{calculations.averageCost.toLocaleString()}</span> orbs</li>
              <li>Success Rate: <span className="text-green-400 font-bold">{calculations.successChance.toFixed(4)}%</span> per attempt</li>
              <li>Recommended: <span className="text-poe-orange">{calculations.recommendedMethod}</span></li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
