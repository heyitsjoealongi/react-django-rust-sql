/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        dark: "#0C090D",
        darkoff: "#0A080B",
        light: "#003F88",
        bright: "#DAD2D8",
        accent: "#90E0EF",
        shade: "#473198",
      },
      fontFamily: {
        slab: ['"Roboto Slab"'],
        roboto: ['"Roboto"'],
      },
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
