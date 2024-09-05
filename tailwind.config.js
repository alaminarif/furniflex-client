/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
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
          neutral: "#F6F5F2",
          "base-100": "#ffffff",
        },
      },
      "light",
    ],
  },
};
