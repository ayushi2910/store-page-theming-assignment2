import React from 'react';
import { motion } from 'framer-motion';
import { ThemeDefinition, ThemeSpecialty } from '@/@types/theme';
import { specialtyConfigs } from '@/configs/specialty.config';

interface ThemePreviewProps {
  theme: ThemeDefinition;
  specialty: ThemeSpecialty;
  isActive: boolean;
  onClick: () => void;
}

const ThemePreview: React.FC<ThemePreviewProps> = ({ theme, specialty, isActive, onClick }) => {
  const specialtyInfo = specialtyConfigs[specialty];
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative rounded-lg overflow-hidden cursor-pointer border-2 
        ${isActive ? 'border-primary shadow-lg shadow-primary/20' : 'border-transparent hover:border-primary-mild'} 
        transition-all duration-300
      `}
      onClick={onClick}
    >
      {/* Theme Preview Image */}
      <div className="aspect-video bg-surface overflow-hidden">
        <img 
          src={theme.thumbnail} 
          alt={`${theme.specialtyName} theme preview`}
          className="w-full h-full object-cover"
        />
        
        {/* Preview components */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface/80 flex flex-col justify-end p-4">
          {/* Example UI Elements */}
          <div className="flex gap-2 mb-3">
            <div className="h-8 w-24 rounded bg-primary"></div>
            <div className="h-8 w-16 rounded bg-secondary"></div>
          </div>
          <div className="h-4 w-3/4 rounded bg-text/30"></div>
          <div className="h-4 w-1/2 rounded bg-text/20 mt-2"></div>
        </div>
      </div>
      
      {/* Theme Info */}
      <div className="p-4 bg-surface">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
            <img src={specialtyInfo.iconPath} alt={specialtyInfo.name} className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-medium text-text">{theme.specialtyName}</h3>
            <p className="text-xs text-text-light">{theme.description}</p>
          </div>
        </div>
        
        {/* Color scheme preview */}
                  <div className="mt-3 flex gap-1">
          <div className="w-5 h-5 rounded-full bg-primary" title="Primary color"></div>
          <div className="w-5 h-5 rounded-full bg-secondary" title="Secondary color"></div>
          <div className="w-5 h-5 rounded-full bg-accent" title="Accent color"></div>
          <div className="w-5 h-5 rounded-full bg-success" title="Success color"></div>
          <div className="w-5 h-5 rounded-full bg-error" title="Error color"></div>
        </div>
        
        {/* Active indicator */}
        {isActive && (
          <div className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded-full">
            Active
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ThemePreview;