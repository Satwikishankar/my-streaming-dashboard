/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "brand-red": "#e50914",
        "brand-dark": "#141414"
      },
      boxShadow: {
        poster: "0 10px 30px rgba(0,0,0,0.35)"
      },
      backgroundImage: {
        "gradient-overlay": "linear-gradient(180deg, rgba(20,20,20,0) 0%, rgba(20,20,20,0.9) 90%)"
      }
    }
  },
  plugins: []
};


