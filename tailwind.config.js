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
      },
      fontFamily: {
        sans: ["Open Sans, Arial, Tahoma, sans-serif"],
        heading: ["neue-haas-grotesk-display, sans-serif;"],
      },

      width: {
        550: "550px",
        750: "750px",
        950: "950px",
        1100: "1100px",
      },

      animation: {
        sale: "saleCTA 4s linear infinite",
        salePercent: "salePerc 4s linear infinite",
      },
      keyframes: {
        saleCTA: {
          "0%": { fontSize: "7vw", top: "5%", zIndex: "30" },
          "25%": { fontSize: "12vw", zIndex: "30" },
          "50%": { fontSize: "7.5vw", top: "65%", zIndex: "10" },
          "75%": { fontSize: "4vw", zIndez: "10" },
          "100%": { fontSize: "7vw", top: "5%", zIndex: "10" },
        },
        salePerc: {
          "0%": { fontSize: "6.5vw", top: "65%", zIndex: "10" },
          "25%": { fontSize: "3vw", zIndex: "10" },
          "50%": { fontSize: "6vw", top: "5%", zIndex: "30" },
          "75%": { fontSize: "11vw", zIndex: "30" },
          "100%": { fontSize: "6.5vw", top: "65%", zIndex: "10" },
        },
      },
    },
  },
  plugins: [],
};
