/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["index.html"], //karna hanya ada satu file yang kita bisa save perubahan
	theme: {
		//bikin baru
		container: {
			center: true,
			padding: "16px",
		},
		extend: {
			//disediakan tailwind
			colors: {
				primary: "#849974",
				secondary: "#64748b",
				dark: "#707070",
				background: "#192231",
				write: "#6E57E0",
			},
			screens: {
				"2xl": "1320px", //ini mengatur desktop untuk ukuran 2xl
			},
		},
	},
	plugins: [],
};

