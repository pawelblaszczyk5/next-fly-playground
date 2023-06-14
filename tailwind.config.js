/* eslint-disable unicorn/prefer-module, @typescript-eslint/no-var-requires -- tailwind config file */
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	experimental: {
		optimizeUniversalDefaults: true,
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
			},
		},
	},
};
