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
        lightBlue: "#90ABE8",
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
        550: "550px",
        750: "750px",
        950: "950px",
        1100: "1100px",
      },
      padding: {
        c80: "20%",
      },
      backgroundImage: {
        "hero-pattern": "url(/assets/elements/bg-hero.svg)",
        "brille-bg": "url(/assets/elements/brille-blue-bg.svg)",
        brilleslange: "url(/dist/assets/elements/brilleslange.svg)",
        downBg: "url(/dist/assets/elements/downBg.svg)",
        rotated: "url(/dist/assets/elements/rotatedBg.svg)",
        moscot: "url(/dist/assets/elements/brands/moscot/COLLECTION_5.jpeg)",
        balloonDog: "url(/dist/assets/elements/balloon-sale.jpg)",
      },
      rotate: {
        150: "150deg",
        20: "20deg",
      },
    },
  },
  plugins: [],
};
