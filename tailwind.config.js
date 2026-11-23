/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FBF7F2',
        cream: '#F6EFE7',
        blush: { 50: '#FDF5F3', 100: '#F9E6E2', 200: '#F2D0CB', 300: '#E8B8B5', 400: '#D99A9B' },
        rose: { deep: '#A8666B' },
        gold: { DEFAULT: '#B8975A', soft: '#D9C497' },
        ink: { DEFAULT: '#4A3F3C', soft: '#7A6C67' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
        display: ['Cinzel', 'Georgia', 'serif'],
        deva: ['"Tiro Devanagari Hindi"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      boxShadow: { card: '0 24px 60px -24px rgba(90,60,50,.45), 0 4px 14px -6px rgba(90,60,50,.25)' },
      keyframes: {
        'slow-zoom': { '0%': { transform: 'scale(1.04)' }, '100%': { transform: 'scale(1.12)' } },
        'bob': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(6px)' } },
      },
      animation: {
        'slow-zoom': 'slow-zoom 18s ease-in-out infinite alternate',
        bob: 'bob 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
