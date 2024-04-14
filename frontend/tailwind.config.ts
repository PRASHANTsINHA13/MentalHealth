import type { Config } from "tailwindcss";
import { Config as DaisyUIConfig } from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [require("daisyui"), require("tailwind-scrollbar")],
  daisyui: {
    themes: ["dracula"],
  } satisfies DaisyUIConfig,
};
export default config;
