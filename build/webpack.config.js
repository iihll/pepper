const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5')

const config = require('./config')

const webpackConfig = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(process.cwd(), './lib'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias
    // modules: ['node_modules']
  },
  // devServer: {
  //   host: '0.0.0.0',
  //   port: 8085,
  //   publicPath: '/',
  //   hot: true
  // },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './examples/index.html',
    //   filename: './index.html'
    //   // favicon: './examples/favicon.ico'
    // }),
    new VueLoaderPlugin()
  ]
}

module.exports = webpackConfig
