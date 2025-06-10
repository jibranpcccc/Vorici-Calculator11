import { useState, useMemo } from 'react';
import { ItemConfiguration, CalculationResult, SessionData, CalculatorTab } from '@/lib/types';
import { calculateChromaticCost, calculateJewellerCost, calculateFusingCost } from '@/lib/calculations';

const defaultItemConfig: ItemConfiguration = {
  base: 'strength',
  level: 70,
  quality: 20,
  currentSockets: 4,
  targetSockets: 6,
  targetLinks: 6,
  sockets: {
    colors: ['red', 'red', 'green', 'blue', 'disabled', 'disabled'],
    activeCount: 4,
  },
};

const defaultSession: SessionData = {
  totalSpent: 0,
  attempts: 0,
  history: [],
};

export function useCalculations() {
  const [activeTab, setActiveTab] = useState<CalculatorTab>('chromatic');
  const [itemConfig, setItemConfig] = useState<ItemConfiguration>(defaultItemConfig);
  const [session, setSession] = useState<SessionData>(defaultSession);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const calculations = useMemo(() => {
    switch (activeTab) {
      case 'chromatic':
        return calculateChromaticCost(itemConfig);
      case 'jeweller':
        return calculateJewellerCost(itemConfig);
      case 'fusing':
        return calculateFusingCost(itemConfig);
      default:
        return calculateChromaticCost(itemConfig);
    }
  }, [activeTab, itemConfig]);

  const updateItemConfig = (updates: Partial<ItemConfiguration>) => {
    setItemConfig(prev => ({ ...prev, ...updates }));
  };

  const updateSocketColor = (index: number, color: typeof itemConfig.sockets.colors[0]) => {
    setItemConfig(prev => ({
      ...prev,
      sockets: {
        ...prev.sockets,
        colors: prev.sockets.colors.map((c, i) => i === index ? color : c),
      },
    }));
  };

  const addToSession = () => {
    const cost = calculations.averageCost;
    setSession(prev => ({
      totalSpent: prev.totalSpent + cost,
      attempts: prev.attempts + 1,
      history: [
        ...prev.history,
        {
          timestamp: Date.now(),
          cost,
          method: calculations.recommendedMethod,
        },
      ].slice(-10), // Keep last 10 entries
    }));
  };

  const resetSession = () => {
    setSession(defaultSession);
  };

  const resetCurrentTab = () => {
    setItemConfig(defaultItemConfig);
  };

  const copyResults = async () => {
    const results = `
Average Cost: ${calculations.averageCost} ${activeTab === 'chromatic' ? 'Chromatic Orbs' : 
                                              activeTab === 'jeweller' ? "Jeweller's Orbs" : 
                                              'Orbs of Fusing'}
Success Chance: ${calculations.successChance.toFixed(2)}% per attempt
Recommended Method: ${calculations.recommendedMethod}
    `.trim();
    
    try {
      await navigator.clipboard.writeText(results);
      return true;
    } catch {
      return false;
    }
  };

  return {
    activeTab,
    setActiveTab,
    itemConfig,
    updateItemConfig,
    updateSocketColor,
    calculations,
    session,
    addToSession,
    resetSession,
    resetCurrentTab,
    copyResults,
    showBreakdown,
    setShowBreakdown,
  };
}
