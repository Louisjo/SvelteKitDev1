/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom Branding System - HSL based for easy manipulation
        brand: {
          // Core Magenta (300°)
          'core-50': 'hsl(300, 100%, 95%)',
          'core-100': 'hsl(300, 100%, 90%)',
          'core-200': 'hsl(300, 100%, 80%)',
          'core-300': 'hsl(300, 100%, 70%)',
          'core-400': 'hsl(300, 100%, 60%)',
          'core-500': 'hsl(300, 100%, 50%)',    // Primary magenta
          'core-600': 'hsl(300, 100%, 40%)',
          'core-700': 'hsl(300, 100%, 30%)',
          'core-800': 'hsl(300, 100%, 20%)',
          'core-900': 'hsl(300, 100%, 10%)',
          
          // Cool variation (270° - Blue-purple)
          'cool-50': 'hsl(270, 100%, 95%)',
          'cool-100': 'hsl(270, 100%, 90%)',
          'cool-200': 'hsl(270, 100%, 80%)',
          'cool-300': 'hsl(270, 100%, 70%)',
          'cool-400': 'hsl(270, 100%, 60%)',
          'cool-500': 'hsl(270, 100%, 50%)',    // Cool accent
          'cool-600': 'hsl(270, 100%, 40%)',
          'cool-700': 'hsl(270, 100%, 30%)',
          'cool-800': 'hsl(270, 100%, 20%)',
          'cool-900': 'hsl(270, 100%, 10%)',
          
          // Warm variation (330° - Red-purple)
          'warm-50': 'hsl(330, 100%, 95%)',
          'warm-100': 'hsl(330, 100%, 90%)',
          'warm-200': 'hsl(330, 100%, 80%)',
          'warm-300': 'hsl(330, 100%, 70%)',
          'warm-400': 'hsl(330, 100%, 60%)',
          'warm-500': 'hsl(330, 100%, 50%)',    // Warm accent
          'warm-600': 'hsl(330, 100%, 40%)',
          'warm-700': 'hsl(330, 100%, 30%)',
          'warm-800': 'hsl(330, 100%, 20%)',
          'warm-900': 'hsl(330, 100%, 10%)',
        },
        
        // Surface colors - 12.5% grey base with variations
        surface: {
          'bg': 'hsl(0, 0%, 12.5%)',           // Main background
          'elevated': 'hsl(0, 0%, 16%)',       // Cards, panels
          'interactive': 'hsl(0, 0%, 20%)',    // Buttons, inputs
          'border': 'hsl(0, 0%, 25%)',         // Borders, dividers
          'muted': 'hsl(0, 0%, 30%)',          // Disabled states
        },
        
        // Edge colors - Pure black and white
        edge: {
          'black': 'hsl(0, 0%, 0%)',           // True black
          'white': 'hsl(0, 0%, 100%)',         // True white
          'soft-black': 'hsl(0, 0%, 5%)',      // Slightly softer
          'soft-white': 'hsl(0, 0%, 95%)',     // Slightly softer
        },
        
        // Text colors for proper contrast
        text: {
          'primary': 'hsl(0, 0%, 95%)',        // Main text
          'secondary': 'hsl(0, 0%, 75%)',      // Secondary text
          'muted': 'hsl(0, 0%, 55%)',          // Muted text
          'inverse': 'hsl(0, 0%, 10%)',        // Text on light backgrounds
        },

        // Legacy colors for Flowbite compatibility (will be removed later)
        primary: {
          50: 'hsl(300, 100%, 95%)',
          100: 'hsl(300, 100%, 90%)',
          200: 'hsl(300, 100%, 80%)',
          300: 'hsl(300, 100%, 70%)',
          400: 'hsl(300, 100%, 60%)',
          500: 'hsl(300, 100%, 50%)',
          600: 'hsl(300, 100%, 40%)',
          700: 'hsl(300, 100%, 30%)',
          800: 'hsl(300, 100%, 20%)',
          900: 'hsl(300, 100%, 10%)'
        },
        // Override gray with our surface colors
        gray: {
          50: 'hsl(0, 0%, 95%)',
          100: 'hsl(0, 0%, 90%)',
          200: 'hsl(0, 0%, 85%)',
          300: 'hsl(0, 0%, 75%)',
          400: 'hsl(0, 0%, 55%)',
          500: 'hsl(0, 0%, 35%)',
          600: 'hsl(0, 0%, 30%)',
          700: 'hsl(0, 0%, 25%)',
          800: 'hsl(0, 0%, 16%)',
          900: 'hsl(0, 0%, 12.5%)'
        }
      },
      
      // Custom gradients for polish
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, hsl(300, 100%, 50%) 0%, hsl(270, 100%, 50%) 100%)',
        'brand-gradient-warm': 'linear-gradient(135deg, hsl(300, 100%, 50%) 0%, hsl(330, 100%, 50%) 100%)',
        'brand-gradient-cool': 'linear-gradient(135deg, hsl(270, 100%, 50%) 0%, hsl(300, 100%, 50%) 100%)',
        'surface-gradient': 'linear-gradient(135deg, hsl(0, 0%, 12.5%) 0%, hsl(0, 0%, 16%) 100%)',
        'surface-elevated': 'linear-gradient(135deg, hsl(0, 0%, 16%) 0%, hsl(0, 0%, 20%) 100%)',
        'glow-brand': 'radial-gradient(circle at center, hsla(300, 100%, 50%, 0.3) 0%, hsla(300, 100%, 50%, 0) 70%)',
      },
      
      // Enhanced shadows with brand colors
      boxShadow: {
        'brand': '0 4px 14px 0 hsla(300, 100%, 50%, 0.25)',
        'brand-lg': '0 10px 25px -3px hsla(300, 100%, 50%, 0.3), 0 4px 6px -2px hsla(300, 100%, 50%, 0.1)',
        'glow': '0 0 20px hsla(300, 100%, 50%, 0.4), 0 0 40px hsla(300, 100%, 50%, 0.2)',
        'surface': '0 4px 14px 0 hsla(0, 0%, 0%, 0.3)',
        'surface-lg': '0 10px 25px -3px hsla(0, 0%, 0%, 0.4), 0 4px 6px -2px hsla(0, 0%, 0%, 0.2)',
      },
      
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px hsla(300, 100%, 50%, 0.4)' },
          '50%': { boxShadow: '0 0 30px hsla(300, 100%, 50%, 0.6), 0 0 40px hsla(300, 100%, 50%, 0.3)' }
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
};