import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      fontSize: {
        "2sm": "0.875rem",
      },
      transitionTimingFunction: {
        bouncy: "cubic-bezier(0.5, -1.5, 0.5, 2.5)",
      },
      screens: {
        "2xs": "560px",
        xs: "480px",
        xxs: "320px",
      },
    },
  },
  plugins: [],
} satisfies Config;
