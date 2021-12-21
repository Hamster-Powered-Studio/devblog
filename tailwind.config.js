const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        discord_primary: "#202225",
        discord_secondary: "#5865f2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
