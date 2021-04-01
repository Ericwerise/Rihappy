/* eslint-disable functional/immutable-data */
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ...colors,
      green: {
        ...colors.green,
        light: '#15C52A',
        theme: '#B7DB9B',
      },
      yellow: {
        ...colors.yellow,
        light: '#FFEB95',
        orange: '#FBB383',
        theme: '#FFEB95',
      },
      blue: {
        ...colors.blue,
        light: '#9DF9F9',
        cyan: '#E4F9FF',
      },
      purple: {
        ...colors.purple,
        theme: '#A698C9',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
