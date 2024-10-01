/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scans all JSX/TSX files for Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [], // Keep this as an array for future Tailwind plugins
};
