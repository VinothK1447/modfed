const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;
module.exports = {
	mode: 'development',
	devServer: {
		port: 4000,
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'RECEIVER',
			filename: 'fedModule.js',
			remotes: {
				PROVIDER: 'PROVIDER@http://localhost:4005/remoteEntry.js',
				// EISPortal: 'EISPortal@http://localhost:4005/fedModule.js',
			},
			shared: {
				react: {
					requiredVersion: deps.react,
					singleton: true,
					eager: true,
				},
				'react-dom': {
					requiredVersion: deps['react-dom'],
					singleton: true,
					eager: true,
				},
			},
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
