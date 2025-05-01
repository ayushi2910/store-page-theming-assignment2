/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Theme colors using CSS variables
        'primary': 'var(--primary)',
        'primary-deep': 'var(--primary-deep)',
        'primary-mild': 'var(--primary-mild)',
        
        'secondary': 'var(--secondary)',
        'secondary-deep': 'var(--secondary-deep)',
        'secondary-mild': 'var(--secondary-mild)',
        
        'accent': 'var(--accent)',
        'accent-deep': 'var(--accent-deep)',
        'accent-mild': 'var(--accent-mild)',
        
        'background': 'var(--background)',
        'surface': 'var(--surface)',
        
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        
        'error': 'var(--error)',
        'warning': 'var(--warning)',
        'success': 'var(--success)',
        'info': 'var(--info)',
      },
      fontFamily: {
        'primary': ['var(--font-family-primary)', ...defaultTheme.fontFamily.sans],
        'secondary': ['var(--font-family-secondary)', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        'sm': 'var(--border-radius-sm)',
        'md': 'var(--border-radius-md)',
        'lg': 'var(--border-radius-lg)',
        'pill': 'var(--border-radius-pill)',
      },
      boxShadow: {
        'sm': 'var(--box-shadow-sm)',
        'md': 'var(--box-shadow-md)',
        'lg': 'var(--box-shadow-lg)',
      },
    },
  },
  plugins: [],
};