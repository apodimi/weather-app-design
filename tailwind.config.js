/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        gold: "#EACA8F",
      },
      backgroundImage: {
        "blue-sky":
          "url('./assets/layout/blue-sky-with-windy-clouds-background.png')",
        "air-mount": "url('./assets/images/air-background.svg')",
      },
      backgroundPosition: {
        "center-bottom-39": "center bottom 39px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
