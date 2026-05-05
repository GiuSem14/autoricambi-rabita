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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          black: "#0D1B4B",
          yellow: "#E8201A",
          red: "#E8201A",
          white: "#FFFFFF",
          blue: "#1B3A8C",
        },
      },
    },
  },
  plugins: [],
};
export default config;
