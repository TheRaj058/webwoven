import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#1C1C1C",
        foreground: "#EAEAEA",
        primary: {
          DEFAULT: "#00BFA6",
          foreground: "#EAEAEA",
          hover: "#00E5C3",
        },
        secondary: {
          DEFAULT: "#FF9F43",
          foreground: "#EAEAEA",
        },
        accent: {
          DEFAULT: "#272727",
          foreground: "#EAEAEA",
        },
        muted: {
          DEFAULT: "#9E9E9E",
          foreground: "#EAEAEA",
        },
        card: {
          DEFAULT: "#272727",
          foreground: "#EAEAEA",
        },
        footer: {
          DEFAULT: "#1A1A1A",
          foreground: "#EAEAEA",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-up": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.02)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "glow": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(255, 159, 67, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(255, 159, 67, 0.8)" },
        },
        "particle-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 10px currentColor",
            transform: "scale(1)"
          },
          "50%": { 
            boxShadow: "0 0 30px currentColor",
            transform: "scale(1.1)"
          },
        },
        "shadow-glow": {
          "0%, 100%": {
            textShadow: "0 0 10px rgba(0, 191, 166, 0.5)",
          },
          "50%": {
            textShadow: "0 0 20px rgba(0, 191, 166, 0.8)",
          },
        },
        "ripple": {
          "0%": {
            transform: "scale(0)",
            opacity: "0.5",
          },
          "100%": {
            transform: "scale(4)",
            opacity: "0",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-down": "fade-down 0.5s ease-out",
        "scale-up": "scale-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "gradient-flow": "gradient-flow 8s linear infinite",
        "glow": "glow 2s ease-in-out infinite",
        "particle-glow": "particle-glow 3s ease-in-out infinite",
        "shadow-glow": "shadow-glow 2s ease-in-out infinite",
        "ripple": "ripple 1s ease-out",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'dot-pattern': 'radial-gradient(circle, #272727 1px, transparent 1px)',
      },
      backgroundSize: {
        '300%': '300% 100%',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
