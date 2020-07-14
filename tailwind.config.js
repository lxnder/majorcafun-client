module.exports = {
  purge: ["./components/**/*.js", "./pages/*.js"],
  theme: {
    extend: {
      colors: {
        clear: {
          10: "rgba(255, 255, 255, 0.10)",
          15: "rgba(255, 255, 255, 0.15)",
          20: "rgba(255, 255, 255, 0.20)",
          25: "rgba(255, 255, 255, 0.25)",
          30: "rgba(255, 255, 255, 0.30)",
          35: "rgba(255, 255, 255, 0.35)",
          40: "rgba(255, 255, 255, 0.40)",
          45: "rgba(255, 255, 255, 0.45)",
          50: "rgba(255, 255, 255, 0.50)",
          55: "rgba(255, 255, 255, 0.55)",
          60: "rgba(255, 255, 255, 0.6)",
          65: "rgba(255, 255, 255, 0.65)",
          70: "rgba(255, 255, 255, 0.7)",
          75: "rgba(255, 255, 255, 0.75)",
          80: "rgba(255, 255, 255, 0.8)",
          85: "rgba(255, 255, 255, 0.85)",
          90: "rgba(255, 255, 255, 0.9)",
          95: "rgba(255, 255, 255, 0.95)",
          96: "rgba(255, 255, 255, 0.96)",
          97: "rgba(255, 255, 255, 0.97)",
          98: "rgba(255, 255, 255, 0.98)",
          99: "rgba(255, 255, 255, 0.99)",
        },
      },
      zIndex: {
        n1: "-1",
        n2: "-2",
        n3: "-3",
        n4: "-4",
        n5: "-5",
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
        sans: ["Helvetica", "Arial", "sans-serif"],
        quicksand: ["Quicksand", "Arial", "sans-serif"],
        muli: ["Muli", "Arial", "sans-serif"],
        montserrat: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
        baloo: ["'Baloo Da 2'", "cursive"],
        caveat: ["Caveat", "cursive"],
        josefin: ["'Josefin Slab'", "serif"],
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
