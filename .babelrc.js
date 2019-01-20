module.exports = {
	presets: [
		["@babel/preset-env", {
			useBuiltIns: "entry",
			targets: "> 5%, not dead"
		}]
	]
};