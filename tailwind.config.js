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
      fontFamily: {
        primary: ['Ubuntu'],
      },
      colors: {
        primary: '#14293E',
        secondary: '#026495',
        ascent: '#1D99E1',
        text: '#E8F2F4',
      },
    },
  },
  plugins: [],
}
