/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const scrollbarHide = require("tailwind-scrollbar-hide");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ["sans"]: [
          "Poppins",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      screens: {
        sm: "50px",
        md: "550px",
        tab: "928px",
      },
      colors: {
        primary: {
          brand: "#282F3C",
          hover: "#282F3C",
        },
        secondary: "#3F4450",
      },
    },
  },
  plugins: [scrollbarHide],
};
