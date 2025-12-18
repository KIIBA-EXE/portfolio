import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
            colors: {
                background: "#09090b", // Zinc 950 - Darker, cleaner background
                foreground: "#fafafa", // Zinc 50
                card: "#18181b", // Zinc 900
                "card-foreground": "#fafafa",
                primary: {
                    DEFAULT: "#fafafa",
                    foreground: "#18181b",
                },
                secondary: {
                    DEFAULT: "#27272a", // Zinc 800
                    foreground: "#fafafa",
                },
                muted: {
                    DEFAULT: "#27272a", // Zinc 800
                    foreground: "#a1a1aa", // Zinc 400
                },
                accent: {
                    DEFAULT: "#27272a", // Zinc 800
                    foreground: "#fafafa",
                },
                border: "#27272a", // Zinc 800
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-subtle": "linear-gradient(to bottom right, #18181b, #09090b)",
            },
            animation: {
                spotlight: "spotlight 2s ease .75s 1 forwards",
                shimmer: "shimmer 2s linear infinite",
            },
            keyframes: {
                spotlight: {
                    "0%": {
                        opacity: "0",
                        transform: "translate(-72%, -62%) scale(0.5)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translate(-50%,-40%) scale(1)",
                    },
                },
                shimmer: {
                    from: {
                        backgroundPosition: "0 0",
                    },
                    to: {
                        backgroundPosition: "-200% 0",
                    },
                },
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
export default config;
