/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundColor: {
      primary: "#191A1F",
      secondary: "#252831",
      therd: "#fca311",
      gray: "#e5e5e5",
      white: "#eee",
    },
    colors: {
      primary: "#000000",
      secondary: "#14213d",
      therd: "#fca311",
      gray: "#e5e5e5",
      white: "#eee",
    },
  },
  plugins: [],
};
