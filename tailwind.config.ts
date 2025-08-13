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
        color: {
          1: "#f2f2f2",
          2: "#808080",
          3: "#333333",
          4: "#000000",
          5: "#df1c00",
          6: "#8b0000",
        },
      },
      fontFamily: {
        montserrat: "var(--font-montserrat)",
        noto_sans: "var(--font-noto-sans)",
        rubik: "var(--font-rubik)",
      },
      height: {
        hero: "calc(100vh - 90px)",
      },
      screens: {
        mw: "1400px",
      },
    },
  },
  plugins: [],
};
export default config;
