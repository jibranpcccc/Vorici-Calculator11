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
    <div className="mt-8 pt-6 border-t border-poe-gold/20">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-gaming font-semibold text-poe-gold">Session Tracker</h4>
          <p className="text-sm text-poe-text-dim">Track your crafting costs across attempts</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-gaming font-bold text-poe-gold">{sessionTotal}</div>
          <div className="text-sm text-poe-text-dim">Total Orbs Spent</div>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={onAddToSession}
            className="bg-poe-gold text-poe-dark hover:bg-poe-gold/90 font-medium"
          >
            Add to Session
          </Button>
          {sessionTotal > 0 && (
            <Button
              onClick={onResetSession}
              variant="outline"
              className="border-poe-gold/30 hover:border-poe-gold text-poe-text"
            >
              Reset Session
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
