import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter), sans-serif'],
        'space-grotesk': ['var(--font-space-grotesk), sans-serif'],
      },
      fontSize: {
        base: ['1rem', '1.5rem'], // 16px, 24px
        'lg-narrow': ['1.125rem', '1.75rem'], // 20px, 28px
        lg: ['1.125rem', '2.375rem'], // 18px, 38px
        xl: ['1.25rem', '1.875rem'], // 20px, 30px
        '2xl': ['1.875rem', '2.375rem'], // 30px, 38px
        '3xl': ['2.25rem', '2.75rem'], // 36px, 44px
        '4xl': ['3.75rem', '4.5rem'], // 60px, 72px
      },
      colors: {
        white: '#FFFFFF',
        purple: '#7C3AED',
        'medium-blue': '#334155',
        'dark-blue': '#1E293B',
        'darker-blue': '#0F172A',
        'light-blue': '#64748B',
        'extra-light-gray': '#F8FAFC',
        'light-gray': '#E4E7EC',
        gray: '#F1F5F9',
        black: '#000000',
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
