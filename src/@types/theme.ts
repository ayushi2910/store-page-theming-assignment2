export type Theme = {
  isDark: boolean;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textPrimary: string;
  textSecondary: string;
  background: string;
  surface: string;
  error: string;
  warning: string;
  success: string;
  info: string;
};

export type ThemeSpecialty = 'default' | 'organTransplant' | 'cosmeticSurgery';

export type ThemeConfig = {
  name: string;
  description: string;
  colors: {
    primary: string;
    primaryDeep: string;
    primaryMild: string;
    secondary: string;
    secondaryDeep: string;
    secondaryMild: string;
    accent: string;
    accentDeep: string;
    accentMild: string;
    background: string;
    surface: string;
    text: {
      primary: string;
      secondary: string;
    };
    status: {
      error: string;
      warning: string;
      success: string;
      info: string;
    };
  };
  typography: {
    fontFamily: {
      primary: string;
      secondary: string;
    };
    fontSize: {
      base: string;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
      body: string;
      small: string;
    };
    fontWeight: {
      light: number;
      regular: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    lineHeight: {
      tight: string;
      normal: string;
      loose: string;
    };
  };
  marketing: {
    tagline: string;
    headline: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  components: {
    borderRadius: {
      small: string;
      medium: string;
      large: string;
      pill: string;
    };
    boxShadow: {
      small: string;
      medium: string;
      large: string;
    };
    spacing: {
      tight: string;
      normal: string;
      loose: string;
    };
  };
};