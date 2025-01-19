/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        dark: "#170202",
        darkoff: "#3F0505",
        light: "#EB2525",
        bright: "#FFFFFF",
        accent: "#FFAD05",
        shade: "#8A7E72",
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
