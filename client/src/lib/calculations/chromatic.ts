import { ItemBase, SocketColor, ChromaticCalculationInput, CalculationResult } from './types';

// Base socket color weights for different item types
const BASE_WEIGHTS: Record<ItemBase, { red: number; green: number; blue: number }> = {
  strength: { red: 100, green: 25, blue: 25 },
  dexterity: { red: 25, green: 100, blue: 25 },
  intelligence: { red: 25, green: 25, blue: 100 },
  'str-dex': { red: 50, green: 50, blue: 25 },
  'str-int': { red: 50, green: 25, blue: 50 },
  'dex-int': { red: 25, green: 50, blue: 50 },
};

// Vorici bench costs for specific color combinations
const VORICI_COSTS: Record<string, number> = {
  '1R': 4,
  '1G': 4,
  '1B': 4,
  '2R': 25,
  '2G': 25,
  '2B': 25,
  '3R': 120,
  '3G': 120,
  '3B': 120,
  '1R1G': 15,
  '1R1B': 15,
  '1G1B': 15,
  '2R1G': 100,
  '2R1B': 100,
  '2G1B': 100,
  '1R2G': 100,
  '1R2B': 100,
  '1G2B': 100,
};

function calculateSocketProbability(
  targetColors: SocketColor[],
  itemBase: ItemBase
): number {
  const weights = BASE_WEIGHTS[itemBase];
  const totalWeight = weights.red + weights.green + weights.blue + 1; // +1 for white
  
  let probability = 1;
  
  for (const color of targetColors) {
    if (color === 'disabled') continue;
    
    let colorWeight: number;
    switch (color) {
      case 'red':
        colorWeight = weights.red;
        break;
      case 'green':
        colorWeight = weights.green;
        break;
      case 'blue':
        colorWeight = weights.blue;
        break;
      case 'white':
        colorWeight = 1;
        break;
      default:
        colorWeight = 1;
    }
    
    probability *= colorWeight / totalWeight;
  }
  
  return probability;
}

function getColorCombinationKey(colors: SocketColor[]): string {
  const activeColors = colors.filter(c => c !== 'disabled');
  const counts = { red: 0, green: 0, blue: 0, white: 0 };
  
  activeColors.forEach(color => {
    if (color in counts) {
      counts[color as keyof typeof counts]++;
    }
  });
  
  const parts: string[] = [];
  if (counts.red > 0) parts.push(`${counts.red}R`);
  if (counts.green > 0) parts.push(`${counts.green}G`);
  if (counts.blue > 0) parts.push(`${counts.blue}B`);
  
  return parts.join('');
}

export function calculateChromaticCost(input: ChromaticCalculationInput): CalculationResult {
  const { item, targetSockets } = input;
  const activeColors = targetSockets.colors.filter(c => c !== 'disabled');
  
  // Calculate probability of getting the desired combination
  const probability = calculateSocketProbability(activeColors, item.base);
  const averageCost = Math.ceil(1 / probability);
  
  // Check if Vorici bench is more efficient
  const colorKey = getColorCombinationKey(activeColors);
  const voriciBenchCost = VORICI_COSTS[colorKey];
  
  let recommendedMethod = 'Spam Chromatic Orbs';
  let finalCost = averageCost;
  
  if (voriciBenchCost && voriciBenchCost < averageCost) {
    recommendedMethod = `Vorici Bench: ${colorKey}`;
    finalCost = voriciBenchCost;
  }
  
  const weights = BASE_WEIGHTS[item.base];
  const totalWeight = weights.red + weights.green + weights.blue + 1;
  
  return {
    averageCost: finalCost,
    successChance: probability * 100,
    recommendedMethod,
    costBreakdown: {
      formula: 'P(color) = (base_weight + attribute_requirement) / total_weight',
      explanation: `Calculation based on ${item.base} item type with color weights: Red=${weights.red}, Green=${weights.green}, Blue=${weights.blue}`,
      parameters: {
        totalWeight,
        redWeight: weights.red,
        greenWeight: weights.green,
        blueWeight: weights.blue,
        probability: probability,
        expectedAttempts: Math.ceil(1 / probability),
      },
    },
  };
}
