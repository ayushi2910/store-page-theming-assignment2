import { ThemeConfig, ThemeSpecialty } from '@/@types/theme';
import { baseColors } from '@/views/Home/themes/base/colors';
import { baseTypography } from '@/views/Home/themes/base/typography';
import { organTransplantColors } from '@/views/Home/themes/organTransplant/colors';
import { organTransplantTypography } from '@/views/Home/themes/organTransplant/typography';
import { cosmeticSurgeryColors } from '@/views/Home/themes/cosmeticSurgery/colors';
import { cosmeticSurgeryTypography } from '@/views/Home/themes/cosmeticSurgery/typography';

// Default theme configuration
const defaultTheme: ThemeConfig = {
  name: 'MedicalApp',
  description: 'Default medical application theme',
  colors: baseColors,
  typography: baseTypography,
  marketing: {
    tagline: 'Modern Healthcare Solutions',
    headline: 'Advanced Medical Platform for Healthcare Professionals',
    description: 'Streamline your medical practice with our comprehensive suite of tools designed to improve patient care and operational efficiency.',
    ctaPrimary: 'Get Started',
    ctaSecondary: 'Learn More',
  },
  components: {
    borderRadius: {
      small: '0.25rem',
      medium: '0.5rem',
      large: '1rem',
      pill: '9999px',
    },
    boxShadow: {
      small: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      large: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
    spacing: {
      tight: '0.5rem',
      normal: '1rem',
      loose: '2rem',
    },
  },
};

// Organ Transplant specialty theme
const organTransplantTheme: ThemeConfig = {
  name: 'TransplantCare',
  description: 'Specialized theme for organ transplant centers',
  colors: organTransplantColors,
  typography: organTransplantTypography,
  marketing: {
    tagline: 'Leading the Way in Transplant Medicine',
    headline: 'Expert Care for Transplant Patients',
    description: 'Our comprehensive approach combines cutting-edge technology with compassionate care to provide the best outcomes for organ transplant patients.',
    ctaPrimary: 'Find a Specialist',
    ctaSecondary: 'Patient Resources',
  },
  components: {
    borderRadius: {
      small: '0.125rem',
      medium: '0.25rem',
      large: '0.5rem',
      pill: '9999px',
    },
    boxShadow: {
      small: '0 1px 3px rgba(0, 0, 0, 0.12)',
      medium: '0 3px 6px rgba(0, 0, 0, 0.15)',
      large: '0 8px 12px rgba(0, 0, 0, 0.18)',
    },
    spacing: {
      tight: '0.75rem',
      normal: '1.25rem',
      loose: '2.5rem',
    },
  },
};

// Cosmetic Surgery specialty theme
const cosmeticSurgeryTheme: ThemeConfig = {
  name: 'EleganceMD',
  description: 'Luxury theme for cosmetic surgery practices',
  colors: cosmeticSurgeryColors,
  typography: cosmeticSurgeryTypography,
  marketing: {
    tagline: 'Redefine Your Natural Beauty',
    headline: 'Aesthetic Excellence, Personalized for You',
    description: 'Experience the perfect blend of artistic vision and surgical precision in a luxurious, comfortable environment designed around your needs.',
    ctaPrimary: 'Book a Consultation',
    ctaSecondary: 'Explore Procedures',
  },
  components: {
    borderRadius: {
      small: '0.375rem',
      medium: '0.75rem',
      large: '1.5rem',
      pill: '9999px',
    },
    boxShadow: {
      small: '0 2px 4px rgba(0, 0, 0, 0.04)',
      medium: '0 6px 12px rgba(0, 0, 0, 0.06)',
      large: '0 12px 24px rgba(0, 0, 0, 0.08)',
    },
    spacing: {
      tight: '1rem',
      normal: '2rem',
      loose: '3rem',
    },
  },
};

// Function to get theme configuration based on specialty
export const getThemeConfig = (specialty: ThemeSpecialty): ThemeConfig => {
  switch (specialty) {
    case 'organTransplant':
      return organTransplantTheme;
    case 'cosmeticSurgery':
      return cosmeticSurgeryTheme;
    default:
      return defaultTheme;
  }
};