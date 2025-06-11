import { ItemConfiguration, CalculationResult } from './types';

export interface BuildPreset {
  id: string;
  name: string;
  description: string;
  author: string;
  category: 'leveling' | 'endgame' | 'league-start' | 'budget' | 'min-max';
  configurations: {
    chromatic?: ItemConfiguration;
    jeweller?: ItemConfiguration;
    fusing?: ItemConfiguration;
  };
  tags: string[];
  popularity: number;
  createdAt: number;
  updatedAt: number;
}

export interface UserGeneratedContent {
  id: string;
  type: 'preset' | 'guide' | 'tip';
  title: string;
  content: string;
  author: string;
  votes: number;
  verified: boolean;
  createdAt: number;
}

// Popular build presets for common scenarios
export const DEFAULT_PRESETS: BuildPreset[] = [
  {
    id: 'league-start-6l',
    name: 'League Start 6-Link',
    description: 'Optimal strategy for getting your first 6-link in a new league',
    author: 'Vorici Calculator',
    category: 'league-start',
    configurations: {
      fusing: {
        base: 'strength',
        level: 68,
        quality: 20,
        currentSockets: 6,
        targetSockets: 6,
        targetLinks: 6,
        sockets: { colors: ['red', 'red', 'red', 'red', 'green', 'blue'], activeCount: 6 }
      }
    },
    tags: ['6-link', 'league-start', 'budget'],
    popularity: 95,
    createdAt: Date.now() - 86400000 * 30,
    updatedAt: Date.now() - 86400000 * 7
  },
  {
    id: 'tri-color-chest',
    name: 'Tri-Color Chest Setup',
    description: 'Perfect for builds requiring all three socket colors',
    author: 'Community',
    category: 'endgame',
    configurations: {
      chromatic: {
        base: 'str-dex',
        level: 86,
        quality: 0,
        currentSockets: 6,
        targetSockets: 6,
        targetLinks: 6,
        sockets: { colors: ['red', 'red', 'green', 'green', 'blue', 'blue'], activeCount: 6 }
      }
    },
    tags: ['tri-color', 'versatile', 'hybrid'],
    popularity: 78,
    createdAt: Date.now() - 86400000 * 45,
    updatedAt: Date.now() - 86400000 * 12
  },
  {
    id: 'pure-str-setup',
    name: 'Pure Strength Build',
    description: 'All red sockets for pure strength builds',
    author: 'Community',
    category: 'endgame',
    configurations: {
      chromatic: {
        base: 'strength',
        level: 85,
        quality: 0,
        currentSockets: 6,
        targetSockets: 6,
        targetLinks: 6,
        sockets: { colors: ['red', 'red', 'red', 'red', 'red', 'red'], activeCount: 6 }
      }
    },
    tags: ['strength', 'melee', 'pure-color'],
    popularity: 68,
    createdAt: Date.now() - 86400000 * 20,
    updatedAt: Date.now() - 86400000 * 5
  }
];

const STORAGE_KEY = 'vorici-community-presets';

export const loadCommunityPresets = (): BuildPreset[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const userPresets = JSON.parse(stored);
      return [...DEFAULT_PRESETS, ...userPresets];
    }
  } catch (error) {
    console.warn('Failed to load community presets:', error);
  }
  return DEFAULT_PRESETS;
};

export const saveUserPreset = (preset: Omit<BuildPreset, 'id' | 'createdAt' | 'updatedAt'>): BuildPreset => {
  const newPreset: BuildPreset = {
    ...preset,
    id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const userPresets = stored ? JSON.parse(stored) : [];
    userPresets.push(newPreset);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userPresets));
  } catch (error) {
    console.warn('Failed to save user preset:', error);
  }

  return newPreset;
};

export const deleteUserPreset = (presetId: string): void => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const userPresets = JSON.parse(stored);
      const filtered = userPresets.filter((preset: BuildPreset) => preset.id !== presetId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    }
  } catch (error) {
    console.warn('Failed to delete user preset:', error);
  }
};

export const sharePreset = (preset: BuildPreset): string => {
  const shareData = {
    name: preset.name,
    description: preset.description,
    configurations: preset.configurations,
    tags: preset.tags,
  };
  
  return `🎯 ${preset.name}\n${preset.description}\n\nTags: ${preset.tags.join(', ')}\nShared via Vorici Calculator: https://vorici-calculator.com`;
};

export const importPresetFromCode = (shareCode: string): BuildPreset | null => {
  try {
    // This would be implemented with a proper encoding/decoding system
    // For now, return null to indicate import not supported
    return null;
  } catch (error) {
    console.warn('Failed to import preset:', error);
    return null;
  }
};