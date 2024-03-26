import daisyui from "daisyui";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      dana: "dana",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1180px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
      },
    },

    extend: {
      // colors: {
      //   "base-200": "oklch(var(--fallback-b2) / <alpha-value>)",
      // },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    daisyui,
    plugin(function ({ addBase, theme, addUtilities }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
      addUtilities({
        ".flex-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        section: {
          paddingTop: theme("padding.3"),
          paddingBottom: theme("padding.3"),
          display: "flex",
          flexDirection: "column",
          "@media (min-width: 768px)": {
            paddingTop: theme("padding.10"),
            paddingBottom: theme("padding.10"),
          },
        },
        svg: {
          width: "100%",
          height: "100%",
          display: "inline-block",
        },
        ".btn": {
          minHeight: "auto",
        },
        ".prose": {
          maxWidth: "100%",
        },
      });
    }),
  ],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#f9ab00",
          "primary-focus": "#4506cb",
          "primary-content": "#ffffff",

          secondary: "#f000b8",
          "secondary-focus": "#bd0091",
          "secondary-content": "#ffffff",

          accent: "#37cdbe",
          "accent-focus": "#2ba69a",
          "accent-content": "#ffffff",

          neutral: "#3b424e",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",

          "base-100": "#1a191f",
          "base-200": "#222028",
          "base-300": "#ced3d9",
          "base-content": "#fff",

          info: "#1c92f2",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",

          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": ".25s",
          "--animation-input": ".2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
      },
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
export default config;
