var webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
      // path: __dirname+'/dist/assets',
        path: "/dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 9876
    },
    module: {    
        loaders: [            
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                     plugins: ['react-html-attrs','transform-decorators-legacy'],
                }

            }, 
             {
                test: /\.css$/,
                loaders: 'style-loader!css-loader'
            },                          
        ]
    }
}