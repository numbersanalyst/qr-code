import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Outfit', ...defaultTheme.fontFamily.sans],
			  },
			colors: {
				'white': 'hsl(0, 0%, 100%)',
				'light-gray': 'hsl(212, 45%, 89%)',
				'grayish-blue': 'hsl(220, 15%, 55%)',
				'dark-blue': 'hsl(218, 44%, 22%)',
				'dark-purple': 'hsl(228, 45%, 44%)',
			},
		},
	},
	plugins: [],
}
