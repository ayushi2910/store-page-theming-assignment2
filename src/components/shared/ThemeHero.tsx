import React from 'react';
import { useThemeStore } from '@/store/themeStore';
import { getThemeConfig } from '@/configs/theme.config';

interface ThemeHeroProps {
  className?: string;
}

const ThemeHero: React.FC<ThemeHeroProps> = ({ className = '' }) => {
  const { specialty } = useThemeStore();
  const themeConfig = getThemeConfig(specialty);
  
  // Render hero based on specialty
  const renderHero = () => {
    switch (specialty) {
      case 'organTransplant':
        return (
          <div className={`hero-organTransplant relative overflow-hidden p-8 md:p-16 text-white ${className}`}>
            {/* Clinical pattern overlay */}
            <div className="absolute inset-0 opacity-10 pattern-grid" />
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="md:max-w-3xl">
                <p className="text-secondary-mild font-medium mb-2">{themeConfig.marketing.tagline}</p>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{themeConfig.marketing.headline}</h1>
                <p className="text-lg md:text-xl mb-8">{themeConfig.marketing.description}</p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="btn btn-primary">{themeConfig.marketing.ctaPrimary}</button>
                  <button className="btn bg-white text-primary hover:bg-gray-100">{themeConfig.marketing.ctaSecondary}</button>
                </div>
                
                {/* Trust indicators */}
                <div className="mt-12 pt-8 border-t border-white/20">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-2xl font-bold">95%</p>
                      <p className="text-sm text-secondary-mild">Success Rate</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">24/7</p>
                      <p className="text-sm text-secondary-mild">Patient Support</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">3,500+</p>
                      <p className="text-sm text-secondary-mild">Transplants</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'cosmeticSurgery':
        return (
          <div className={`hero-cosmeticSurgery relative overflow-hidden p-8 md:p-16 ${className}`}>
            {/* Elegant backdrop */}
            <div className="absolute inset-0 z-0 opacity-40 bg-gradient-to-br from-primary-mild/20 via-secondary-mild/10 to-accent-mild/20" />
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="md:max-w-2xl">
                <p className="text-primary font-medium italic mb-2 tracking-wide">{themeConfig.marketing.tagline}</p>
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary">{themeConfig.marketing.headline}</h1>
                <p className="text-lg md:text-xl mb-8 text-text-secondary">{themeConfig.marketing.description}</p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="btn btn-primary px-8 py-3 rounded-full">{themeConfig.marketing.ctaPrimary}</button>
                  <button className="btn border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white">
                    {themeConfig.marketing.ctaSecondary}
                  </button>
                </div>
                
                {/* Luxury badges */}
                <div className="mt-16 flex flex-wrap gap-6 items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="font-medium">Premium Care</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <span className="font-medium">Personalized Plans</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="font-medium">Expert Specialists</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return (
          <div className={`hero-default relative p-8 md:p-16 text-white ${className}`}>
            {/* Default gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-deep z-0" />
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="md:max-w-2xl">
                <p className="text-white/80 font-medium mb-2">{themeConfig.marketing.tagline}</p>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{themeConfig.marketing.headline}</h1>
                <p className="text-lg md:text-xl mb-8">{themeConfig.marketing.description}</p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="btn bg-white text-primary hover:bg-gray-100">{themeConfig.marketing.ctaPrimary}</button>
                  <button className="btn bg-transparent border border-white hover:bg-white/10">{themeConfig.marketing.ctaSecondary}</button>
                </div>
                
                {/* Feature highlights */}
                <div className="mt-12 pt-8 border-t border-white/20">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <p className="font-medium">Smart Records</p>
                    </div>
                    <div>
                      <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <p className="font-medium">Secure Data</p>
                    </div>
                    <div>
                      <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                      </div>
                      <p className="font-medium">24/7 Support</p>
                    </div>
                    <div>
                      <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <p className="font-medium">Fast Results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };
  
  return renderHero();
};

export default ThemeHero;