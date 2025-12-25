/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Adding a custom "Stray Kids" green for that academy look
        'skz-green': '#4ade80',
      }
    },
  },
  plugins: [],
}