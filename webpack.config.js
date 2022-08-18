const path = require('path');
const slsw = require('serverless-webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
	entry: slsw.lib.entries,
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
	},
	output: {
		libraryTarget: 'commonjs',
		path: path.join(__dirname, '.webpack'),
		filename: '[name].js',
	},
	plugins: [
		new CopyPlugin([{ from: './.env', to: './' }])
	],
	target: 'node',
	module: {
		rules: [
			// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
			{ test: /\.tsx?$/, loader: 'ts-loader' },
		],
	},
};
