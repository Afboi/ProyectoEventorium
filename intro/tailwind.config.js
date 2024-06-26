/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  darkMode: 'selector',
  theme: {
    backgroundImage: theme => ({
    'bg-gradient-linear-light': 'linear-gradient(90deg, rgba(205,218,237,1) 0%, rgba(213,224,223,1) 32%, rgba(231,238,222,1) 63%);',
   }),
    fontFamily: {
      'main': 'Outfit, sans-serif',
      'secondary': 'Open Sans, sans-serif',
    },
    boxShadow: {
      'main': '0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1)', 
      'secondary': '0 3px 10px rgb(0,0,0,0.2);',	
    },
    colors: {
      'black': 'rgba(0, 0, 0, 1)',
      'teal' : 'rgb(45 212 191);',
      'gray': 'rgb(255, 255, 255)',
      'white': 'rgba(254, 255, 255, 1)',

      'blue': 'rgba(52, 121, 142, 1)',
      'green': 'rgba(1, 139, 138, 1)',
      'light-gray': 'rgba(239, 237, 250, 1)',
      'bone': 'rgba(241, 242, 245, 1)',

      /*Dark Mode*/
        'darker-blue': '#2D3250',
        'dark-blue': '#424669',
        'not-so-dark-blue': '#676F9D',

        'orange': '#F8B179',
      /*Dark Mode*/

      'bg-main': '#D8E5F2',
      'bg-main-component': '#F3F7FB',
      'bg-main-card': '#F3F7FB',
      
      'bg-card-light': 'rgba(254, 255, 255, 1)',

      'component-light': 'rgba(255, 255, 255, 0.38)', 
      'light-orange': 'rgba(248, 177, 121, 1)',

      'main-ty-light': 'rgba(110, 110, 110, 1)',
      'red-btn-light': 'rgba(253, 131, 144, 1)',
    },
    
    fontSize:{
      'xl': '6.25rem', /* 100px*/
      'lg': '2.125rem', /* 50px*/
      'lg-sm': '2rem', /* 50px*/
      'md-xl': '1.75rem',/* 30px*/
      'md': '1.375rem',/* 22px*/
      'sm': '1.25rem', /* 20px*/
      'xs': '0.89rem', /* 12px */
      'vw': '5vw',
      'vh': '5vh',
    },

    extend: {
      colors:{
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      }
    },
  },
  plugins: [],
}


