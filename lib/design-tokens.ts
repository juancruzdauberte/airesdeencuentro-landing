// Design Tokens - Color Palette & Typography
// Basado en: "Warm Minimalist Boutique Sanctuary"

export const COLORS = {
  // Primary Terracotta
  terracotta: '#A85A3F',
  terracottaDark: '#8E4830',
  terracottaLight: '#F8EFEA',
  
  // Secondary Olive
  olive: '#7A7836',
  oliveLight: '#F3F4E9',
  
  // Accent Sun
  sun: '#FFD53A',
  sunHover: '#EEC224',
  
  // Neutrals
  sand: '#F4F3EF',
  cream: '#FAFAFA',
  charcoal: '#1A1A1A',
  muted: '#63625D',
  
  // Extended
  white: '#FFFFFF',
  stone200: '#E4E0D7',
  stone300: '#D3CCC3',
};

export const TYPOGRAPHY = {
  fontSans: '"Plus Jakarta Sans", sans-serif',
  fontSerif: '"Playfair Display", serif',
  
  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  
  sizes: {
    xs: '11px',
    sm: '13px',
    base: '15px',
    lg: '18px',
    xl: '22px',
    '2xl': '32px',
    '3xl': '44px',
    '4xl': '64px',
  },
};

export const SHADOWS = {
  soft: '0 20px 40px -15px rgba(26, 26, 26, 0.07)',
  floating: '0 25px 50px -12px rgba(168, 90, 63, 0.15)',
  glass: '0 16px 40px -8px rgba(107, 104, 97, 0.08), 0 4px 12px -2px rgba(168, 90, 63, 0.03)',
};

export const BORDER_RADIUS = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  '3xl': '32px',
  full: '9999px',
};

export const BREAKPOINTS = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

export const Z_INDEX = {
  auto: 'auto',
  '0': '0',
  '10': '10',
  '20': '20',
  '30': '30',
  '40': '40',
  '50': '50',
  '60': '60',
  '70': '70',
  '80': '80',
  '90': '90',
  '100': '100',
};

// Animation configuration
export const ANIMATIONS = {
  durations: {
    fastest: '150ms',
    faster: '200ms',
    fast: '300ms',
    base: '400ms',
    slow: '600ms',
    slower: '800ms',
  },
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};
