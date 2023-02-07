/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Lexend", "Arial", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      fontSize: {
        h1: "3rem",
        h2: "2.6rem",
        h3: "2rem",
        h4: "1.44rem",
        body: "1.05rem",
      },
    },
  },
  plugins: [],
}
