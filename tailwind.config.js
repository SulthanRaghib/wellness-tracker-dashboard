/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        mint: "#E8F3F1",
        sage: "#A1D1C6",
        ivory: "#FFF9E6",
        beige: "#F6D6AD",
        calmgray: "#5C6B73",
      },
    },
  },
  plugins: [],
};
