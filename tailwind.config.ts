import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './context/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1240px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Bright neon cyan — primary accent (backgrounds/borders/fills only;
        // too light for text — see ocean-dark for that)
        ocean: {
          DEFAULT: '#00FFEF',
          light: '#38BDF8',
          dark: '#0284C7',
          deep: '#0369A1',
        },
        // Warm sand & soft off-white — page backgrounds
        sand: {
          DEFAULT: '#E8CFA0',
          light: '#F4EAE1',
          50: '#FAF3E7',
        },
        // Deep mahogany brown — wood accent
        wood: {
          DEFAULT: '#563232',
          light: '#7A4A46',
          dark: '#3C2323',
        },
        // Bright aqua / foam teal — coastal highlight
        seagreen: {
          DEFAULT: '#14B8A6',
          light: '#2DD4BF',
          dark: '#0D9488',
        },
        background: {
          DEFAULT: '#FDFBF7',
          alt: '#FAF3E7',
        },
        ink: {
          DEFAULT: '#0F172A',
          light: '#334155',
          muted: '#475569',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -4px rgba(15, 23, 42, 0.08)',
        card: '0 8px 28px -8px rgba(15, 23, 42, 0.10)',
        lift: '0 20px 40px -12px rgba(15, 23, 42, 0.16)',
        'glow-teal': '0 16px 36px -10px rgba(20, 184, 166, 0.35)',
        'glow-wood': '0 16px 32px -8px rgba(86, 50, 50, 0.35)',
      },
      backgroundImage: {
        'wood-grain': "url('/textures/wood-grain.png')",
        'coastal-gradient': 'linear-gradient(135deg, #0284C7 0%, #0D9488 100%)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        waveDrift: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-3%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        float: 'float 4s ease-in-out infinite',
        waveDrift: 'waveDrift 10s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
