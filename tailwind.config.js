/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "body-black": "var(--bodybg)",
        yellow: "var(--yellow)",
        brandClr: "var(--brandClr)",
        orange: "var(--orange)",
      },
    },
  },
  plugins: [],
};
