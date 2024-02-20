/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  theme: {
    extend: {
      colors: {
        grey: "#EFEFEF",
        kleinBlue: "#1F1BBD",
        darkBlue: "#221896",
        lightBlue: "#90ABE8",
        placeholder: "#949aa1",
      },
      fontFamily: {
        sans: ["Open Sans, Arial, Tahoma, sans-serif"],
        heading: ["neue-haas-grotesk-display, sans-serif;"],
      },
    },
  },
  plugins: [],
};
