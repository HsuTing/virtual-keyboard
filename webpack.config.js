var jsx_src = './src/';
var jsx_dist = './dist/';

var webpack = require('webpack');

module.exports = { 
    entry: {
        'index': jsx_src + 'index.jsx'
    },  
    output: {
        filename: '[name].min.js',
        path: jsx_dist
    },  
    module: {
        loaders: [
            {   
                test: /\.jsx$/,
                loader: 'babel',
                query: {
                  presets: ['es2015']
                }   
            },  
        ]   
    },  
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.min.css', '.min.js', '.png', '.jpg', '.html']
    }   
}
