/** @type {import('tailwindcss').Config} */




export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			maxWidth: {
				"1/2": "50%",
			},
			borderRadius: {
				xl: "1rem",
			},

		},
		screens: {
			xs: "320px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			xxl: "1400px"
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#ffffff",
			forest: "#40531B",
			harvestgold: "#DB9A38",
			blackbean: "#3C1518",
			airblue: "#7EA8BE",
			error: "#898989",
			lightgrey: "#D1D1D1",
			scroll: "#EBE0C0",
			black: "#000000",
		},
		fontFamily: {
			sans: ["Open Sans, Arial"],
			serif: ["Times New Roman"],
			lemon: ["Lemon"],
			sylfaen: ["Sylfaen"],
			sourcesans: "Source Sans Pro",
		},
		fontSize: {
			xs: ["0.875rem", "1.25rem"],
			sm: ["0.9375rem", "1.375rem"],
			base: ["1rem", "1.5rem"],
			md: ["1.125rem", "1.625rem"],
			lg: ["1.25rem", "1.75rem"],
			xl: ["1.5rem", "2rem"],
			xxl: ["1.875rem", "2.5rem"],
			xxxl: ["2.25rem", "3rem"],
			xxxxl: ["2.5rem", "3.125rem"],
			jumbo: ["3.75rem", "5rem"],
		},
		container: {
			center: true,
			padding: "2rem",
		},

	},
	plugins: [require("@tailwindcss/typography"),
	function ({ addBase, theme }) {
		addBase({
			'h1': {
				color: theme('colors.blackbean'),
				fontSize: theme('fontSize.xxxxl'),
			},
			'h2': {
				color: theme('colors.blackbean'),
				fontSize: theme('fontSize.xxxl'),
			},
			'h3': {
				color: theme('colors.blackbean'),
				fontSize: theme('fontSize.xxl'),
			},
			'h4': {
				color: theme('colors.blackbean'),
				fontSize: theme('fontSize.xl'),
			},
			'h5': {
				color: theme('colors.blackbean'),
				fontSize: theme('fontSize.lg'),
			},
			'h6': {
				color: theme('colors.blackbean'),
				fontSize: theme('fontSize.base'),
			},
		});
	},
	],
}

