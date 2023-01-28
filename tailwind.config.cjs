/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        main: "#242424",
      },
      minWidth: {
        conversationInput: "24em",
      },
    },
  },
  plugins: [],
};
