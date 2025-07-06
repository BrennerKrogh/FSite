// Global color configuration for Formula Slug website
export const colors = {
  // Primary brand colors
  shadowColor1: '#49b3e6',        // Light blue shadow
  shadowColor2: '#f1ea2d',        // Yellow shadow
  textColor: 'rgb(255, 255, 255)', // White text
  
  // Background colors
  gradientFrom: '#141624',        // Dark blue/gray
  gradientVia: '#141624',         // Dark blue/gray
  gradientTo: '#141624',          // Dark blue/gray
  
  // UI colors
  primary: '#49b3e6',             // Primary blue
  secondary: '#f1ea2d',           // Secondary yellow
  accent: '#6366f1',              // Purple accent
  
  // Gray scale
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712'
  },
  
  // Blue scale
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a'
  },
  
  // Status colors
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
  
  // Background variations
  background: {
    primary: '#111827',           // Main dark background
    secondary: '#1f2937',         // Secondary dark background
    card: '#374151',              // Card background
    overlay: 'rgba(17, 24, 39, 0.8)', // Overlay background
  }
};

// CSS custom properties helper
export const cssVariables = {
  '--color-shadow-1': colors.shadowColor1,
  '--color-shadow-2': colors.shadowColor2,
  '--color-text': colors.textColor,
  '--color-gradient-from': colors.gradientFrom,
  '--color-gradient-via': colors.gradientVia,
  '--color-gradient-to': colors.gradientTo,
  '--color-primary': colors.primary,
  '--color-secondary': colors.secondary,
  '--color-accent': colors.accent,
  '--color-background-primary': colors.background.primary,
  '--color-background-secondary': colors.background.secondary,
  '--color-background-card': colors.background.card,
} as React.CSSProperties;
