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
        // Custom Arco Energy colors - assuming a premium palette
        primary: {
          50: '#fefce8',
          100: '#fdf9c2',
          200: '#fcf08a',
          300: '#fae047',
          400: '#facc15',
          500: '#eab308', // Gold/Yellowish
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        secondary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490', // Cyan/Blueish for oil/tech feel
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
