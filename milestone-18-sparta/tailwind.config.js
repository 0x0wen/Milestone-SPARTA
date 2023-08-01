/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				green1: '#A0C49D',
				green2: '#C4D7B2',
				green3: '#E1ECC8',
				green4: '#F7FFE5',
				brown1: '#884A39',
				brown2: '#C38154',
				brown3: '#FFC26F',
				brown4: '#F9E0BB',
				green5: '#EDF1D6',
				green6: '#9DC08B',
				green7: '#609966',
				green8: '#40513B',
			},
			fontFamily: {
				header: ['Made-Gentle', 'sans-serif'],
				subheader: ['Sigmundpro-SemiBold', 'sans-serif'],
				subheaderitalic: ['Sigmundpro-SemiBoldItalic', 'sans-serif'],
				paragraph: ['Poppins-Regular', 'serif'],
				paragraphitalic: ['Poppins-Italic', 'serif'],
			},
		},
	},
	plugins: [],
}
