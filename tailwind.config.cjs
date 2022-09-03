/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundColor: {
      Headers: "#202020",
      primary: "#181818",
      white: "#eee",
      searchIcon: "#5D5D5D",
    },
  },
  plugins: [],
};
