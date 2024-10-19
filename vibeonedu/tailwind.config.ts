import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customOrange: "#ff6130",
        customBlue:"#2870ED",
        customDarkGreen:"#028661",
        customGreen:"#0cb43f",
        customPurple:"#721c7a",
        customPink :"#eb4c79",
      },
      borderWidth: {
        3: "3px",
      }
    },
  },
  plugins: [],
};
export default config;
