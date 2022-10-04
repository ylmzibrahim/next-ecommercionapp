const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: '#FB2E86',
        red: '#FB2448', // Price Tag
        blue: '#2F1AC4', // Section Hover
        'off-blue': '#151875', // Text
        'off-navy-blue': '#3F509E',
        'sky-blue': '#F6F6FD',
        'sky-blue-bottom': '#F1F0FF',
        'sky-blue-top': '#F3F9FF',
        purple: '#7E33E0', // Violet
        'pantone-purple': '#E0D3F5', // Ugsadug
        'off-purple': '#9F63B5',
        'footer-section': '#EEEFFB',
        'copyright-bar': '#E7E4F8',
        'sub-text': '#8A8FB9',
        'copyright-text': '#9DA0AE',
      },
    },
    fontFamily: {
      'josefinsans-300': ['JosefinSans-Light', 'cursive'],
      'josefinsans-400': ['JosefinSans-Regular', 'cursive'],
      'josefinsans-500': ['JosefinSans-Medium', 'cursive'],
      'josefinsans-600': ['JosefinSans-SemiBold', 'cursive'],
      'josefinsans-700': ['JosefinSans-Bold', 'cursive'],
      'lato-400': ['Lato-Regular', 'cursive'],
      ...defaultTheme.fontFamily,
    },
    screens: {
      screen: '1180px',
      xs: { max: '1176px' },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
