import type { Config } from "tailwindcss";

export default {
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
        'aquamarine': {
          '50': '#e9fff8',
          '100': '#cbffed',
          '200': '#7affd5',
          '300': '#5bfad2',
          '400': '#1becbe',
          '500': '#00d4a9',
          '600': '#00ad8b',
          '700': '#008a73',
          '800': '#006d5c',
          '900': '#00594d',
          '950': '#00332c',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
