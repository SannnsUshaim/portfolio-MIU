/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    container : {
      center : true,
      padding : '16px',
    },
    extend: {
      colors: {
        primary: '#3876BF',
        secondary: '#E1AA74',
        dark: '#192655',
        light: '#F3F0CA',
        lighter: '#FCE09B',
        darker: '#132043',
        darken: '#1F4172'
      },
      screens : {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}

