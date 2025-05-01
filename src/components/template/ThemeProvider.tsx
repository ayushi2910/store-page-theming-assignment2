import React, { useEffect } from 'react';
import { useThemeStore } from '@/store/themeStore';
import { getThemeConfig } from '@/configs/theme.config';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { isDark, specialty } = useThemeStore();
  const themeConfig = getThemeConfig(specialty);
  
  useEffect(() => {
    // Apply theme variables to document root
    const root = document.documentElement;
    
    // Set theme class
    root.className = '';
    root.classList.add(`theme-${specialty}`);
    
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Apply CSS variables
    root.style.setProperty('--primary', themeConfig.colors.primary);
    root.style.setProperty('--primary-deep', themeConfig.colors.primaryDeep);
    root.style.setProperty('--primary-mild', themeConfig.colors.primaryMild);
    
    root.style.setProperty('--secondary', themeConfig.colors.secondary);
    root.style.setProperty('--secondary-deep', themeConfig.colors.secondaryDeep);
    root.style.setProperty('--secondary-mild', themeConfig.colors.secondaryMild);
    
    root.style.setProperty('--accent', themeConfig.colors.accent);
    root.style.setProperty('--accent-deep', themeConfig.colors.accentDeep);
    root.style.setProperty('--accent-mild', themeConfig.colors.accentMild);
    
    root.style.setProperty('--background', themeConfig.colors.background);
    root.style.setProperty('--surface', themeConfig.colors.surface);
    
    root.style.setProperty('--text-primary', themeConfig.colors.text.primary);
    root.style.setProperty('--text-secondary', themeConfig.colors.text.secondary);
    
    root.style.setProperty('--error', themeConfig.colors.status.error);
    root.style.setProperty('--warning', themeConfig.colors.status.warning);
    root.style.setProperty('--success', themeConfig.colors.status.success);
    root.style.setProperty('--info', themeConfig.colors.status.info);
    
    // Apply typography
    root.style.setProperty('--font-family-primary', themeConfig.typography.fontFamily.primary);
    root.style.setProperty('--font-family-secondary', themeConfig.typography.fontFamily.secondary);
    
    // Apply other theme properties as needed
    document.body.style.fontFamily = themeConfig.typography.fontFamily.primary;
    document.body.style.fontSize = themeConfig.typography.fontSize.base;
    document.body.style.backgroundColor = themeConfig.colors.background;
    document.body.style.color = themeConfig.colors.text.primary;
  }, [isDark, specialty, themeConfig]);
  
  return <>{children}</>;
};

export default ThemeProvider;