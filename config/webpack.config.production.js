const webpack = require('webpack');
const conf = require('./gulp.config');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    preLoaders: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'tslint'
    }],

    loaders: [{
      test: /.json$/,
      loaders: [
        'json'
      ]
    }, {
      test: /\.(css|scss)$/,
      loaders: ExtractTextPlugin.extract({
        fallbackLoader: 'style',
        loader: 'css?minimize!sass!postcss'
      })
    }, {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    }, {
      test: /\.ts$/,
      exclude: /node_modules/,
      loaders: [
        'ts'
      ]
    }, {
      test: /.html$/,
      loaders: [
        'html'
      ]
    }]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: conf.path.src('index.ejs'),
      baseUrl: '/ui/'
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      conf.paths.src
    ),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.ProvidePlugin({
      'jQuery': 'jquery',
      '$': 'jquery',
      'window.jQuery': 'jquery',
      'window.Tether': 'tether'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true, // eslint-disable-line camelcase
        warnings: false
      } // eslint-disable-line camelcase
    }),
    new ExtractTextPlugin('index-[contenthash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ],
  postcss: () => [autoprefixer],
  output: {
    path: path.join(process.cwd(), conf.paths.dist),
    filename: '[name]-[hash].js'
  },
  resolve: {
    extensions: [
      '',
      '.webpack.js',
      '.web.js',
      '.js',
      '.ts'
    ]
  },
  entry: {
    app: `./${conf.path.src('index')}`,
    vendor: ['jquery', 'tether', 'bootstrap']
  },
  ts: {
    configFileName: 'tsconfig.json'
  },
  tslint: {
    configuration: require('../tslint.json'),
    formatter: "checkstyle",
    fileOutput: {
      dir: "./reports/checkstyle/",
      ext: "xml",
      clean: true
    }
  }
};
