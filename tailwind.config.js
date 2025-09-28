/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#121212',
        gold: '#FFD700',
        lightgray: '#E0E0E0',
        darkgray: '#1A1A1A',
      },
      fontFamily: {
        body: ["var(--font-inter"],
        display: ["var(--font-playfair"],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
