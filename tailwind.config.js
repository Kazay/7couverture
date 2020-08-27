// remove unused css
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    fontFamily: {
      serif: ['Prata', ...defaultTheme.fontFamily.serif],
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      mono: [...defaultTheme.fontFamily.mono]
    },
    boxShadow: {
      right:
        '5px 0 0 rgba(0,0,0,0.14), 1px 0 0 rgba(0,0,0,0.12), 3px 0 0 rgba(0,0,0,0.2)',
      bottom:
        '0 5px 0 rgba(0,0,0,0.14), 0 1px 0 rgba(0,0,0,0.12), 0 3px 0 rgba(0,0,0,0.2)',
      ...defaultTheme.boxShadow
    },
    screens: {
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' }
    }
  },
  purge: ['./pages/**/*.js', './components/**/*.js']
};
