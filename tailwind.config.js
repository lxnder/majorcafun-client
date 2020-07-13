module.exports = {
  purge: ["./components/**/*.js", "./pages/*.js"],
  theme: {
    extend: {
      zIndex: {
        n1: "-1",
      },
      scale: {
        "102": "1.025",
      },
      backgroundOpacity: {
        "95": "0.95",
        "90": "0.90",
        "85": "0.85",
        "80": "0.80",
      },
      fontFamily: {
        sans: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
        serif: ["'Suez One'", "Georgia", "Cambria"],
      },
      inset: {
        "1": "1rem",
        "2": "2rem",
        "3": "3rem",
        "4": "4rem",
        "5": "5rem",
        "6": "6rem",
      },
      width: {
        "90%": "90%",
        "95%": "95%",
        quarter: "25%",
        third: "33%",
        half: "50%",
      },
      height: {
        "90%": "90%",
        "95%": "95%",
        "66%": "66.66666%",
        quarter: "25%",
        third: "33.33333%",
        half: "50%",
        "11/12": "91%",
      },
      margin: {
        "5%": "5%",
        "2.5%": "2.5%",
        "10%": "10%",
      },
    },
  },
  variants: {},
  plugins: [],
};
