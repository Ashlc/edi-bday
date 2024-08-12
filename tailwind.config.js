/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        base: '256px'
      },
      colors: {
        "primary": "#FC9FBC",
        "secondary": {
          100: "#FEDCD3",
          200: "#FAB2B5",
          300: "#560B22"
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

