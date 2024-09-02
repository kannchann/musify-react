/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryDark: "#070606",
        primaryPurple: "hsla(271, 89%, 21%, 1)",
        primaryBlue: "hsla(219, 49%, 41%, 1)",
        primaryOrange: "hsla(14, 89%, 52%, 1)",
        primaryYellow: "hsla(34, 97%, 54%, 1)",
        textGrey: "#A4A4A4",
        textHighlight: "#FC9918",
      },
      fontFamily: {
        figTree: ["Figtree", "sans-serif"],
      },
      variants: {
        fill: ["hover", "focus"],
      },
    },
  },
  plugins: [],
};
