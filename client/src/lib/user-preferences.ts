import { ItemConfiguration, CalculatorTab } from './types';

export interface UserPreferences {
  favoriteCalculator: CalculatorTab;
  defaultItemConfigs: {
    chromatic: Partial<ItemConfiguration>;
    jeweller: Partial<ItemConfiguration>;
    fusing: Partial<ItemConfiguration>;
  };
  displaySettings: {
    showAdvancedOptions: boolean;
    autoSaveSession: boolean;
    showTooltips: boolean;
  };
  lastUsed: {
    timestamp: number;
    calculator: CalculatorTab;
  };
}

const DEFAULT_PREFERENCES: UserPreferences = {
  favoriteCalculator: 'chromatic',
  defaultItemConfigs: {
    chromatic: {
      base: 'strength',
      level: 60,
    },
    jeweller: {
      currentSockets: 4,
      targetSockets: 6,
      level: 60,
    },
    fusing: {
      quality: 20,
      targetLinks: 6,
    },
  },
  displaySettings: {
    showAdvancedOptions: false,
    autoSaveSession: true,
    showTooltips: true,
  },
  lastUsed: {
    timestamp: Date.now(),
    calculator: 'chromatic',
  },
};

const STORAGE_KEY = 'vorici-calculator-preferences';

export const loadUserPreferences = (): UserPreferences => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { ...DEFAULT_PREFERENCES, ...parsed };
    }
  } catch (error) {
    console.warn('Failed to load user preferences:', error);
  }
  return DEFAULT_PREFERENCES;
};

export const saveUserPreferences = (preferences: UserPreferences): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch (error) {
    console.warn('Failed to save user preferences:', error);
  }
};

export const updateUserPreference = <K extends keyof UserPreferences>(
  key: K,
  value: UserPreferences[K]
): void => {
  const preferences = loadUserPreferences();
  preferences[key] = value;
  saveUserPreferences(preferences);
};

export const resetUserPreferences = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};