import { useState, useCallback, useMemo } from 'react';
import { SocketColor, ItemBase, ItemConfiguration, SocketConfiguration, CalculationResult } from '@/lib/calculations/types';
import { calculateChromaticCost } from '@/lib/calculations/chromatic';
import { calculateJewellerCost } from '@/lib/calculations/jeweller';
import { calculateFusingCost } from '@/lib/calculations/fusing';

export type CalculatorTab = 'chromatic' | 'jeweller' | 'fusing';

export interface CalculatorState {
  activeTab: CalculatorTab;
  
  // Chromatic tab state
  chromaticItem: ItemConfiguration;
  chromaticSockets: SocketConfiguration;
  
  // Jeweller tab state
  jewellerCurrentSockets: number;
  jewellerTargetSockets: number;
  jewellerItemLevel: number;
  
  // Fusing tab state
  fusingTargetLinks: number;
  fusingQuality: number;
  fusingCurrentLinks: number;
  
  // Session tracking
  sessionTotal: number;
}

const initialState: CalculatorState = {
  activeTab: 'chromatic',
  
  chromaticItem: {
    base: 'strength',
    level: 70,
    quality: 0,
  },
  chromaticSockets: {
    colors: ['red', 'red', 'green', 'blue', 'disabled', 'disabled'],
    activeCount: 4,
  },
  
  jewellerCurrentSockets: 4,
  jewellerTargetSockets: 6,
  jewellerItemLevel: 70,
  
  fusingTargetLinks: 6,
  fusingQuality: 20,
  fusingCurrentLinks: 0,
  
  sessionTotal: 0,
};

export function useCalculator() {
  const [state, setState] = useState<CalculatorState>(initialState);

  const setActiveTab = useCallback((tab: CalculatorTab) => {
    setState(prev => ({ ...prev, activeTab: tab }));
  }, []);

  const updateChromaticItem = useCallback((updates: Partial<ItemConfiguration>) => {
    setState(prev => ({
      ...prev,
      chromaticItem: { ...prev.chromaticItem, ...updates },
    }));
  }, []);

  const updateChromaticSockets = useCallback((updates: Partial<SocketConfiguration>) => {
    setState(prev => ({
      ...prev,
      chromaticSockets: { ...prev.chromaticSockets, ...updates },
    }));
  }, []);

  const cycleSocketColor = useCallback((index: number) => {
    setState(prev => {
      const colors = [...prev.chromaticSockets.colors];
      const currentColor = colors[index];
      
      const colorCycle: SocketColor[] = ['red', 'green', 'blue', 'white', 'disabled'];
      const currentIndex = colorCycle.indexOf(currentColor);
      const nextIndex = (currentIndex + 1) % colorCycle.length;
      
      colors[index] = colorCycle[nextIndex];
      
      return {
        ...prev,
        chromaticSockets: {
          ...prev.chromaticSockets,
          colors,
        },
      };
    });
  }, []);

  const updateJewellerSockets = useCallback((field: 'current' | 'target' | 'itemLevel', value: number) => {
    setState(prev => ({
      ...prev,
      [`jeweller${field === 'current' ? 'CurrentSockets' : 
          field === 'target' ? 'TargetSockets' : 'ItemLevel'}`]: Math.max(0, value),
    }));
  }, []);

  const updateFusing = useCallback((field: 'targetLinks' | 'quality' | 'currentLinks', value: number) => {
    setState(prev => ({
      ...prev,
      [`fusing${field.charAt(0).toUpperCase() + field.slice(1)}`]: Math.max(0, value),
    }));
  }, []);

  const addToSession = useCallback((cost: number) => {
    setState(prev => ({
      ...prev,
      sessionTotal: prev.sessionTotal + cost,
    }));
  }, []);

  const resetSession = useCallback(() => {
    setState(prev => ({ ...prev, sessionTotal: 0 }));
  }, []);

  const resetTab = useCallback(() => {
    setState(prev => {
      switch (prev.activeTab) {
        case 'chromatic':
          return {
            ...prev,
            chromaticItem: initialState.chromaticItem,
            chromaticSockets: initialState.chromaticSockets,
          };
        case 'jeweller':
          return {
            ...prev,
            jewellerCurrentSockets: initialState.jewellerCurrentSockets,
            jewellerTargetSockets: initialState.jewellerTargetSockets,
            jewellerItemLevel: initialState.jewellerItemLevel,
          };
        case 'fusing':
          return {
            ...prev,
            fusingTargetLinks: initialState.fusingTargetLinks,
            fusingQuality: initialState.fusingQuality,
            fusingCurrentLinks: initialState.fusingCurrentLinks,
          };
        default:
          return prev;
      }
    });
  }, []);

  // Calculate results for each tab
  const results = useMemo(() => {
    const chromaticResult = calculateChromaticCost({
      item: state.chromaticItem,
      targetSockets: state.chromaticSockets,
    });

    const jewellerResult = calculateJewellerCost({
      currentSockets: state.jewellerCurrentSockets,
      targetSockets: state.jewellerTargetSockets,
      itemLevel: state.jewellerItemLevel,
    });

    const fusingResult = calculateFusingCost({
      targetLinks: state.fusingTargetLinks,
      quality: state.fusingQuality,
      currentLinks: state.fusingCurrentLinks,
    });

    return {
      chromatic: chromaticResult,
      jeweller: jewellerResult,
      fusing: fusingResult,
    };
  }, [
    state.chromaticItem,
    state.chromaticSockets,
    state.jewellerCurrentSockets,
    state.jewellerTargetSockets,
    state.jewellerItemLevel,
    state.fusingTargetLinks,
    state.fusingQuality,
    state.fusingCurrentLinks,
  ]);

  return {
    state,
    setActiveTab,
    updateChromaticItem,
    updateChromaticSockets,
    cycleSocketColor,
    updateJewellerSockets,
    updateFusing,
    addToSession,
    resetSession,
    resetTab,
    results,
  };
}
