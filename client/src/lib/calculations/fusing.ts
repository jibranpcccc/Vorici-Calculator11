import { FusingCalculationInput, CalculationResult } from './types';

// Base probability for 6-link without quality (approximately 1 in 1200)
const BASE_6LINK_PROBABILITY = 1 / 1200;
const BASE_5LINK_PROBABILITY = 1 / 150;
const BASE_4LINK_PROBABILITY = 1 / 30;

// Quality bonus multiplier (20% quality gives roughly 20% better odds)
function getQualityMultiplier(quality: number): number {
  return 1 + (quality * 0.01);
}

function getLinkProbability(targetLinks: number, quality: number): number {
  const qualityMultiplier = getQualityMultiplier(quality);
  
  switch (targetLinks) {
    case 6:
      return BASE_6LINK_PROBABILITY * qualityMultiplier;
    case 5:
      return BASE_5LINK_PROBABILITY * qualityMultiplier;
    case 4:
      return BASE_4LINK_PROBABILITY * qualityMultiplier;
    case 3:
      return 1 / 10; // Much easier for 3-link
    case 2:
      return 1 / 3; // Very easy for 2-link
    default:
      return 1; // 1-link is guaranteed
  }
}

export function calculateFusingCost(input: FusingCalculationInput): CalculationResult {
  const { targetLinks, quality, currentLinks = 0 } = input;
  
  if (targetLinks <= currentLinks) {
    return {
      averageCost: 0,
      successChance: 100,
      recommendedMethod: 'Already achieved',
      costBreakdown: {
        formula: 'N/A',
        explanation: 'Current links already meet or exceed target',
        parameters: {},
      },
    };
  }
  
  const probability = getLinkProbability(targetLinks, quality);
  const averageCost = Math.ceil(1 / probability);
  
  // Vorici bench costs
  const VORICI_BENCH_COSTS = {
    6: 1500,
    5: 150,
    4: 30,
  };
  
  let recommendedMethod = 'Spam Orbs of Fusing';
  let finalCost = averageCost;
  
  // Check if Vorici bench is more cost-effective
  const benchCost = VORICI_BENCH_COSTS[targetLinks as keyof typeof VORICI_BENCH_COSTS];
  if (benchCost && benchCost < averageCost) {
    recommendedMethod = `Vorici Bench: ${targetLinks}-Link (${benchCost} Fusings guaranteed)`;
    finalCost = benchCost;
  } else if (benchCost) {
    recommendedMethod = `Spam Fusings (avg: ${averageCost} vs bench: ${benchCost})`;
  }
  
  return {
    averageCost: finalCost,
    successChance: probability * 100,
    recommendedMethod,
    costBreakdown: {
      formula: 'P(target_links) = base_probability * (1 + quality_bonus)',
      explanation: `${targetLinks}-link probability with ${quality}% quality. Quality improves odds by ${((getQualityMultiplier(quality) - 1) * 100).toFixed(1)}%`,
      parameters: {
        targetLinks,
        quality,
        baseProbability: targetLinks === 6 ? BASE_6LINK_PROBABILITY : 
                        targetLinks === 5 ? BASE_5LINK_PROBABILITY : BASE_4LINK_PROBABILITY,
        qualityMultiplier: getQualityMultiplier(quality),
        finalProbability: probability,
        expectedAttempts: Math.ceil(1 / probability),
        benchCost: benchCost || 0,
      },
    },
  };
}
