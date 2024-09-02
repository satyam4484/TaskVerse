/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const { default: daisyui } = require('daisyui');
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },

  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  
})