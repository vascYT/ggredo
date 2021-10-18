module.exports = {
	mode: "jit",
	purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false,
	theme: {
		fontFamily: {
			text: ["ui-sans-serif", "system-ui"],
			intro: ["Montserrat", "sans-serif"],
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
