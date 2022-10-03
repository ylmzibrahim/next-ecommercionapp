const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "pink": "#FB2E86",
      "red": "#FB2448", // Price Tag
      "blue": "#2F1AC4", // Section Hover
      "off-blue": "#151875", // Text
      "off-navy-blue": "#3F509E",
      "sky-blue": "#F6F5FF", // Sub Text
      "purple": "#7E33E0", // Violet
      "pantone-purple": "#E0D3F5", // Ugsadug
      "off-purple": "#9F63B5",
    },
    fontFamily: {
      "josefinsans-400": ["JosefinSans-Regular", "cursive"],
      "lato-400": ["Lato-Regular", "cursive"],
      ...defaultTheme.fontFamily,
    },
    screens: {
      // xs: { max: "1024px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
