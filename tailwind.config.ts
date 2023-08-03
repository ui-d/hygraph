import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter), sans-serif'],
        'space-grotesk': ['var(--font-space-grotesk), sans-serif'],
      },
      colors: {
        white: '#FFFFFF',
        purple: '#7C3AED',
        darkBlue: '#1E293B',
        mediumBlue: '#334155',
        lightBlue: '#64748B',
        lightGray: '#E4E7EC',
        black: '#000000',
        darkerBlue: '#0F172A',
      },
    },
    keyframes: {
      flicker: {
        '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
          opacity: '0.99',
          filter:
            'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
        },
        '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
          opacity: '0.4',
          filter: 'none',
        },
      },
      shimmer: {
        '0%': {
          backgroundPosition: '-700px 0',
        },
        '100%': {
          backgroundPosition: '700px 0',
        },
      },
    },
    animation: {
      flicker: 'flicker 3s linear infinite',
      shimmer: 'shimmer 1.3s linear infinite',
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
