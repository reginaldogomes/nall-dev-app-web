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
          100: '#C9CCDE',
          200: '#969BC0',
          300: '#60689F',
          400: '#41476C',
          500: '#212437',
          600: '#1B1D2D',
          700: '#131520',
          800: '#0D0F16',
          900: '#06060A',
        },
        secondary: {
          100: '#CCCEE0',
          200: '#969AC0',
          300: '#6368A1',
          400: '#43476F',
          500: '#23253A',
          600: '#1D1E30',
          700: '#151623',
          800: '#0D0E16',
          900: '#08080D',
        },
        ascent: {
          100: '#FFDBDE',
          200: '#FFB8BC',
          300: '#FF949B',
          400: '#FF707A',
          500: '#FF4B57',
          600: '#FF0A1B',
          700: '#C7000D',
          800: '#850009',
          900: '#420004',
        },
      },
    },
  },
  plugins: [],
}
