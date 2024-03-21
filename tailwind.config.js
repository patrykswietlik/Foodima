/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'e-red': '#F00000',
				'e-yellow': '#F7BB0E',
				'e-gray': '#29282C',
			},
		},
	},
	plugins: [],
};
