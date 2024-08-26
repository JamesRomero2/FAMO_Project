/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pri': '#780000',
        'sec': '#FFD700',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Replace default sans font with Inter
      },
    },
  },
  plugins: [],
}
