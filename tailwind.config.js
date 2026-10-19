/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030712',
          900: '#050c1e',
          850: '#07122b',
          800: '#0a1938',
          750: '#0e2148',
          700: '#142b5c',
          600: '#1d3b7a',
          500: '#2563eb',
          400: '#38bdf8',
          300: '#7dd3fc',
        },
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Clashdisplay', 'Syne', 'Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        grotesk: ['Clashgrotesk', 'Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 10s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 4s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-14px) scale(1.03)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(14px) scale(0.97)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      }
    },
  },
  plugins: [],
}

