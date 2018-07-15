const path = require('path');

module.exports = {
	mode: "development",
	devtool: "source-map",
	entry: "./src/app.ts",
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: "app.js"
	},
	resolve: {
		extensions: ['.ts','.js']
	},
	module: {
		rules: [
			{
				test:/\.ts$/,
				use: 'awesome-typescript-loader'
			}
		]
	},
	devServer: {
		port: 3000
	}
};