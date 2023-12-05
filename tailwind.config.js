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
        primary: { DEFAULT: '#1145ca', 50: '#F8F9FC', 100: '#ECEEF4', 200: '#DBDEE6', 300: '#BBC6E3', 400: '#1854EC', 500: '#1145ca', 600: '#0D3396', 700: '#082263', 800: '#1d274b', 900: '#051a2e' },
        accent: "#143a9b",
        obsidian: "#051a2e",
        argon: "#f8fafc",
        pixel: "#1e3449",
        cloud: "#d8e7f3",
        info: "#4488e2",
        success: "#0cc46b",
        warning: "#e8ad0b",
        danger: "#d63220",
      },
      backgroundImage: {
        waves: "url('https://cdn.bittivirta.fi/brand/background/waves/svg/blue.svg')",
        "waves-animated": "url('https://cdn.bittivirta.fi/brand/background/waves/svg/animated/blue.svg')"
      },
      boxShadow: {
        xs: "0 1px 1px rgba(0,0,0,.05)",
        sm: "0px 0px 1px rgba(0, 0, 0, 0.1), 0px 2px 16px rgba(0, 0, 0, 0.08)",
        md: "0px 0px 1px rgba(0, 0, 0, 0.1), 0px 2px 24px rgba(0, 0, 0, 0.08)",
        lg: "0px 0px 1px rgba(0, 0, 0, 0.12), 0px 8px 32px rgba(0, 0, 0, 0.08)",
        xl: "0px 0px 1px rgba(0, 0, 0, 0.12), 0px 16px 40px rgba(0, 0, 0, 0.16)",
      },
    },
  },
  plugins: [],
};
