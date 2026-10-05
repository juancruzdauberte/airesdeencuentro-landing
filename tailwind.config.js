/** @type {import('tailwindcss').Config} */

console.log('📦 tailwind.config.js CARGADO');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          terracotta: '#A85A3F',
          'terracotta-dark': '#8E4830',
          'terracotta-light': '#F8EFEA',
          sun: '#FFD53A',
          'sun-hover': '#EEC224',
          olive: '#7A7836',
          'olive-light': '#F3F4E9',
          sand: '#F4F3EF',
          cream: '#FAFAFA',
          charcoal: '#1A1A1A',
          muted: '#63625D',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 40px -15px rgba(26, 26, 26, 0.07)',
        floating: '0 25px 50px -12px rgba(168, 90, 63, 0.15)',
        glass: '0 16px 40px -8px rgba(107, 104, 97, 0.08), 0 4px 12px -2px rgba(168, 90, 63, 0.03)',
      },
      borderRadius: {
        '2xl': '24px',
        '3xl': '32px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'bounce-slow': 'bounceSlow 2s infinite',
        'scale-up': 'scaleUp 0.4s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scaleUp: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

console.log('✅ tailwind.config.js CONFIGURADO COMPLETAMENTE');
