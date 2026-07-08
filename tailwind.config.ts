import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FA0000",
          light: "#FF4130",
          50: "#FFF6F5",
          100: "#FFE0DD",
          200: "#FFC9C4",
          300: "#FF9E93",
          400: "#FF6656",
          500: "#FA0000",
          600: "#E00000",
          700: "#C40000",
        },
        cream: "#FFF6F5",
        surface: "#FFFFFF",
        accent: "#FFE0DD",
        line: "#F3D2CF",
        ink: "#1E1E1E",
        muted: "#6B7280",
        success: "#34A853",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        logo: ["var(--font-logo)", "var(--font-display)", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        xl2: "20px",
        blob: "24px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(249, 54, 9, 0.12)",
        card: "0 20px 50px -20px rgba(30, 30, 30, 0.14)",
        lift: "0 30px 70px -24px rgba(249, 54, 9, 0.22)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(120deg, #FA0000 0%, #FF4130 100%)",
        "warm-fade": "linear-gradient(180deg, #FFF6F5 0%, #FFFFFF 100%)",
      },
      maxWidth: {
        prose2: "68ch",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(3deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(22px) rotate(-3deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "float-slow 11s ease-in-out infinite",
        marquee: "marquee 34s linear infinite",
        shimmer: "shimmer 2.4s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
