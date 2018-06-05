const path = require("path");

const config = {
	entry: path.resolve(__dirname, "src/index.ts"),
	
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},

	resolve: {
		extensions: [".js", ".ts"],
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "awesome-typescript-loader",
			}
		]
	},
};

module.exports = config;