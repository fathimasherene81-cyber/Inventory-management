/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f0f6ff",
          100: "#d9e6ff",
          200: "#b0ccff",
          300: "#80aaff",
          400: "#4d88ff",
          500: "#1a66ff",   // main blue
          600: "#004de6",
          700: "#003bb3",
          800: "#002b80",
          900: "#001a4d",
        },
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
}
