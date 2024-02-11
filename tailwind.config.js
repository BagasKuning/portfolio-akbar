/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      opacity: {
        '98': '.98',
      },
      grayscale: {
        50: '50%',
        85: '85%',
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

