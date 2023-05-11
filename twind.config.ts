import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        foreground: "#eee",
        background: "#222",
        nav_red: "#333",
      },
    },
  },
} as Options;
