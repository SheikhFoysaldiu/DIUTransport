import {
	DarkTheme as PaperDarkTheme,
	DefaultTheme as PaperDefaultTheme,
	Provider as PaperProvider,
} from "react-native-paper";

export const themeLight = {
	...PaperDefaultTheme,
	// Specify custom property
	myOwnProperty: true,
	// Specify custom property in nested object
	colors: {
		accent: "#2a529f",
		success: "#16a085",
		tabActiveColor: "#74b9ff",
		tabInactiveColor: "#000",
		accentLight: "#b2bec3",
		White: "#FFFFFF",
		surfaceToggle: "#F3F3F3",
		cardToggle: "#FFFFFF",
		btnToggle: "#182C61",
		backcolor: "#ffffff",
		accentToggle: "#2a529f",
		black: "#000000",
		green: "#2ecc71",
		red: "#FFF1F0",

		purple: "#F3EFFF",

		yellow: "#FFF9EC",

		black: "#1E1F20",
		white: "#FFFFFF",

		gray: "#FCFBFC",
		darkRed: "#FF4134",
		darkPurple: "#6B3CE9",
		transparent: "transparent",
		deepYellow: "#ffc61a",
		lightYellow: "#ffe699",
		lightRed: "#ff9999",
	},
};

export const themeDark = {
	...PaperDarkTheme,
	// Specify custom property
	myOwnProperty: true,
	// Specify custom property in nested object
	colors: {
		green: "#2ecc71",
		accent: "#272727",
		success: "#16a085",
		tabActiveColor: "#FFF",
		tabInactiveColor: "#2C3A47",
		White: "#FFFFFF",
		surfaceToggle: "#000",
		cardToggle: "#272727",
		btnToggle: "#272727",
		accentToggle: "#FFFFFF",
		black: "#000000",
		red: "#FF4134",
		lightRed: "#FFF1F0",
		darkRed: "#FF4134",
		purple: "#6B3CE9",
		darkPurple: "#6B3CE9",
		yellow: "#FFC664",

		black: "#1E1F20",
		white: "#FFFFFF",

		gray: "#C3C6C7",

		deepYellow: "#ffc61a",
		lightYellow: "#ffe699",
		lightRed: "#ff9999",
		transparent: "transparent",
	},
};
