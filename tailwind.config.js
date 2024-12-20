/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,css}',
    './public/index.html',
  ],
  theme: {
    extend: {
      screens: {
        custom: '1024px',
      },
      maxWidth:{
        '1440': '1440px',
      },
      fontFamily: {
        'Pacifico': "Pacifico"
      },
      colors:{
        'custom-light': '#f6fafd',
      },
      borderRadius:{
        'gentle-rounded': '100%',
        'sharp-rounded': '800%',
      },
      height:{
        'custom-height': '1000px'
      },
      width:{
        'custom-width': '900px'
      },
      rotate:{
        'custom-rotate': '25deg'
      },
      boxShadow: {
        'deep-shadow': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      },

    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
        },
      });
    },
  ],
}

