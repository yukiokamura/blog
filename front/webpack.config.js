
if(process.argv[2].substr(2) != 'watch'){
  console.log(`
                _                      _
               | |                    | |
  __      _____| |__  _ __   __ _  ___| | __
  \\ \\ /\\ / / _ \\ '_ \\| '_ \\ / _  |/ __| |/ /
   \\ V  V /  __/ |_) | |_) | (_| | (__|   <
    \\_/\\_/ \\___|_.__/| .__/ \\__,_|\\___|_|\\_\\
                     | |
                     |_|

  MODE ------------>   ${process.argv[2].substr(2)}

  `);
}

const MODE = process.argv[2].substr(2) == 'watch' ? 'none' : process.argv[2].substr(2);


const enabledSourceMap = (MODE == 'development' || MODE == 'none');
const webpack = require('webpack');
module.exports = {
  mode:MODE,
  entry:{'app':'./src/js/main.es6'},
  devtool: 'inline-source-map',
  output:{
    path:__dirname+'/dist/assets/js',
    filename:'[name].js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ],
  module: {
      rules: [
        {
          test: /\.es6$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/react'
                ]
              }
            }
          ],
          exclude: /node_modules/,
        },
    ],
    }

};
