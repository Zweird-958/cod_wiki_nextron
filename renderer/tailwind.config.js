/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./renderer/pages/**/*.{js,ts,jsx,tsx}",
    "./renderer/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // use colors only specified
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
    },
    extend: {
      backgroundImage: {
        iw: "url('../public/images/iw.jpg')",
        spaceland: "url('../public/images/spaceland.jpg')",
      },
      colors: { "dark-blue": "#111827" },
    },
  },
  plugins: [],
}
