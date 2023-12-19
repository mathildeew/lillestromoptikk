/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  theme: {
    extend: {
      colors: {
        primary: "#ACC3FF",
        grey: "#EFEFEF",
        kleinBlue: "#1F1BBD",
        darkBlue: "#221896",
      },
      fontFamily: {
        sans: ["Open Sans, Arial, Tahoma, sans-serif"],
        heading: ["neue-haas-grotesk-display, sans-serif;"],
      },
      fontSize: {
        home: "10vh",
      },
      width: {
        400: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url(/assets/elements/bg-hero.svg)",
        "brille-bg": "url(/assets/elements/brille-blue-bg.svg)",
        brilleslange: "url(/dist/assets/elements/brilleslange.svg)",
      },
      rotate: {
        150: "150deg",
        20: "20deg",
      },
    },
  },
  plugins: [],
};
