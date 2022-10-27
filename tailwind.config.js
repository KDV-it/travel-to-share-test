/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sansation: ["Sansation", "sans-serif"],
      },
    },
    colors: {
      'brand-color': '#427898',
      'brand-color-2': '#b4d1fa',
      'white': '#fff',
    },
    plugins: [],
  }
}