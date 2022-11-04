const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    screens: {
      '3xl': {'max': '21250px'},
         // => @media (max-width: 1535px) { ... } 
        
      '2xl': {'max': '1640px'},
        // => @media (max-width: 1535px) { ... } 
  
      'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
      'lg': {'max': '1024px'},
      // => @media (max-width: 1023px) { ... }
  
      'md': {'max': '768px'},
      // => @media (max-width: 767px) { ... }
  
      'sm': {'max': '640px'},
      // => @media (max-width: 639px) { ... }
  
      'ms': {'max': '425px'},
      // => @media (max-width: 639px) { ... }
  
      'xs': {'max': '375px'},
      // => @media (max-width: 639px) { ... }
      },
    extend: {
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
      spacing: {
        88: '22rem',
      },
    },
  },
  plugins: [],
};