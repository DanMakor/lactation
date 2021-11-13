const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      rose: {
        DEFAULT: '#FAE7D0',
        dark: '#F29999'
      },
      grey: colors.trueGray,
      white: colors.white
    },
    extend: {
      fontFamily: {
        serif: [
          'Work Sans',
          ...defaultTheme.fontFamily.serif
        ],
        heading: [
          'Montserrat',
          ...defaultTheme.fontFamily.serif
        ]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
