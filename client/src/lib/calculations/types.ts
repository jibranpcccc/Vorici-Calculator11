export type SocketColor = 'red' | 'green' | 'blue' | 'white' | 'disabled';

export type ItemBase = 
  | 'strength' 
  | 'dexterity' 
  | 'intelligence' 
  | 'str-dex' 
  | 'str-int' 
  | 'dex-int';

export interface SocketConfiguration {
  colors: SocketColor[];
  count: number;
}

export interface ItemConfiguration {
  base: ItemBase;
  level: number;
  quality: number;
}

export interface CalculationResult {
  averageCost: number;
  successChance: number;
  recommendedMethod: string;
  costBreakdown: {
    formula: string;
    explanation: string;
    parameters: Record<string, number>;
  };
}

export interface ChromaticCalculationInput {
  item: ItemConfiguration;
  targetSockets: SocketConfiguration;
}

export interface JewellerCalculationInput {
  currentSockets: number;
  targetSockets: number;
  itemLevel: number;
}

export interface FusingCalculationInput {
  targetLinks: number;
  quality: number;
  currentLinks?: number;
}
