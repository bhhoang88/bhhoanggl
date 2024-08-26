// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "12px"
            },
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1164px",
                xl: "1304px"
            }
        },
        extend: {
            textShadow: {
                DEFAULT: "0px 0px calc(25/1920*100rem) rgba(0, 0, 0, 0.1)"
            },
            zIndex: {
                2: "2",
                3: "3",
                5: "5"
            },
            fontFamily: {
                body: ["JetBrains_Mono", "monospace"]
            },

            colors: {
                transparent: "transparent",
                primary: {
                    BB9C66: "#BB9C66",
                    F6E18D: "#F6E18D",
                    A89142: "#A89142",
                    "051A3A": "#051A3A",
                    bullet: "rgba(17, 24, 39, 0.25)"
                },
                secondary: {
                    D0E7E6: "#D0E7E6",
                    AEC7C3: "#AEC7C3",
                    224376: "#224376",
                    "122F5B": "#122F5B",
                    "2056A9": "#2056A9"
                }
            }
        }
    },
    darkMode: "class",
    plugins: [nextui()]
}