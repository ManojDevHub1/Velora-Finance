import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F7F7F2",
          "bg-subtle": "#EFEFE8",
          text: "#171918",
          "text-muted": "#606560",
          accent: "#1D8F68",
          "accent-hover": "#157555",
          "accent-soft": "#D7EDE3",
          dark: "#151817",
          "dark-card": "#1E2220",
          border: "#E2E2D7",
          "border-dark": "#2A302D",
        },
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      maxWidth: {
        editorial: "1280px",
        wide: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
