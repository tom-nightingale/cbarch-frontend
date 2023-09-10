export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    screens: {
      "2xs": "375px",
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "2000px",
    },
    fontFamily: {
      sans: ["Karla", "sans-serif"],
      heading: ["Lexend", "sans-serif"],
    },
    extend: {
      colors: {
        dark: {
          DEFAULT: "#1F1F1F",
          dark: "#262626",
        },
        blue: {
          DEFAULT: "#4D86A0",
        },
      },
      maxWidth: (theme) => ({
        ...theme("spacing"),
      }),
      screens: {
        landscape: { raw: "(orientation: landscape)" },
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
