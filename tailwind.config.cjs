/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      glitch: '#ff00ff',
      white: '#ffffff',
      black: '#000000',
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      orange: {
        100: '#fffaf0',
        200: '#feebc8',
        300: '#fbd38d',
        400: '#f6ad55',
        500: '#ed8936',
        600: '#dd6b20',
        700: '#c05621',
        800: '#9c4221',
        900: '#7b341e',
      },
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    mytheme: {

      "primary": "#cab3f9",

      "secondary": "#c60cf4",

      "accent": "#0f1cad",

      "neutral": "#272E3A",

      "base-100": "#452B55",

      "info": "#3159ED",

      "success": "#1B8D7E",

      "warning": "#F0C46A",

      "error": "#FC5566",
    },
  },
};