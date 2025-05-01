import { useCallback, useMemo } from 'react';
import { useThemeStore } from '@/store/themeStore';
import { getThemeDefinition } from '@/configs/theme.config';
import { ThemeDefinition, ThemeMode, ThemeSpecialty } from '@/@types/theme';

export function useTheme() {
  const { mode, specialty, setMode, setSpecialty, toggleMode } = useThemeStore();
  
  const theme = useMemo(() => getThemeDefinition(specialty), [specialty]);
  
  const isDark = useMemo(() => mode === 'dark', [mode]);
  
  const switchTheme = useCallback((newSpecialty: ThemeSpecialty) => {
    setSpecialty(newSpecialty);
  }, [setSpecialty]);
  
  const switchMode = useCallback((newMode: ThemeMode) => {
    setMode(newMode);
  }, [setMode]);
  
  return {
    theme,
    mode,
    specialty,
    isDark,
    toggleMode,
    switchTheme,
    switchMode,
    setMode,
    setSpecialty,
  };
}