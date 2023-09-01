/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "near-black": "hsl(0, 0%, 8%)",
        "off-white": "hsl(0, 0%, 98%)",
        "medium-gray": "hsl(0, 0%, 41%)",
      },
      screens: {
        "max-sm": { max: "767px" },
        "md-lg": {
          min: "767px", // Minimum width
          max: "1023px", // Maximum width
        },
      },
    },
  },
  plugins: [],
};
