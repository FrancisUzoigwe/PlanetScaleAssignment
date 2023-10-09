/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        main: {
          max: "1125px",
        },
        small: {
          max: "320px",
        },
        medium: {
          max: "640px",
        },
        large: {
          max: "880px",
        },
        xlarge: {
          max: "1240px",
        },
      },
    },
  },
  plugins: [],
};
