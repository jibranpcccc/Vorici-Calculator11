import { ItemConfiguration, CalculationResult, ItemBase } from './types';

// Enhanced probability models with edge case handling
const ADVANCED_WEIGHTS: Record<ItemBase, { red: number; green: number; blue: number; white: number }> = {
  strength: { red: 100, green: 20, blue: 20, white: 5 },
  dexterity: { red: 20, green: 100, blue: 20, white: 5 },
  intelligence: { red: 20, green: 20, blue: 100, white: 5 },
  'str-dex': { red: 60, green: 60, blue: 20, white: 5 },
  'str-int': { red: 60, green: 20, blue: 60, white: 5 },
  'dex-int': { red: 20, green: 60, blue: 60, white: 5 },
};

// Tainted Orb calculations for league-specific mechanics
export function calculateTaintedChromaticCost(config: ItemConfiguration): CalculationResult {
  const weights = ADVANCED_WEIGHTS[config.base];
  const totalWeight = weights.red + weights.green + weights.blue + weights.white;
  
  // Tainted orbs have different mechanics - they reroll ALL sockets
  const colorCounts = config.sockets.colors.slice(0, config.sockets.activeCount).reduce(
    (acc, color) => {
      if (color !== 'disabled') {
        acc[color] = (acc[color] || 0) + 1;
      }
      return acc;
    },
    {} as Record<string, number>
  );

  // Tainted chromatic has 50% chance to succeed, but corrupts the item
  const baseProbability = 0.5;
  let probability = baseProbability;
  
  // Calculate multinomial probability for exact combination
  for (const [color, count] of Object.entries(colorCounts)) {
    if (count > 0) {
      const colorWeight = color === 'red' ? weights.red : 
                         color === 'green' ? weights.green : 
                         color === 'blue' ? weights.blue : weights.white;
      probability *= Math.pow(colorWeight / totalWeight, count);
    }
  }

  const averageCost = Math.round(1 / probability);
  
  return {
    averageCost,
    successChance: probability * 100,
    recommendedMethod: `Tainted Chromatic (${averageCost} attempts avg) - CORRUPTS ITEM`,
    costBreakdown: {
      formula: 'P(success) = 0.5 × P(color_combination)',
      variables: {
        baseProbability: 50,
        colorProbability: parseFloat((probability / baseProbability * 100).toFixed(4)),
        totalWeight,
        corruption: 1,
      },
      explanation: `Tainted Chromatic has 50% base success rate but corrupts the item. Color probability: ${((probability / baseProbability) * 100).toFixed(2)}%`
    }
  };
}

// Enhanced jeweller calculations with item level considerations
export function calculateEnhancedJewellerCost(config: ItemConfiguration): CalculationResult {
  const currentSockets = config.currentSockets;
  const targetSockets = config.targetSockets;
  const itemLevel = config.level;
  
  // Item level affects maximum sockets and success rates
  const maxSockets = itemLevel >= 50 ? 6 : itemLevel >= 35 ? 5 : itemLevel >= 25 ? 4 : 3;
  
  if (targetSockets > maxSockets) {
    return {
      averageCost: 0,
      successChance: 0,
      recommendedMethod: `Impossible: Item level ${itemLevel} cannot have ${targetSockets} sockets (max: ${maxSockets})`,
      costBreakdown: {
        formula: 'Item level too low',
        variables: { itemLevel, maxSockets, targetSockets },
        explanation: `Items must be level 50+ for 6 sockets, 35+ for 5 sockets, 25+ for 4 sockets`
      }
    };
  }
  
  // Enhanced probability calculation based on actual game mechanics
  const socketProbabilities = {
    1: 0.0355,
    2: 0.2627,
    3: 0.35,
    4: 0.2373,
    5: 0.0956,
    6: 0.0189
  };
  
  const targetProbability = socketProbabilities[targetSockets as keyof typeof socketProbabilities] || 0.1;
  const averageCost = Math.round(1 / targetProbability);
  
  // Bench craft comparison
  const benchCosts = { 6: 350, 5: 70, 4: 20, 3: 7, 2: 3, 1: 1 };
  const benchCost = benchCosts[targetSockets as keyof typeof benchCosts] || 999;
  
  const recommendedMethod = averageCost > benchCost ? 
    `Crafting Bench (${benchCost} Jeweller's - Guaranteed)` : 
    `Spam Jeweller's Orbs (${averageCost} attempts avg)`;

  return {
    averageCost: Math.min(averageCost, benchCost),
    successChance: targetProbability * 100,
    recommendedMethod,
    costBreakdown: {
      formula: 'Average = 1 / probability',
      variables: {
        targetProbability: parseFloat((targetProbability * 100).toFixed(4)),
        averageCost,
        benchCost,
        itemLevel,
        maxSockets,
      },
      explanation: `Item level ${itemLevel} supports up to ${maxSockets} sockets. Target probability: ${(targetProbability * 100).toFixed(2)}%`
    }
  };
}

// Harvest crafting calculations
export function calculateHarvestSocketCost(config: ItemConfiguration): CalculationResult {
  // Harvest "Reforge an item, keeping all sockets" mechanics
  const weights = ADVANCED_WEIGHTS[config.base];
  
  // Harvest crafts guarantee specific outcomes
  const harvestMethods = [
    'Reforge a rare item, keeping all sockets',
    'Reforge item with guaranteed red socket',
    'Reforge item with guaranteed green socket', 
    'Reforge item with guaranteed blue socket'
  ];
  
  const recommendedMethod = 'Harvest Craft: Guarantee specific socket colors';
  
  return {
    averageCost: 1, // Harvest crafts are deterministic
    successChance: 100,
    recommendedMethod,
    costBreakdown: {
      formula: 'Harvest crafts = guaranteed outcome',
      variables: {
        deterministic: 1,
        harvestAvailable: 1,
      },
      explanation: 'Harvest crafting provides deterministic socket outcomes when available'
    }
  };
}