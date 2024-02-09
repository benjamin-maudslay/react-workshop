/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sykes-blue": { DEFAULT: "#006cff", light: "#3389ff" },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
