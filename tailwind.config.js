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
          DEFAULT: "#3B2A4A",
          light: "#5A4A6A",
          muted: "#7A6B8A",
          faint: "#9A8BA8",
        },
        cream: {
          DEFAULT: "#F4EDE4",
          dark: "#E8DFD3",
          light: "#FAF7F3",
        },
        slate: {
          blue: "#6B7FA3",
        },
      },
      fontFamily: {
        serif: ['"EB Garamond"', "Georgia", '"Times New Roman"', "serif"],
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
