import { useState, useEffect } from 'react';
import { UserPreferences, loadUserPreferences, saveUserPreferences } from '@/lib/user-preferences';

export function useUserPreferences() {
  const [preferences, setPreferences] = useState<UserPreferences>(loadUserPreferences);

  useEffect(() => {
    saveUserPreferences(preferences);
  }, [preferences]);

  const updatePreferences = (updates: Partial<UserPreferences>) => {
    setPreferences(prev => ({ ...prev, ...updates }));
  };

  const updateDisplaySetting = (key: keyof UserPreferences['displaySettings'], value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      displaySettings: {
        ...prev.displaySettings,
        [key]: value,
      },
    }));
  };

  const setFavoriteCalculator = (calculator: UserPreferences['favoriteCalculator']) => {
    setPreferences(prev => ({
      ...prev,
      favoriteCalculator: calculator,
      lastUsed: {
        timestamp: Date.now(),
        calculator,
      },
    }));
  };

  return {
    preferences,
    updatePreferences,
    updateDisplaySetting,
    setFavoriteCalculator,
  };
}