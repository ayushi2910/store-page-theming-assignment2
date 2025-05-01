export interface SpecialtyInfo {
    name: string;
    description: string;
    features: string[];
    iconPath: string;
  }
  
  export const specialtyConfigs: Record<string, SpecialtyInfo> = {
    default: {
      name: 'General Medical Practice',
      description: 'A versatile theme designed for general healthcare providers and clinics.',
      features: [
        'Clean and accessible interface',
        'Balanced information density',
        'Universal medical iconography',
        'Patient-friendly terminology'
      ],
      iconPath: '/icons/medical-cross.svg',
    },
    transplant: {
      name: 'Organ Transplant',
      description: 'Specialized interface for transplant centers and specialists.',
      features: [
        'Organ status visualization',
        'Transplant timeline tracking',
        'Donor-recipient matching interface',
        'Medication management system'
      ],
      iconPath: '/icons/organ-transplant.svg',
    },
    cosmetic: {
      name: 'Cosmetic Surgery',
      description: 'Elegant theme for cosmetic surgery clinics and practitioners.',
      features: [
        'Before/after image comparison',
        'Procedure visualization tools',
        'Aesthetic-focused design',
        'Recovery timeline tracking'
      ],
      iconPath: '/icons/cosmetic-surgery.svg',
    },
  };