const path = require ('path);
module.exports = {

	context: path.join(home/lol95371/MyFirstReact/familiarisation/src, 'src')
		entry: [
			'./main.js' ,
			],
		output: {

	path:    path.join(home/lol95371/MyFirstReact/familiarisation,'www'),
		filename: 'bundle.js',
},

module: {
	rules:[
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: [
				'babel-loader',
			     ],
		},
	      ],
	},

resolve: {
	modules: [
		path.join(home/lol95371/familiarisation, 'node_modules'),
		 ],
	 },
};




