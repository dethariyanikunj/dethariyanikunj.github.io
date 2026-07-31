/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        obsidian: {
          900: "#0b0d17",
          950: "#080911",
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite alternate",
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "100%" },
          "100%": { backgroundPosition: "-100%" },
        },
        pulseGlow: {
          "0%": { opacity: "0.4", transform: "scale(1)" },
          "100%": { opacity: "0.7", transform: "scale(1.08)" },
        },
      },
    },
  },
  plugins: [],
};
