/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: '"Be Vietnam Pro", system-ui, sans-serif',
        serif: '"Gabarito Variable", ui-serif, serif',
      },
      colors: {
        primary: "#2563eb",
        neutral: {
          800: "#1e293b",
        },
        white: "#e2e8f0",
        black: "#0e141b",
      },
      fontSize: {
        xs: ["0.875rem", "1.125rem"],
        sm: ["1rem", "1.25rem"],
        base: ["1.125rem", "1.625rem"],
        lg: ["1.25rem", "1.75rem"],
        xl: ["1.5rem", "1.813rem"],
        "2xl": ["1.75rem", "2.125rem"],
        "3xl": ["2rem", "2.375rem"],
        "4xl": ["2.25rem", "2.688rem"],
        "5xl": ["2.5rem", "3rem"],
        "6xl": ["3rem", "3.625rem"],
        "7xl": ["3.75rem", "1"],
        "8xl": ["4.5rem", "4.875rem"],
        "9xl": ["6rem", "6.625rem"],
      },
      letterSpacing: {
        tightest: "-2px",
        tighter: "-1px",
        tight: "-0.25px",
      },
      animation: {
        "slide-in": "slide-in 600ms ease both",
      },
      keyframes: {
        "slide-in": {
          "10%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};


