/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./renderer/pages/**/*.{js,ts,jsx,tsx}",
    "./renderer/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        iw: "url('../public/images/iw/cover.jpg')",
        spaceland: "url('../public/images/iw/spaceland/cover.jpg')",
      },
      colors: { "gray-opacity": "rgba(31, 41, 55, 0.54)" },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
