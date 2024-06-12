/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ce5ff8',
        'secondary': '#091724'
      }
    },
  },
  plugins: [require("daisyui")],
}