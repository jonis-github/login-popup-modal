/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{jsx,js}" ], 
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: { 
        dancing: [ "Dancing Script", "cursive" ],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem"
        }
      }
    },
  },
  plugins: [],
}

