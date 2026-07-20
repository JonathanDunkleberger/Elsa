/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          DEFAULT: "#2E2A32",
          light: "#4A4550",
          muted: "#6B6570",
          faint: "#8A8490",
        },
        cream: {
          DEFAULT: "#F4F1ED",
          dark: "#E8E4DE",
          light: "#FAF8F5",
        },
        slate: {
          blue: "#6B7FA3",
        },
      },
      fontFamily: {
        serif: ["var(--font-garamond)", "Georgia", '"Times New Roman"', "serif"],
        sans: ['"Helvetica Neue"', "Arial", "sans-serif"],
      },
      letterSpacing: {
        display: "0.08em",
        label: "0.18em",
        subtle: "0.02em",
        fine: "0.12em",
      },
    },
  },
  plugins: [],
};
