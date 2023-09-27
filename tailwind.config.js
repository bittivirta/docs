/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.{md,mdx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        'primary': '#1145ca',
      }
    },
  },
  plugins: [],
};
