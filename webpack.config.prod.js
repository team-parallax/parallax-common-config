const ExtractPlugin = require("extract-css-chunks-webpack-plugin");
module.exports = {
	mode: "production",
	module: {
		rules: [
			{
				test: /\.(css|pcss)$/,
				use: [
					ExtractPlugin.loader,
					"css-modules-typescript-loader",
					{
						loader: "css-loader",
						options: {
							import: true,
							importLoaders: 2,
							localsConvention: "camelCaseOnly",
							modules: {
								localIdentName: "[hash:base64:5]"
							},
							sourceMap: false
						}
					},
					"postcss-loader"
				]
			}
		]
	},
	plugins: [
		new ExtractPlugin({
			filename: "[name].[hash].css"
		})
	]
};