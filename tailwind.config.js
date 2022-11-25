/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif", "Arial"],
        jakarta: ["Plus Jakarta Sans", "sans-serif", "Arial"],
      },
      maxHeight: {
        102: "26rem",
      },
    },
  },
  plugins: [],
};
