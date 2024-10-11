/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'wtf': '#557788'
      },
      fontFamily: {
        'poppin': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}