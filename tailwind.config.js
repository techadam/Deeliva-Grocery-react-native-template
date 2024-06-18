/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "off-white": {
          DEFAULT: "#E3E3E3",
        },
        dark: {
          DEFAULT: "#1C1C1E",
        },
        "soft-dark": {
          DEFAULT: "#2A2A2F",
        },
        primary: {
          DEFAULT: "#027334",
          light: "#c8eed9",
        },
        grey1: "#e6eef2",
        grey2: "#fefffe",
        grey3: "#a2aec2",
        grey4: "#7c8faa",
        darK: "#1A1A1A",
        secondary: {
          DEFAULT: "#00ccff",
          dark: "#3eb9d3",
        },
      },
      fontFamily: {
        rbregular: ["Roboto-Regular", "sans-serif"],
        rblight: ["Roboto-Light", "sans-serif"],
        rbmedium: ["Roboto-Medium", "sans-serif"],
        rbbold: ["Roboto-Bold", "sans-serif"],
        rbblack: ["Roboto-Black", "sans-serif"],
        rbitalic: ["Roboto-Italic", "sans-serif"],
        rbitalicbold: ["Roboto-BoldItalic", "sans-serif"],
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
