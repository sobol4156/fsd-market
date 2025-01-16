/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        min_sm:{min: '576px'},
        sm: { max: '576px' },
        min_md: {min : '768px'},
        md: { max: '768px' },
        min_big: { min: '1023px' },
        big: { max: '1023px' },
        lg: { max: '1439px' },
        min_lg: { min: '1439px' },
        xl: { max: '1600px' },
        '2xl': { max: '1920px' }
      },
    },
  },
  plugins: [],
}
