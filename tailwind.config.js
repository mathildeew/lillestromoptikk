/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  theme: {
    extend: {
      colors: {
        primary: "#ACC3FF",
        grey: "#EFEFEF",
      },
      fontFamily: {
        sans: ["Open Sans, Arial, Tahoma, sans-serif"],
      },
      fontSize: {
        home: "10vh",
      },
      rotate: {
        150: "150deg",
        20: "20deg",
      },
    },
  },
  plugins: [],
};
