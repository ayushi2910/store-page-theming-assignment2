import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Theme, ThemeSpecialty } from '@/@types/theme';

type ThemeState = Theme & {
  specialty: ThemeSpecialty;
};

type ThemeAction = {
  setTheme: (payload: Partial<Theme>) => void;
  toggleDarkMode: () => void;
  setSpecialty: (payload: ThemeSpecialty) => void;
};

// Default theme values
const defaultTheme: Theme = {
  isDark: false,
  primaryColor: '#0070f3',
  secondaryColor: '#0ea5e9',
  accentColor: '#8b5cf6',
  textPrimary: '#111827',
  textSecondary: '#4b5563',
  background: '#ffffff',
  surface: '#f9fafb',
  error: '#ef4444',
  warning: '#f59e0b',
  success: '#10b981',
  info: '#3b82f6',
};

export const useThemeStore = create<ThemeState & ThemeAction>()(
  persist(
    (set) => ({
      // Default theme state
      ...defaultTheme,
      specialty: 'default',

      // Actions
      setTheme: (payload) => set((state) => ({ ...state, ...payload })),
      
      toggleDarkMode: () => 
        set((state) => {
          const isDark = !state.isDark;
          
          return {
            isDark,
            background: isDark ? '#121212' : '#ffffff',
            surface: isDark ? '#1e1e1e' : '#f9fafb',
            textPrimary: isDark ? '#f9fafb' : '#111827',
            textSecondary: isDark ? '#d1d5db' : '#4b5563',
          };
        }),
      
      setSpecialty: (payload) => set(() => ({ specialty: payload })),
    }),
    {
      name: 'theme',
    },
  ),
);