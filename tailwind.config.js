/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"DM Mono"', "ui-monospace", "monospace"],
        sans: ["Syne", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        "portfolio-dark": {
          "base-100": "#0c0c0c",
          "base-200": "#141414",
          "base-300": "#1c1c1c",
          "base-content": "#e8e8e8",
          primary: "#e8e8e8",
          "primary-content": "#0c0c0c",
          secondary: "#1c1c1c",
          "secondary-content": "#e8e8e8",
          // ✏️  Cambia este valor para re-temear todo el portafolio
          accent: "#3b82f6",
          "accent-content": "#0c0c0c",
          neutral: "#1c1c1c",
          "neutral-content": "#a0a0a0",
          info: "#38bdf8",
          success: "#3b82f6",
          warning: "#fb923c",
          error: "#f87171",
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "99rem",
          "--animation-btn": "0.2s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.98",
          "--border-btn": "1px",
        },
      },
    ],
    darkTheme: "portfolio-dark",
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
};
