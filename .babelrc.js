module.exports = {
	plugins: [
		"@babel/plugin-proposal-class-properties"
	],
	presets: [
		["@babel/preset-env", {
			useBuiltIns: "entry",
			targets: "> 5%, not dead"
		}]
	]
};