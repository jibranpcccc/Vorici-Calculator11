import { ItemConfiguration, CalculationResult, ItemBase, SocketColor } from './types';

// Base weights for socket colors based on item attribute requirements
const BASE_WEIGHTS: Record<ItemBase, { red: number; green: number; blue: number }> = {
  strength: { red: 100, green: 20, blue: 20 },
  dexterity: { red: 20, green: 100, blue: 20 },
  intelligence: { red: 20, green: 20, blue: 100 },
  'str-dex': { red: 60, green: 60, blue: 20 },
  'str-int': { red: 60, green: 20, blue: 60 },
  'dex-int': { red: 20, green: 60, blue: 60 },
};

export function calculateChromaticCost(config: ItemConfiguration): CalculationResult {
  const weights = BASE_WEIGHTS[config.base];
  const totalWeight = weights.red + weights.green + weights.blue;
  
  // Count desired colors
  const colorCounts = config.sockets.colors.slice(0, config.sockets.activeCount).reduce(
    (acc, color) => {
      if (color !== 'disabled') {
        acc[color] = (acc[color] || 0) + 1;
      }
      return acc;
    },
    {} as Record<string, number>
  );

  // Calculate probability for this exact combination
  let probability = 1;
  let remainingWeight = totalWeight;
  
  // Simplified probability calculation (actual PoE uses more complex multinomial distribution)
  for (const [color, count] of Object.entries(colorCounts)) {
    if (count > 0) {
      const colorWeight = color === 'red' ? weights.red : 
                         color === 'green' ? weights.green : 
                         color === 'blue' ? weights.blue : 20; // white
      probability *= Math.pow(colorWeight / remainingWeight, count);
    }
  }

  const averageCost = Math.round(1 / probability);
  const successChance = (probability * 100).toFixed(2);

  // Determine recommended method
  const recommendedMethod = averageCost > 100 ? 
    `Vorici Bench: ${Object.entries(colorCounts).map(([color, count]) => `${count} ${color.charAt(0).toUpperCase()}`).join(', ')}` :
    'Spam Chromatic Orbs';

  return {
    averageCost,
    successChance: parseFloat(successChance),
    recommendedMethod,
    costBreakdown: {
      formula: 'P(combination) = ∏(weight_i / total_weight)^count_i',
      variables: {
        totalWeight,
        redWeight: weights.red,
        greenWeight: weights.green,
        blueWeight: weights.blue,
        probability: parseFloat((probability * 100).toFixed(4)),
      },
      explanation: `Based on ${config.base} item base with color weights: Red(${weights.red}), Green(${weights.green}), Blue(${weights.blue})`
    }
  };
}

export function calculateJewellerCost(config: ItemConfiguration): CalculationResult {
  const currentSockets = config.currentSockets;
  const targetSockets = config.targetSockets;
  
  // Simplified jeweller's orb probability (actual rates vary by item level)
  const baseChance = 0.167; // roughly 1/6 chance to get desired socket count
  const attempts = Math.round(1 / baseChance);
  const averageCost = attempts * Math.abs(targetSockets - currentSockets);

  return {
    averageCost,
    successChance: (baseChance * 100),
    recommendedMethod: targetSockets === 6 ? 'Use Crafting Bench (350 Jewellers)' : 'Spam Jeweller\'s Orbs',
    costBreakdown: {
      formula: 'Average attempts = 1 / success_rate',
      variables: {
        baseChance: baseChance,
        attempts,
        socketDifference: Math.abs(targetSockets - currentSockets),
      },
      explanation: `Jeweller's orbs have approximately ${(baseChance * 100).toFixed(1)}% chance per attempt`
    }
  };
}

export function calculateFusingCost(config: ItemConfiguration): CalculationResult {
  const quality = config.quality;
  const targetLinks = config.targetLinks;
  
  // Base 6-link chance is approximately 1/1200 at 0% quality
  // Quality bonus: roughly 1% increased chance per 1% quality
  const baseChance = targetLinks === 6 ? 1/1200 : 
                    targetLinks === 5 ? 1/150 : 1/25;
  
  const qualityBonus = 1 + (quality * 0.01);
  const adjustedChance = baseChance * qualityBonus;
  const averageCost = Math.round(1 / adjustedChance);

  // Bench craft costs
  const benchCost = targetLinks === 6 ? 1500 : targetLinks === 5 ? 150 : 25;
  
  const recommendedMethod = averageCost > benchCost ? 
    `Crafting Bench (${benchCost} Fusings - Guaranteed)` : 
    'Spam Orbs of Fusing';

  return {
    averageCost,
    successChance: (adjustedChance * 100),
    recommendedMethod,
    costBreakdown: {
      formula: 'Adjusted_chance = base_chance × (1 + quality × 0.01)',
      variables: {
        baseChance: parseFloat((baseChance * 100).toFixed(6)),
        qualityBonus: parseFloat(((qualityBonus - 1) * 100).toFixed(2)),
        adjustedChance: parseFloat((adjustedChance * 100).toFixed(4)),
        benchCost,
      },
      explanation: `${quality}% quality provides ${((qualityBonus - 1) * 100).toFixed(1)}% bonus to linking chance`
    }
  };
}
