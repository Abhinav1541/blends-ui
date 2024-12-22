/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        akira: ['"Akira Expanded"', "normal"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: "#20A564",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        slidein:
          "slidein 5s cubic-bezier(0.200, 0.825, 0.000, 0.990) var(--delay, 0) infinite",
        slideinleft:
          "slideinleft var(--end, 0) cubic-bezier(0.200, 0.825, 0.000, 0.990) var(--start, 0) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(130%)" },
          "100%": { transform: "translateX(30%)" },
        },
        slidein: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideinleft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "70%": {
            opacity: "1",
            transform: "translateX(0)",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      backgroundImage: {
        "black-blur":
          "linear-gradient(0deg, rgba(0,0,0,0) 10%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 90%)",
        "grey-blur":
          "linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)",
        "green-blur":
          "linear-gradient(150deg, rgba(32,165,100,0.5) 0%, rgba(0,0,0,0) 80%)",
        mission: "url(/src/assets/svg/mission.svg)",
      },
    },
  },
  plugins: [],
};
