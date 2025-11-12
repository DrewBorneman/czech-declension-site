/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-bluegray': '#A6AEBF',
        'theme-lightblue': '#C5D3E8',
        'theme-lightgreen': '#D0E8C5',
        'theme-lightyellow': '#FFF8DE',
        'theme-lightred': '#E8C5D3',
        'theme-darkergreen': '#C5E8C8',
      }
    },
  },
  plugins: [],
}

