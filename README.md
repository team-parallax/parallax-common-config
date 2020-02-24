# parallax-common-config
[![Version npm][version]](http://npmjs.com/package/parallax-common-config)
[![Dependencies][david]](https://david-dm.org/team-parallax/parallax-common-config)
![peerDependencies][peer]
[![Known Vulnerabilities][vulnerabilities]](https://snyk.io/test/npm/parallax-common-config)
[![License][license]](https://opensource.org/licenses/MIT)

[version]: http://img.shields.io/npm/v/parallax-common-config.svg?style=flat-square
[david]: https://img.shields.io/david/team-parallax/parallax-common-config.svg?style=flat-square
[peer]: https://img.shields.io/david/peer/team-parallax/parallax-common-config.svg?style=flat-square
[vulnerabilities]: https://snyk.io/test/npm/parallax-common-config/badge.svg?style=flat-square
[license]: https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square

This is a module with all parallax-common-config configurations for team-parallax.

## Note
This is a module with opinionated configurations you might find useful. This is used internally at team-parallax. 

## Installation
```bash
yarn add -D parallax-common-config
```
Additional dependencies are required for eslint, webpack to run smoothly:
```bash
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser autoprefixer awesome-typescript-loader cache-loader css-loader css-modules-typescript-loader eslint-config-react-app eslint-loader eslint-plugin-filenames eslint-plugin-import-alias eslint-plugin-jsdoc eslint-plugin-react eslint-plugin-sort-imports-es6-autofix eslint-plugin-unused-imports extract-css-chunks-webpack-plugin file-loader html-webpack-plugin style-loader svg-inline-loader typescript typescript-eslint-parser typings-for-css-modules-loader url-loader webpack-merge
```



## Usage
### .editorconfig
Create a symlink to use our `.editorconfig`
```bash
ln -s node_modules/parallax-common-config/.editorconfig .editorconfig
```
### .browserlistrc
Create a symlink to use our `.editorconfig`
```bash
ln -s node_modules/parallax-common-config/.browserlistrc .browserlistrc
```
### .eslintrc
Add this to your `.eslintrc`
```json5
{
	"extends": [
		"./node_modules/parallax-common-config/.eslintrc",
		"./node_modules/parallax-common-config/.eslintrc.react",
		"./node_modules/parallax-common-config/.eslintrc.typescript"
	]
}
```
Note that there are also `.eslintrc.prod` files which return errors instead of warnings. This is useful for `CI` pipelines - use them like so
```json5
{
	"extends": [
		"./node_modules/parallax-common-config/.eslintrc",
		"./node_modules/parallax-common-config/.eslintrc.react",
		"./node_modules/parallax-common-config/.eslintrc.prod",
		"./node_modules/parallax-common-config/.eslintrc.react.prod",
		"./node_modules/parallax-common-config/.eslintrc.typescript" // TODO: create a prod-version of this one
	]
}
```
### tsconfig
```json5
{
	"extends": "./node_modules/parallax-common-config/tsconfig.react"
}
```
### Webpack
We utilize `webpack-merge` in order to modularize our webpack configurations.
```javascript
const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");
const webpackDev = require("./node_modules/parallax-common-config/webpack.config.dev");
const webpackProd = require("./node_modules/parallax-common-config/webpack.config.prod");
const webpackCommon = require("./node_modules/parallax-common-config/webpack.config.common");
const webpackReact = require("./node_modules/parallax-common-config/webpack.config.react");
module.exports = (env, argv) => {
	const dev = argv.mode === "development";
	return merge(webpackCommon, webpackReact, dev
		? webpackDev({})
		: webpackProd({}), {
		plugins: [
			new webpack.EnvironmentPlugin({
				MODE: dev
					? "development"
					: "production"
			})
		],
		resolve: {
			alias: {
				"~": path.resolve(__dirname, "src/"),
				Api: path.resolve(__dirname, "src/api/"),
				Components: path.resolve(__dirname, "src/components/"),
				Models: path.resolve(__dirname, "src/models/"),
				Services: path.resolve(__dirname, "src/services/"),
				Stores: path.resolve(__dirname, "src/stores/"),
				Views: path.resolve(__dirname, "src/views/")
			}
		}
	});
};
```
## TODOs
* Change installation section to make installation more atomic.
* Create a postcss configuration
* Link and configure jest
* Automate installation with a script (?)
* add husky configuration
* add lint-staged configuration