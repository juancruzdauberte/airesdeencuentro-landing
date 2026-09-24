import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette (Burgundy)
        primary: {
          DEFAULT: "#5f0219",
          50: "#fef2f4",
          100: "#fee5ea",
          200: "#fdd0d9",
          300: "#fcabb2",
          400: "#fa7684",
          500: "#f54758",
          600: "#e12b3e",
          700: "#c41a2d",
          800: "#a33947",
          900: "#7e1d2d",
          950: "#5f0219",
        },
        "on-primary": "#ffffff",
        "primary-container": "#7e1d2d",
        "on-primary-container": "#ff8e97",
        "inverse-primary": "#ffb2b7",
        "primary-fixed": "#ffdadb",
        "primary-fixed-dim": "#ffb2b7",
        "on-primary-fixed": "#40000d",
        "on-primary-fixed-variant": "#842231",

        // Secondary Palette (Bordo)
        secondary: "#aa3343",
        "on-secondary": "#ffffff",
        "secondary-container": "#fc717e",
        "on-secondary-container": "#70021d",
        "secondary-fixed": "#ffdada",
        "secondary-fixed-dim": "#ffb3b6",
        "on-secondary-fixed": "#40000d",
        "on-secondary-fixed-variant": "#891a2d",

        // Tertiary Palette (Dark Gray)
        tertiary: "#312a2d",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#484043",
        "on-tertiary-container": "#b7acb0",
        "tertiary-fixed": "#ecdfe3",
        "tertiary-fixed-dim": "#cfc3c7",
        "on-tertiary-fixed": "#201a1d",
        "on-tertiary-fixed-variant": "#4d4548",

        // Error & Status
        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",

        // Surface & Background
        background: "#f8f9ff",
        "on-background": "#171c23",
        surface: "#f8f9ff",
        "on-surface": "#171c23",
        "on-surface-variant": "#564242",
        "inverse-surface": "#2c3138",
        "inverse-on-surface": "#edf1fb",

        // Surface Containers
        "surface-dim": "#d6dae4",
        "surface-bright": "#f8f9ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f0f4fd",
        "surface-container": "#eaeef8",
        "surface-container-high": "#e4e8f2",
        "surface-container-highest": "#dee2ec",

        // Outline & Variants
        outline: "#897172",
        "outline-variant": "#ddc0c0",
        "surface-tint": "#a33947",
        "surface-variant": "#dee2ec",
      },

      fontFamily: {
        "headline-xl": [
          '"Plus Jakarta Sans"',
          {
            fontWeight: "600",
            fontSize: "48px",
            lineHeight: "56px",
            letterSpacing: "-0.02em",
          },
        ],
        "headline-xl-mobile": [
          '"Plus Jakarta Sans"',
          {
            fontWeight: "600",
            fontSize: "32px",
            lineHeight: "40px",
            letterSpacing: "-0.02em",
          },
        ],
        "headline-lg": [
          '"Plus Jakarta Sans"',
          {
            fontWeight: "600",
            fontSize: "36px",
            lineHeight: "44px",
            letterSpacing: "-0.02em",
          },
        ],
        "headline-lg-mobile": [
          '"Plus Jakarta Sans"',
          {
            fontWeight: "600",
            fontSize: "26px",
            lineHeight: "34px",
            letterSpacing: "-0.02em",
          },
        ],
        "headline-md": [
          '"Plus Jakarta Sans"',
          {
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "32px",
          },
        ],
        "headline-sm": [
          '"Plus Jakarta Sans"',
          {
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "28px",
          },
        ],
        "title-md": [
          '"Plus Jakarta Sans"',
          {
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "26px",
          },
        ],
        "title-sm": [
          '"Plus Jakarta Sans"',
          {
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "24px",
          },
        ],
        "body-lg": [
          '"Plus Jakarta Sans"',
          {
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "26px",
          },
        ],
        "body-md": [
          '"Plus Jakarta Sans"',
          {
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "22px",
          },
        ],
        "body-sm": [
          '"Plus Jakarta Sans"',
          {
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "18px",
          },
        ],
        "label-lg": [
          '"Plus Jakarta Sans"',
          {
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "20px",
          },
        ],
        "label-md": [
          '"Plus Jakarta Sans"',
          {
            fontWeight: "600",
            fontSize: "12px",
            lineHeight: "16px",
          },
        ],
        "label-sm": [
          '"Plus Jakarta Sans"',
          {
            fontWeight: "600",
            fontSize: "11px",
            lineHeight: "14px",
          },
        ],
      },

      fontSize: {
        "headline-xl": ["48px", { lineHeight: "56px", fontWeight: "600" }],
        "headline-xl-mobile": [
          "32px",
          { lineHeight: "40px", fontWeight: "600" },
        ],
        "headline-lg": ["36px", { lineHeight: "44px", fontWeight: "600" }],
        "headline-lg-mobile": [
          "26px",
          { lineHeight: "34px", fontWeight: "600" },
        ],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "headline-sm": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "title-md": ["18px", { lineHeight: "26px", fontWeight: "500" }],
        "title-sm": ["16px", { lineHeight: "24px", fontWeight: "500" }],
        "body-lg": ["16px", { lineHeight: "26px", fontWeight: "400" }],
        "body-md": ["14px", { lineHeight: "22px", fontWeight: "400" }],
        "body-sm": ["12px", { lineHeight: "18px", fontWeight: "400" }],
        "label-lg": ["14px", { lineHeight: "20px", fontWeight: "600" }],
        "label-md": ["12px", { lineHeight: "16px", fontWeight: "600" }],
        "label-sm": ["11px", { lineHeight: "14px", fontWeight: "600" }],
      },

      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },

      spacing: {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        "gutter-sm": "1rem",
        gutter: "1.5rem",
        "gutter-lg": "2rem",
        "margin-sm": "1rem",
        margin: "2rem",
        "margin-lg": "4rem",
      },

      boxShadow: {
        sm: "0 4px 20px -2px rgba(30, 35, 42, 0.04), 0 1px 3px 0 rgba(30, 35, 42, 0.02)",
        md: "0 8px 24px -4px rgba(30, 35, 42, 0.05), 0 2px 6px -1px rgba(30, 35, 42, 0.02)",
        lg: "0 16px 36px -4px rgba(30, 35, 42, 0.06), 0 4px 12px -2px rgba(30, 35, 42, 0.03)",
        xl: "0 20px 48px -8px rgba(30, 35, 42, 0.08), 0 6px 16px -4px rgba(30, 35, 42, 0.04)",
      },

      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      backdropFilter: {
        blur: "blur(12px)",
      },
    },
  },
  plugins: [],
};

export default config;
