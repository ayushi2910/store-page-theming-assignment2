import React from 'react';
import { useThemeStore } from '@/store/themeStore';
import { ThemeSpecialty } from '@/@types/theme';
import { getThemeConfig } from '@/configs/theme.config';
import ThemeHero from '@/components/shared/ThemeHero';

const ThemesPage: React.FC = () => {
  const { specialty, setSpecialty } = useThemeStore();
  
  // Available themes for preview
  const availableThemes: ThemeSpecialty[] = ['default', 'organTransplant', 'cosmeticSurgery'];
  
  const handleThemeChange = (newTheme: ThemeSpecialty) => {
    setSpecialty(newTheme);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-text-primary mb-4">Choose Your Theme</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Select a theme that best fits your medical specialty and preferences.
            Each theme has been carefully designed to enhance your users' experience.
          </p>
        </div>
        
        {/* Theme Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {availableThemes.map((themeOption) => {
            const themeConfig = getThemeConfig(themeOption);
            
            return (
              <div 
                key={themeOption}
                className={`rounded-lg overflow-hidden border transition-all ${
                  specialty === themeOption 
                    ? 'ring-2 ring-primary shadow-lg transform scale-[1.02]' 
                    : 'border-gray-200 hover:shadow-md'
                }`}
              >
                {/* Theme Preview Header */}
                <div 
                  className="h-24 flex items-center justify-center"
                  style={{ 
                    backgroundColor: themeConfig.colors.primary,
                    color: '#fff',
                  }}
                >
                  <h3 className="text-xl font-bold">{themeConfig.name}</h3>
                </div>
                
                {/* Theme Details */}
                <div className="p-6">
                  <p className="text-text-secondary mb-4">{themeConfig.description}</p>
                  
                  {/* Color Palette Preview */}
                  <div className="flex space-x-2 mb-6">
                    <div 
                      className="w-8 h-8 rounded-full" 
                      style={{ backgroundColor: themeConfig.colors.primary }}
                      title="Primary Color"
                    />
                    <div 
                      className="w-8 h-8 rounded-full" 
                      style={{ backgroundColor: themeConfig.colors.secondary }}
                      title="Secondary Color"
                    />
                    <div 
                      className="w-8 h-8 rounded-full" 
                      style={{ backgroundColor: themeConfig.colors.accent }}
                      title="Accent Color"
                    />
                  </div>
                  
                  {/* Typography Preview */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-text-secondary mb-2">Typography</h4>
                    <p className="mb-1" style={{ fontFamily: themeConfig.typography.fontFamily.primary }}>
                      Primary Font: {themeConfig.typography.fontFamily.primary.split(',')[0].replace(/'/g, '')}
                    </p>
                    <p style={{ fontFamily: themeConfig.typography.fontFamily.secondary }}>
                      Secondary Font: {themeConfig.typography.fontFamily.secondary.split(',')[0].replace(/'/g, '')}
                    </p>
                  </div>
                  
                  {/* Theme Selection Button */}
                  <button
                    onClick={() => handleThemeChange(themeOption)}
                    className={`w-full py-2 px-4 rounded-md transition-colors ${
                      specialty === themeOption 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-text-primary'
                    }`}
                  >
                    {specialty === themeOption ? 'Active Theme' : 'Apply Theme'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Theme Preview Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">Preview Selected Theme</h2>
          
          {/* Theme Hero Preview */}
          <div className="mb-8">
            <ThemeHero themeSpecialty={specialty} />
          </div>
          
          {/* Additional Theme Elements Preview */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4" style={{ color: getThemeConfig(specialty).colors.primary }}>
              Theme Elements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Buttons Preview */}
              <div className="space-y-3">
                <h4 className="font-medium text-text-secondary">Buttons</h4>
                <div className="flex flex-wrap gap-2">
                  <button 
                    className="px-4 py-2 rounded-md text-white"
                    style={{ backgroundColor: getThemeConfig(specialty).colors.primary }}
                  >
                    Primary Button
                  </button>
                  <button 
                    className="px-4 py-2 rounded-md text-white"
                    style={{ backgroundColor: getThemeConfig(specialty).colors.secondary }}
                  >
                    Secondary Button
                  </button>
                  <button 
                    className="px-4 py-2 rounded-md border"
                    style={{ 
                      borderColor: getThemeConfig(specialty).colors.primary,
                      color: getThemeConfig(specialty).colors.primary 
                    }}
                  >
                    Outlined Button
                  </button>
                </div>
              </div>
              
              {/* Text and Headings Preview */}
              <div className="space-y-3">
                <h4 className="font-medium text-text-secondary">Typography</h4>
                <h5 
                  className="text-lg font-bold"
                  style={{ 
                    fontFamily: getThemeConfig(specialty).typography.fontFamily.primary,
                    color: getThemeConfig(specialty).colors.primary
                  }}
                >
                  Primary Heading
                </h5>
                <p 
                  className="text-text-secondary"
                  style={{ fontFamily: getThemeConfig(specialty).typography.fontFamily.secondary }}
                >
                  This is how your regular text will appear with the selected theme.
                </p>
                <a 
                  href="#" 
                  className="inline-block hover:underline"
                  style={{ color: getThemeConfig(specialty).colors.secondary }}
                >
                  Themed Link Example
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            onClick={() => alert('Theme saved!')}
            className="px-8 py-3 rounded-md text-white font-medium"
            style={{ backgroundColor: getThemeConfig(specialty).colors.primary }}
          >
            Save Theme Selection
          </button>
          <p className="mt-2 text-sm text-text-secondary">
            You can change your theme at any time from your dashboard settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThemesPage;