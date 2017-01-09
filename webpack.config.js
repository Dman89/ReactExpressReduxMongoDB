var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const port = 3000;

module.exports = {
  entry: [
    './src/index.js'
  ],
  devServer: {
    inline: true,
    hot: true,
    port: port,
    historyApiFallback: true,
    contentBase: './'
  },
    output: {
      path: path.resolve(__dirname, "public"),
      filename: 'scripts/bundle.js',
      publicPath: 'http://localhost:'+port,
    },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-1', 'stage-0']
        }
      },
      {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
    plugins: [
      new webpack.OldWatchingPlugin(),
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"scripts/vendor.bundle.js"),
      new ExtractTextPlugin('style/master.css', { allChunks: true })
    ],
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  }
};
