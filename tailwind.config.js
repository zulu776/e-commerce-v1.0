module.exports = {
  purge: {
    content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"]
    // These options are passed through directly to PurgeCSS
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#FFFFFF",
      yellow: "#F0A500",
      light_blue: "#334756",
      main_blue: "#082032",
      black: "#000000",
      dark_green:"#125C13",
      green: "#3E7C17",
      light_orange:"#F4A442",
      light_gray:"#E8E1D9"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
