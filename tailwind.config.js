/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables dark mode (via class strategy)
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
