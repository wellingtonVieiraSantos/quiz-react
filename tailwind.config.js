/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'dotGhotic16': ['DotGothic16', 'sans-serif'],
        'RockSalt': ['"Rock Salt"', 'cursive'],
        'bungee': ['Bungee', 'cursive'],
      },
      boxShadow:{
        'main': '5px 5px 0 black'
      },
      keyframes:{
        choice:{
        '0%, 50%, 100%': {opacity: '1'},
        '25%, 75%': {opacity: '.5'}
        }
      },
      animation:{
        choice: 'choice .5s linear'
      }
    },
  },
  plugins: [],
}

