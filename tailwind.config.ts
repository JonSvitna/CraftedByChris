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
        ink: "var(--ink)",
        ash: "var(--ash)",
        light: "var(--light)",
        glow: "var(--glow)",
        ember: "var(--ember)",
        frost: "var(--frost)",
      },
      boxShadow: {
        card: "0 24px 60px rgba(9, 11, 17, 0.2)",
        halo: "0 0 0 1px rgba(255, 255, 255, 0.6), 0 12px 32px rgba(45, 66, 138, 0.25)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.6) 0, rgba(255,255,255,0) 24%), radial-gradient(circle at 80% 0%, rgba(188,233,255,0.65) 0, rgba(188,233,255,0) 30%), radial-gradient(circle at 20% 80%, rgba(255,189,94,0.4) 0, rgba(255,189,94,0) 28%)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        drift: "drift 22s linear infinite",
        reveal: "reveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(-1deg)" },
          "50%": { transform: "translateY(-14px) rotate(1deg)" },
        },
        drift: {
          "0%": { transform: "translateX(-4px) rotate(0deg)" },
          "50%": { transform: "translateX(4px) rotate(2deg)" },
          "100%": { transform: "translateX(-4px) rotate(0deg)" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
