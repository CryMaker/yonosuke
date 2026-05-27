import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FDFBF7',
          100: '#F7F3EB',
          200: '#EDE5D8',
        },
        ink: {
          900: '#1A1A2E',
          700: '#3D3D56',
          500: '#6B6B80',
          300: '#A0A0B0',
        },
        burgundy: {
          700: '#8B1E3F',
          500: '#A6425A',
          100: '#F5E6EB',
        },
        gold: {
          600: '#C9A84C',
          200: '#F7F0D9',
        },
        sage: {
          600: '#5C7C6E',
          100: '#E8F0EC',
        },
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"Playfair Display"', 'Georgia', ...defaultTheme.fontFamily.serif],
        sans: ['"Inter"', '"Noto Sans SC"', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', '"Fira Code"', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        display: ['56px', { lineHeight: '1.15', fontWeight: '700' }],
        h1: ['40px', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['30px', { lineHeight: '1.3', fontWeight: '600' }],
        h3: ['24px', { lineHeight: '1.35', fontWeight: '600' }],
        subtitle: ['20px', { lineHeight: '1.5', fontWeight: '400' }],
        body: ['16px', { lineHeight: '1.7', fontWeight: '400' }],
        'body-serif': ['17px', { lineHeight: '1.8', fontWeight: '400' }],
        small: ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        caption: ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      maxWidth: {
        site: '1280px',
        content: '720px',
      },
      borderRadius: {
        card: '10px',
        button: '8px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(26,26,46,0.06), 0 1px 2px rgba(26,26,46,0.04)',
        'card-hover': '0 4px 12px rgba(26,26,46,0.08), 0 2px 4px rgba(26,26,46,0.04)',
        elevated: '0 8px 24px rgba(26,26,46,0.10)',
      },
    },
  },
  plugins: [],
} satisfies Config
