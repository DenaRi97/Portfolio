/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui", 'tailwindcss-animated')],
  colors: {
  },
  backgroundImage: { 'bg': '#831D1E',
  }
}