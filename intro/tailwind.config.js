/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: theme => ({
      'bg-gradient-linear-light': 'linear-gradient(90deg, rgba(205,218,237,1) 0%, rgba(213,224,223,1) 32%, rgba(231,238,222,1) 63%);',
   }),
    fontFamily: {
      'main': 'Outfit, sans-serif',
      'secondary': 'Open Sans, sans-serif',
    },
    colors: {


      'bg-gradient-linear-light': 'linear-gradient(90deg, rgba(205,218,237,1) 0%, rgba(213,224,223,1) 32%, rgba(231,238,222,1) 63%);',
      
      'white': 'rgba(255, 255, 255, 1)',

      'main': 'rgba(45, 50, 80, 1)',

      'light-orange': 'rgba(248, 177, 121, 1)',

      'main-ty-light': 'rgba(110, 110, 110, 1)',
      'red-btn-light': 'rgba(253, 131, 144, 1)',

    },
    fontSize:{
      'xl': '6.25rem', /* 100px*/
      'lg': '3.125rem', /* 50px*/
      'md': '1.375rem',/* 22px*/
      'sm': '1.25rem', /* 20px*/
    },
    extend: {},
  },
  plugins: [],
}

