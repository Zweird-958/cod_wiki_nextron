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
        iw: "url('../public/images/iw/cover.jpg')",
        spaceland: "url('../public/images/iw/spaceland/cover.jpg')",
      },
      colors: { "dark-blue": "#111827" },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
