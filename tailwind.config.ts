import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				light: "#FFF9EA",
				gold: "#FFAC4B",
			},
			fontFamily: {
				kanit: ["var(--kanit)"],
				rubik: ["var(--rubik)"],
			},
			gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(280px, 1fr))'
      },
		},
	},
	plugins: [nextui()],
};
export default config;
