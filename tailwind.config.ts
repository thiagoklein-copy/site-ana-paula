import type { Config } from "tailwindcss";

/**
 * Color system centralized here for one-place tweaking.
 * Mirrored in src/app/globals.css via @theme for Tailwind v4.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6B7156",
          dark: "#4A4E39",
        },
        cream: "#F7F3EA",
        beige: "#EFE8D8",
        accent: "#B5623B",
        ink: {
          DEFAULT: "#2E2C24",
          muted: "#6E6B5E",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        script: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-work-sans)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(46, 44, 36, 0.08)",
        lift: "0 12px 40px rgba(46, 44, 36, 0.12)",
        glass: "0 8px 32px rgba(46, 44, 36, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
