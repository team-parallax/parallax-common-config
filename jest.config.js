module.exports = {
	clearMocks: true,
	coverageDirectory: "coverage",
	moduleFileExtensions: ["mjs", "js"],
	rootDir: "src",
	roots: [
		"<rootDir>"
	],
	testEnvironment: "jsdom",
	testMatch: [
		"**/?(*.)+(spec|test).mjs?(x)"
	],
	transform: {
		".*": "<rootDir>/../node_modules/babel-jest"
	}
};