export type SocketColor = 'red' | 'green' | 'blue' | 'white' | 'disabled';

export type ItemBase = 'strength' | 'dexterity' | 'intelligence' | 'str-dex' | 'str-int' | 'dex-int';

export interface SocketConfiguration {
  colors: SocketColor[];
  activeCount: number;
}

export interface ItemConfiguration {
  base: ItemBase;
  level: number;
  quality: number;
  currentSockets: number;
  targetSockets: number;
  targetLinks: number;
  sockets: SocketConfiguration;
}

export interface CalculationResult {
  averageCost: number;
  successChance: number;
  recommendedMethod: string;
  costBreakdown: {
    formula: string;
    variables: Record<string, number>;
    explanation: string;
  };
}

export interface SessionData {
  totalSpent: number;
  attempts: number;
  history: Array<{
    timestamp: number;
    cost: number;
    method: string;
  }>;
}

export type CalculatorTab = 'chromatic' | 'jeweller' | 'fusing';
