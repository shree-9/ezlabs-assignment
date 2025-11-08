/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#E53935",
          dark: "#B71C1C",
          light: "#FFCDD2",
        },
      },
    },
  },
  plugins: [],
};
