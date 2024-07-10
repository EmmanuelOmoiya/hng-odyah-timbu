/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mregular: ["MonumentRegular", "sans-serif"],
        abold: ["MonumentUltraBold", "sans-serif"],
      },
    },
  },
  plugins: [],
}
