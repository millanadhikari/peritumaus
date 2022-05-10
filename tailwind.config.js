const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./public",
  ],
  theme: {
    extend: {
      // backgroundImage:  {
      //   'hero-pattern': "url('/krishna.jpg')"},
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
      }
    },
  },
  plugins: [],
}
