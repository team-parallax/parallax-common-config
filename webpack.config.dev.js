const ExtractPlugin = require("extract-css-chunks-webpack-plugin");
module.exports = {
	devServer: {
		historyApiFallback: true
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(css|pcss)$/,
				use: [
					"style-loader",
					"css-modules-typescript-loader",
					{
						loader: "css-loader",
						options: {
							import: true,
							importLoaders: 2,
							localsConvention: "camelCaseOnly",
							modules: {
								localIdentName: "[name]-[local]-[hash:base64:5]"
							},
							sourceMap: true
						}
					},
					"postcss-loader"
				]
			}
		]
	},
	plugins: [
		new ExtractPlugin({
			filename: "[name].css"
		})
	]
};