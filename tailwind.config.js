const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        darkBrown: '#341302',
        mediumBrown: '#4F2A06',
        lightBrown: '#84563D',
        darkBeige: '#C4B9AB',
        lightBeige: '#EDDECB',
        ivory: '#FDFCFA',
      },
      borderRadius: {
        xl: '2rem',
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
