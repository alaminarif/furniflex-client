/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // background:
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1E99F5",
          secondary: "#B92E2E",
          accent: "#202020",
          neutral: "#DEDEDE",
          "base-100": "#ffffff",
        },
      },
      "light",
    ],
  },
};
