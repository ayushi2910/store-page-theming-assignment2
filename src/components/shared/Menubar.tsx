import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useThemeStore } from '@/store/themeStore';
import ThemeSelector from './ThemeSelector';
import { getThemeConfig } from '@/configs/theme.config';

const MenuBar: React.FC = () => {
  const location = useLocation();
  const { specialty, isDark } = useThemeStore();
  const themeConfig = getThemeConfig(specialty);
  
  // Menu links
  const links = [
    { to: '/', label: 'Home' },
    { to: '/themes', label: 'Themes' },
  ];
  
  const getMenuBarClass = () => {
    const baseClasses = 'py-4 px-6 transition-colors';
    
    switch (specialty) {
      case 'organTransplant':
        return `${baseClasses} bg-primary text-white shadow-md`;
      case 'cosmeticSurgery':
        return `${baseClasses} bg-surface border-b border-primary/20`;
      default:
        return `${baseClasses} ${isDark ? 'bg-surface' : 'bg-primary text-white'}`;
    }
  };
  
  const getLinkClass = (isActive: boolean) => {
    const baseClasses = 'px-3 py-2 rounded-md font-medium transition-colors';
    
    switch (specialty) {
      case 'organTransplant':
        return `${baseClasses} ${isActive ? 'bg-primary-deep text-white' : 'text-white/80 hover:bg-primary-deep/70 hover:text-white'}`;
      case 'cosmeticSurgery':
        return `${baseClasses} ${isActive ? 'text-primary border-b-2 border-primary rounded-none' : 'text-text-secondary hover:text-primary'}`;
      default:
        if (isDark) {
          return `${baseClasses} ${isActive ? 'bg-primary text-white' : 'text-text-primary hover:bg-primary/10'}`;
        }
        return `${baseClasses} ${isActive ? 'bg-primary-deep text-white' : 'text-white/90 hover:bg-primary-deep/70 hover:text-white'}`;
    }
  };

  return (
    <nav className={getMenuBarClass()}>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className={`text-xl font-bold ${specialty === 'cosmeticSurgery' ? 'font-primary text-primary' : ''}`}>
            {themeConfig.name}
          </span>
        </div>
        
        {/* Navigation links */}
        <div className="flex items-center space-x-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={getLinkClass(location.pathname === link.to)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        {/* Theme selector */}
        <ThemeSelector />
      </div>
    </nav>
  );
};

export default MenuBar;