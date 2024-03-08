/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      primary: "#00A1E1",
      white: "#ffffff",
    },
    extend: {
      dropShadow: {
        glow: ["0 0px 5px #00A1E1", "0 0px 10px rgba(255, 255,255, 0.2)"],
      },
    },
  },
  plugins: [],
};
