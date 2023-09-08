/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  fontFamily: {
			"dm-sans": "'DM Sans', sans-serif",
			"inter": "'Inter', sans-serif",
			"poppins": "'Poppins', sans-serif"
		  }
		},
		keyframes:{
		  "fading":{
			"0%" : {opacity:"0"},
			"100%": {opacity:"100"}
		  }
		},
		animation:{
		  "fade": "fading 3s linear 1"
		}
	  },
	  plugins: [],
}
