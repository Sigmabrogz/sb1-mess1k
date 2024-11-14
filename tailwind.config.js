/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#111827',
        card: '#1F2937',
        primary: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
        },
        success: {
          DEFAULT: '#10B981',
          hover: '#059669',
        },
        error: {
          DEFAULT: '#EF4444',
          hover: '#DC2626',
        },
        accent: {
          green: '#34D399',
          purple: '#8B5CF6',
          yellow: '#FBBF24',
        },
        text: {
          primary: '#F3F4F6',
          secondary: '#9CA3AF',
        }
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      fontSize: {
        xs: '12px',
        body: '14px',
        input: '16px',
        heading: '20px',
      },
      spacing: {
        layout: '24px',
      },
      borderRadius: {
        card: '16px',
      },
      backdropBlur: {
        card: '8px',
      },
      transitionDuration: {
        hover: '150ms',
      },
      animation: {
        'scale-in': 'scale-in 150ms ease-out',
        'fade-in': 'fade-in 150ms ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px -5px rgba(59, 130, 246, 0.5)',
      },
    },
  },
  plugins: [],
};