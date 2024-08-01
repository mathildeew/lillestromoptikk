/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  theme: {
    extend: {
      colors: {
        grey: "#EFEFEF",
        green361: "#43B02A",
        darkBlue: "#221896",
        lightBlue: "#90ABE8",
      },
      fontFamily: {
        sans: ["Open Sans, Arial, Tahoma, sans-serif"],
        heading: ["tablet-gothic, sans-serif"],
      },
      gridTemplateColumns: {
        news: "repeat(10, minmax(85%, 1fr))",
      },
      screens: {
        gridExpand: "600px",
      },
    },
  },
  plugins: [],
};
