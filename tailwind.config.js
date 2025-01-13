/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PT Sans", "sans-serif"],
        bebas: ['"Bebas Neue"', "sans-serif"],
      },
      backgroundImage: {
        gradient: "linear-gradient(to bottom, #3877EE, #EF5DA8)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".gradient-left-border": {
          pl: "78px", // p-5
          "border-left-width": "5px", // border-l-4
          "border-left-color": "transparent",
          "border-image": "linear-gradient(to bottom, #3877EE, #EF5DA8)",
          "border-image-slice": "1",
        },
      });
    },
    function ({ addUtilities }) {
      addUtilities({
        ".before-gradient": {
          content: "",
          position: "absolute",
          top: "177px",
          left: "0px",
          width: "5px",
          height: "120px",
          background: "linear-gradient(to bottom, #3877EE, #EF5DA8)",
        },
      });
    },
  ],
};
