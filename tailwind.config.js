module.exports = {
	mode: "jit",
	purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false,
	theme: {
		fontFamily: {
			text: ["ui-sans-serif", "system-ui"],
			title: ["Montserrat", "sans-serif"],
		},
		extend: {
			backgroundImage: {
				wave1: "url('/wave1.svg')",
				wave2: "url('/wave2.svg')",
			},
			colors: {
				ggorange: "#fbac04",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
