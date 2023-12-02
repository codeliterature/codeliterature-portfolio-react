/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "customColor": "#40f8ff",
        "primaryColor": "#38bdf8"
      }
    },
  },
  plugins: [],
}