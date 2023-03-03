/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      brand: ["'Marck Script'", "sans-serif"],
    },
    extend: {
      colors: {
        brand: "#744210",
      },
      backgroundColor: {
        brand: "#744210",
      },
    },
  },
  plugins: [],
};
