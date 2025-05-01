/**
 * Organ Transplant theme typography settings
 * Focused on clarity, readability, and professional appearance
 */

import baseTypography from '../base/typography';

const typography = {
  ...baseTypography,
  
  // Font families - Using more medical/professional fonts
  fontFamily: "'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontFamilyHeading: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  
  // Font weights - Slightly bolder for better readability in medical contexts
  fontWeightRegular: '400',
  fontWeightMedium: '500',
  fontWeightSemibold: '600',
  fontWeightBold: '700',
  
  // Font sizes - Slightly larger for better readability
  fontSizeBase: '1.0625rem',  // 17px - slightly larger for better readability
  fontSizeLg: '1.1875rem',    // 19px
  
  // Line heights - Slightly more relaxed for medical content
  lineHeightNormal: '1.55',
  lineHeightRelaxed: '1.7',
  
  // Letter spacing - Slightly more open for readability
  letterSpacingNormal: '0.01em',
};

export default typography;