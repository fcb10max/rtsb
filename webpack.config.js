const prod = process.env.NODE_ENV === "production";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
	mode: prod ? "production" : "development",
	entry: "./src/index.tsx",
	output: {
		path: __dirname + "/dist/",
	},
	devServer: {
		static: path.resolve(__dirname, "./dist"),
		hot: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				resolve: {
					extensions: [".ts", ".tsx", ".js", ".json"],
				},
				use: "ts-loader",
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},
	devtool: prod ? undefined : "source-map",
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/public/index.html",
		}),
		new MiniCssExtractPlugin(),
	],
};

// const webpack = require("webpack");
// const path = require("path");

// module.exports = {
// 	entry: path.resolve(__dirname, "./src/index.tsx"),
// 	module: {
// 		rules: [
// 			{
// 				test: /\.(ts|tsx)$/,
// 				exclude: /node_modules/,
// 				use: ["ts-loader"],
// 			},
// 			{
// 				test: /\.css$/,
// 				use: [MiniCssExtractPlugin.loader, "css-loader"],
// 			},
// 		],
// 	},
// 	resolve: {
// 		extensions: [".ts", ".tsx"],
// 	},
// 	output: {
// 		path: path.resolve(__dirname, "./dist"),
// 		filename: "bundle.js",
// 	},
// 	plugins: [
// 		new webpack.HotModuleReplacementPlugin(),
// 		new HtmlWebpackPlugin({
// 			template: "index.html",
// 		}),
// 		new MiniCssExtractPlugin(),
// 	],
// 	devServer: {
// 		static: path.resolve(__dirname, "./dist"),
// 		hot: true,
// 		historyApiFallback: true,
// 	},
// };
