/* eslint-disable unicorn/prefer-module -- prettier config*/
module.exports = {
	arrowParens: "avoid",
	// @ts-expect-error -- missing declarations
	plugins: [require("prettier-plugin-tailwindcss")],
	printWidth: 120,
	tailwindFunctions: ["cn", "tv", "tw"],
	trailingComma: "all",
	useTabs: true,
};
