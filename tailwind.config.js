/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Lexend"', 'sans-serif'],
      }
    },
    screens: {
      'esm': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px', 
    }
  },
  plugins: [],
}