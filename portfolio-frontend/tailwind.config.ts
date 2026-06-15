import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00D4FF',
        secondary: '#7C3AED',
        accent: '#00FFB2',
        surface: {
          DEFAULT: '#111113',
          50: '#0C0C0E',
          100: '#111113',
          200: '#18181B',
          300: '#1E1E21',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'cursor-blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'dot-grid': '36px 36px',
      },
    },
  },
  plugins: [],
} satisfies Config
