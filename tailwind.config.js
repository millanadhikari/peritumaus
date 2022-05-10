const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./public",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80')",
        
       },
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
      }
    },
  },
  plugins: [],
}
