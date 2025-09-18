/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // <- important to include all react files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
