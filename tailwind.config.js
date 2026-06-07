const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./content/**/*.md"],
  theme: {
    extend: {
      colors: {
        // theme: nord
        // bg: "#212830",
        bg: "#f4f3ef",
        "bg-light": "#3b4252",

        // nord: Snow storm
        // text: "#e5e9f0",
        text: "#000000",

        accent: "#db2219", // primary
        "accent-text": "#2e3440",
        border: "#4c566a",
        link: "#ae1912", // primary-1

        // nord: frost
        primary: "#db2219",
        "primary-2": "#88c0d0",
        secondary: "#81a1c1",
        terciary: "#5e81ac",
      },
      fontFamily: {
        // sans: ['"MPLUS1"', ...defaultTheme.fontFamily.sans],
        title: ['"Inter"', ...defaultTheme.fontFamily.sans],
        mono: ['"Inter"', ...defaultTheme.fontFamily.sans],
        serif: ['"SourceSerif4"'],
      },
    },
  },
  plugins: [],
};
