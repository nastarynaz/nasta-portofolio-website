module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        grey_light: "#F5F5F5",
        grey_dark: "#5C6370",
        black: "#1E1E1E",
        orange: "#FF5722",
        beige: "#EDEBCA",
      },
    },
  },
};
