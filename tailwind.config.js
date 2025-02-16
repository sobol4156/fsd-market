/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/*.{vue,js,ts}",
    "./shareds/**/*.vue",
    "./widgets/**/*.vue",
    "./features/**/*.vue",
    "./entities/**/*.vue",
    "./pages/**/*.vue",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {
      screens: {
        min_sm: { min: "576px" },
        sm: { max: "576px" },
        min_md: { min: "768px" },
        md: { max: "768px" },
        min_big: { min: "1023px" },
        big: { max: "1023px" },
        lg: { max: "1439px" },
        min_lg: { min: "1439px" },
        xl: { max: "1600px" },
        "2xl": { max: "1920px" }
      },
      fontSize: {
        large: '64px',
        prelarge: '56px',
        '3xl': '32px',
        '2xl': '24px',
        xl: '20px',
        big: '18px',
        medium: '16px',
        base: '14px',
        small: '12px',
        ultrasmall: '11px'
      },
      lineHeight: {
        1: '105%',
        2: '115%',
        3: '125%',
        p: '135%'
      },
    }
  },
  plugins: []
};
