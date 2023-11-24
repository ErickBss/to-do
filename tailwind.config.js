/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			'g': {
				100: '#F2F2F2',
				200: '#D9D9D9',
				300: '#808080',
				400: '#333333',
				500: '#262626',
				600: '#1A1A1A',
				700: '#0D0D0D',
			},
			'purple-dark': '#5E60CE',
			'purple': '#8284FA',
			'blue': '#4EA8DE',
			'blue-dark': '#1E6F9F',
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
};
