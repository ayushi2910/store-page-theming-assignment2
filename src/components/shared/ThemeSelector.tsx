import React from 'react';
import { useThemeStore } from '@/store/themeStore';
import { ThemeSpecialty } from '@/@types/theme';
import { getThemeConfig } from '@/configs/theme.config';

const ThemeSelector: React.FC = () => {
  const { isDark, toggleDarkMode, specialty, setSpecialty } = useThemeStore();
  
  // Available themes
  const themes: { value: ThemeSpecialty; label: string }[] = [
    { value: 'default', label: 'Default Theme' },
    { value: 'organTransplant', label: 'Organ Transplant' },
    { value: 'cosmeticSurgery', label: 'Cosmetic Surgery' },
  ];
  
  const currentTheme = getThemeConfig(specialty);
  
  return (
    <div className="flex items-center gap-4">
      {/* Theme selection dropdown */}
      <div className="relative">
        <select
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value as ThemeSpecialty)}
          className="appearance-none bg-transparent border border-white/20 rounded-md px-3 py-1 pr-8 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/30"
          style={{
            backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
            color: isDark ? 'white' : specialty === 'default' ? 'white' : currentTheme.colors.text.primary
          }}
        >
          {themes.map((theme) => (
            <option key={theme.value} value={theme.value}>
              {theme.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      {/* Dark mode toggle */}
      <button
        onClick={toggleDarkMode}
        className="p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-white/30"
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round" 
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ThemeSelector;