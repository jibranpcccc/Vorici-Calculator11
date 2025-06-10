import { JewellerCalculationInput, CalculationResult } from './types';

// Jeweller's Orb socket probabilities by item level
const SOCKET_PROBABILITIES = {
  1: { 1: 1.0, 2: 0.0, 3: 0.0, 4: 0.0, 5: 0.0, 6: 0.0 },
  2: { 1: 0.8, 2: 0.2, 3: 0.0, 4: 0.0, 5: 0.0, 6: 0.0 },
  15: { 1: 0.333, 2: 0.333, 3: 0.333, 4: 0.0, 5: 0.0, 6: 0.0 },
  28: { 1: 0.25, 2: 0.25, 3: 0.25, 4: 0.25, 5: 0.0, 6: 0.0 },
  35: { 1: 0.2, 2: 0.2, 3: 0.2, 4: 0.2, 5: 0.2, 6: 0.0 },
  50: { 1: 0.167, 2: 0.167, 3: 0.167, 4: 0.167, 5: 0.167, 6: 0.167 },
};

function getSocketProbabilities(itemLevel: number) {
  if (itemLevel < 2) return SOCKET_PROBABILITIES[1];
  if (itemLevel < 15) return SOCKET_PROBABILITIES[2];
  if (itemLevel < 28) return SOCKET_PROBABILITIES[15];
  if (itemLevel < 35) return SOCKET_PROBABILITIES[28];
  if (itemLevel < 50) return SOCKET_PROBABILITIES[35];
  return SOCKET_PROBABILITIES[50];
}

function calculateExpectedCost(
  currentSockets: number,
  targetSockets: number,
  itemLevel: number
): number {
  if (currentSockets >= targetSockets) return 0;
  
  const probabilities = getSocketProbabilities(itemLevel);
  const targetProb = probabilities[targetSockets as keyof typeof probabilities] || 0;
  
  if (targetProb === 0) {
    return Infinity; // Impossible to achieve
  }
  
  // Calculate expected number of attempts using geometric distribution
  const expectedAttempts = 1 / targetProb;
  
  // Account for the cost of each attempt and the chance of going backwards
  return Math.ceil(expectedAttempts * 1.5); // 1.5 multiplier for backward movement
}

export function calculateJewellerCost(input: JewellerCalculationInput): CalculationResult {
  const { currentSockets, targetSockets, itemLevel } = input;
  
  if (targetSockets > 6) {
    return {
      averageCost: 0,
      successChance: 0,
      recommendedMethod: 'Impossible: Maximum 6 sockets',
      costBreakdown: {
        formula: 'N/A',
        variables: {},
        explanation: 'Cannot have more than 6 sockets on any item',
      },
    };
  }
  
  if (currentSockets >= targetSockets) {
    return {
      averageCost: 0,
      successChance: 100,
      recommendedMethod: 'Already achieved',
      costBreakdown: {
        formula: 'N/A',
        variables: {},
        explanation: 'Current socket count already meets or exceeds target',
      },
    };
  }
  
  const probabilities = getSocketProbabilities(itemLevel);
  const targetProb = probabilities[targetSockets as keyof typeof probabilities] || 0;
  const averageCost = calculateExpectedCost(currentSockets, targetSockets, itemLevel);
  
  // Check if Vorici bench is available (350 jewellers for 6 sockets)
  let recommendedMethod = 'Spam Jeweller\'s Orbs';
  let finalCost = averageCost;
  
  if (targetSockets === 6 && averageCost > 350) {
    recommendedMethod = 'Vorici Bench: 6 Sockets (350 Jeweller\'s)';
    finalCost = 350;
  }
  
  return {
    averageCost: finalCost,
    successChance: targetProb * 100,
    recommendedMethod,
    costBreakdown: {
      formula: 'Expected_Cost = 1 / P(target_sockets) * adjustment_factor',
      variables: {
        itemLevel,
        targetSockets,
        currentSockets,
        targetProbability: targetProb,
        rawExpectedCost: Math.ceil(1 / targetProb),
        adjustedCost: averageCost,
      },
      explanation: `Based on item level ${itemLevel}, probability of ${targetSockets} sockets is ${(targetProb * 100).toFixed(2)}%`,
    },
  };
}
