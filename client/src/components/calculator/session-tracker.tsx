import { Button } from '@/components/ui/button';

interface SessionTrackerProps {
  sessionTotal: number;
  currentCost: number;
  onAddToSession: () => void;
  onResetSession: () => void;
}

export function SessionTracker({ 
  sessionTotal, 
  currentCost, 
  onAddToSession, 
  onResetSession 
}: SessionTrackerProps) {
  return (
    <div className="mt-8 pt-6 border-t border-exalted-gold/30">
      <div className="card-poe">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex-1">
            <h4 className="font-heading font-bold text-exalted-gold text-xl mb-2">📊 Session Tracker</h4>
            <p className="text-light-slate">Track your crafting costs across multiple attempts</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-exalted-gold">{sessionTotal}</div>
              <div className="text-sm text-light-slate font-medium">Total Orbs Spent</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-dexterity-green">+{currentCost}</div>
              <div className="text-sm text-light-slate font-medium">Current Cost</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onAddToSession}
              className="btn-poe"
            >
              ➕ Add to Session
            </button>
            {sessionTotal > 0 && (
              <button
                onClick={onResetSession}
                className="btn-destructive"
              >
                🔄 Reset Session
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
