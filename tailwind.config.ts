import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      transitionTimingFunction: {
        bouncy: "cubic-bezier(0.5, -1.5, 0.5, 2.5)",
      },
    },
  },
  plugins: [],
} satisfies Config;
