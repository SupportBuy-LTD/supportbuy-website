// import {heroui} from "@heroui/theme"

// /** @type {import('tailwindcss').Config} */
// const config = {
//   content: [
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//     "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["var(--font-sans)"],
//         mono: ["var(--font-mono)"],
//       },
//     },
//   },
//   darkMode: "class",
//   plugins: [heroui()],
// }

// module.exports = config;

import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				sb: {
					primary: '#144419',
					secondary: '#cdf546',
					'secondary-300': '#ebffd7',
					tertiary: '#d4f6b2',
					'dark-one': '#333333',
					'white-one': '#f5f5f5',
					'white-two': '#ffffff',
				},
			},
			fontFamily: {
				sans: ['var(--font-sans)'],
				mono: ['var(--font-mono)'],
			},
		},
	},
	darkMode: 'class',
	plugins: [heroui()],
};

module.exports = config;
