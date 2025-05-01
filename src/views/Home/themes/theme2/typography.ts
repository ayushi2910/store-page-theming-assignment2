/**
 * Cosmetic Surgery theme typography settings
 * Focused on elegance, luxury, and aesthetics
 */

import baseTypography from '../base/typography';

const typography = {
  ...baseTypography,
  
  // Font families - Using more elegant, sophisticated fonts
  fontFamily: "'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontFamilyHeading: "'Playfair Display', Georgia, 'Times New Roman', serif",
  
  // Font weights - More contrast between regular and heading weights
  fontWeightLight: '300',
  fontWeightRegular: '400',
  fontWeightMedium: '500',
  fontWeightSemibold: '600',
  fontWeightBold: '700',
  
  // Font sizes - Slightly more refined for luxury aesthetic
  fontSizeXl: '1.275rem',     // 20.4px - slightly larger
  fontSize2xl: '1.55rem',     // 24.8px - slightly larger
  fontSize3xl: '1.925rem',    // 30.8px - slightly larger
  
  // Line heights - More spacious for elegant appearance
  lineHeightTight: '1.275',
  lineHeightNormal: '1.55',
  
  // Letter spacing - More refined tracking
  letterSpacingTight: '-0.01em',
  letterSpacingNormal: '0.005em',
  letterSpacingWide: '0.03em',
  letterSpacingWider: '0.06em',
};

export default typography;