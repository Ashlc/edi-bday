/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern': "url('./src/assets/pattern.svg')",
      },
      colors: {
        "primary": "#FFD6E8",
        "secondary": {
          100: "#C69274",
          200: "#946756",
          300: "#352626"
        }
      },
      textColor: {
        "primary": "#FFD6E8",
        "secondary": {
          100: "#C69274",
          200: "#946756",
          300: "#352626"
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

