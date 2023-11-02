/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  theme: {
    extend: {
      colors: {
        primary: "#D4ECDC",
        secondary: "#1C3400",
      },
      fontFamily: {
        sans: ["Open Sans, Arial, Tahoma, sans-serif"],
      },
      fontSize: {
        home: "10vh",
      },
    },
  },
  plugins: [],
};
