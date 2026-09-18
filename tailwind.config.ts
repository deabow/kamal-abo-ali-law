import type { Config } from "tailwindcss";

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a2b4b',
          dark: '#0f172a',
          navy: '#0b1528',
        },
        accent: {
          DEFAULT: '#c5a059',
          hover: '#b58f4a',
          light: '#e6d5b8',
          glow: 'rgba(197, 160, 89, 0.25)',
        },
        'accent-light': '#e6d5b8',
        'bg-soft': '#f8f9fa',
        gold: {
          DEFAULT: '#c5a880',
          light: '#dfb76c',
          dark: '#a68550',
          muted: 'rgba(197, 168, 128, 0.15)',
          border: 'rgba(197, 168, 128, 0.25)',
        },
        obsidian: {
          DEFAULT: '#0b0f17',
          deep: '#070a10',
          canvas: '#0b0f17',
          surface: '#111726',
          card: '#131b2e',
          elevated: '#17223b',
          border: 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Cairo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'gold-sm': '0 4px 20px -2px rgba(197, 168, 128, 0.25)',
        'gold-glow': '0 0 25px -5px rgba(197, 168, 128, 0.35)',
        'luxury-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'luxury-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 30px -10px rgba(197, 168, 128, 0.25)',
      },
      animation: {
        'beacon': 'beacon 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        beacon: {
          '0%': { transform: 'scale(0.95)', opacity: '0.8', boxShadow: '0 0 0 0 rgba(197, 168, 128, 0.5)' },
          '70%': { transform: 'scale(1)', opacity: '1', boxShadow: '0 0 0 14px rgba(197, 168, 128, 0)' },
          '100%': { transform: 'scale(0.95)', opacity: '0.8', boxShadow: '0 0 0 0 rgba(197, 168, 128, 0)' },
        }
      }
    }
  },
  plugins: []
};

export default config;
