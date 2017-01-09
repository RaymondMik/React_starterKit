module.exports = {
	// starting point of our app
	entry: './index.js',
	// where output and save transformed code
	// requires path and filename to be defined
	output: {
		//path: 'build',
		filename: 'bundle.js'
	},
	// which transformations to make in our code
	module: {
		loaders: [
		    // Babel for transpile jsx to js and ES2015 to ES5
			{
				// define what type of files to run into loader
				test: /\.js$/,
				// define what type of files to exclude
				exclude: /node_modules/,
				// define what loaders to use
				loaders: ['react-hot', 'babel-loader']
			},
			// Style Loader + CSS loader + Sass Loader
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			}
		] 
	}
};