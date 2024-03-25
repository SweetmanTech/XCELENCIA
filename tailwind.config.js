/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        hedvig: ["Hedvig Regular", "sans-serif"],
        madeoutersans_bold: ["MADE Outer Sans Bold", "sans-serif"],
        copihuew05semi_bold_italic: ["copihue-w05-semi-bold-italic", "sans-serif"],
        poppins_italic: ['Poppins-Italic', "sans-serif"]
      },
      backgroundImage: {
        gradient_1: 'linear-gradient(270deg, rgba(255, 68, 43, 1) -0.02%, rgba(255, 106, 43, 1) 100.01%)',
      },
      screens: {
        ios : '320px',
        samsungS8: "360px",
        xs: '390px',
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xls": "1350px",
        "2xl":'1440px',
        "3xl": "1920px",
      },
      colors: {
        white: '#ffffff',
        black: '#000000',
        pink: "#4c248b",
        gray: "#e4e7f0"
      },
    },
    boxShadow: {
    }
  },
  variants: {
    extend: {
      display: ["dark"],
    },
  },
  darkMode: ["class"],
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    // ...
  ],
}
