// tailwind.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      keyframes: {
        flicker: {
          "0%, 18%, 22%, 25%, 53%, 57%, 100%": {
            opacity: "1",
            filter:
              "drop-shadow(0 0 2px #fff) drop-shadow(0 0 5px #0ff) drop-shadow(0 0 10px #0ff)",
          },
          "20%, 24%, 55%": {
            opacity: "0.4",
            filter: "none",
          },
        },
      },
      animation: {
        flicker: "flicker 2s infinite",
      },
    },
  },
  plugins: [],
};
