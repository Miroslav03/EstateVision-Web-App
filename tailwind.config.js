/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: {
                    DEFAULT: "#141414",
                    50: "#5B5B5B",
                    100: "#505050",
                    200: "#3B3B3B",
                    300: "#2C2C2C",
                    400: "#1E1E1E",
                    500: "#141414",
                    600: "#0E0E0E",
                    700: "#080808",
                    800: "#030303",
                    900: "#000000",
                },
                brown: {
                    DEFAULT: "#2E250D",
                    50: "#7E6D4C",
                    100: "#726245",
                    200: "#574C34",
                    300: "#413A28",
                    400: "#2E250D",
                    500: "#281F0A",
                    600: "#211907",
                    700: "#1A1304",
                    800: "#130C01",
                    900: "#0B0700",
                },
                yellow: {
                    DEFAULT: "#FBD31D",
                    50: "#FFF4B3",
                    100: "#FFE98A",
                    200: "#FFD742",
                    300: "#FBD31D",
                    400: "#E0BB19",
                    500: "#C5A215",
                    600: "#AA8910",
                    700: "#8E700C",
                    800: "#735608",
                    900: "#583D04",
                },
                gray: {
                    DEFAULT: "#D0CCCC",
                    50: "#F9F8F8",
                    100: "#EDEBEB",
                    200: "#DAD7D7",
                    300: "#C8C4C4",
                    400: "#B5B1B1",
                    500: "#A39E9E",
                    600: "#908A8A",
                    700: "#7C7676",
                    800: "#696363",
                    900: "#565050",
                },
            },
            fontFamily: {
                main: ["Times New Roman", "serif"],
            },
            screens: {
                '2xl': {'max': '1535px'},
                // => @media (max-width: 1535px) 
          
                'xl': {'max': '1279px'},
                // => @media (max-width: 1279px) 
          
                'lg': {'max': '1023px'},
                // => @media (max-width: 1023px) 
          
                'md': {'max': '767px'},
                // => @media (max-width: 767px)
          
                'sm': {'max': '639px'},
                // => @media (max-width: 639px) 
              }
        },
    },
    plugins: [],
};
