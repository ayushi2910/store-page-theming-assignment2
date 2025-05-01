/**
 * Organ Transplant theme color palette
 * Focused on trust, reliability, and professionalism with a medical aesthetic
 */

import baseColors from '../base/colors';

const colors = {
  ...baseColors,
  
  // Primary colors - Blue tones for trust and reliability
  primary: '#0369a1',      // Deeper blue - represents trust in medical contexts
  primaryLight: '#38bdf8', // Lighter blue for accents
  primaryDark: '#075985',  // Dark blue for emphasis
  
  // Secondary colors - Teal/green tones for health and healing
  secondary: '#14b8a6',    // Teal - represents healthcare and healing
  secondaryLight: '#5eead4',
  secondaryDark: '#0f766e',
  
  // Accent colors - Soft purple for care and compassion
  accent: '#8b5cf6',       // Purple - symbolizes care and sensitivity
  accentLight: '#a78bfa',
  accentDark: '#7c3aed',
  
  // Background colors - Clean, clinical feel
  background: '#f8fafc',   // Very light blue-gray - clinical, clean
  backgroundAlt: '#f1f5f9',
  
  // Feedback colors - Medical-appropriate tones  
  success: '#10b981',      // Green - successful procedure
  error: '#dc2626',        // Red - emergency/alert
  warning: '#f59e0b',      // Amber - caution
  info: '#0ea5e9',         // Blue - information
};

export default colors;