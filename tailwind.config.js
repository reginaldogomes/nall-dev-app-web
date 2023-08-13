/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#C9D4E8',
          200: '#94A9D1',
          300: '#5E7EBA',
          400: '#3D5A8F',
          500: '#263859',
          600: '#1E2D48',
          700: '#172236',
          800: '#0F1624',
          900: '#080B12',
        },
        secondary: {
          100: '#C1CCE7',
          200: '#8299CE',
          300: '#4869B7',
          400: '#2F4579',
          500: '#17223B',
          600: '#131B30',
          700: '#0E1525',
          800: '#090D16',
          900: '#04060B',
        },
        ascent: {
          100: '#FFE0E0',
          200: '#FFC2C2',
          300: '#FFA3A3',
          400: '#FF8585',
          500: '#FF6768',
          600: '#FF1F1F',
          700: '#D60000',
          800: '#8F0000',
          900: '#470000',
        },
      },
    },
  },
  plugins: [],
}
