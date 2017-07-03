const webpack = require('webpack');
const conf = require('./gulp.config');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.ts$/,
      exclude: /node_modules/,
      use: {
        loader: 'tslint-loader',
        options: {
          configuration: require('../tslint.json'),
          formatter: 'checkstyle',
          fileOutput: {
            dir: './reports/checkstyle/',
            ext: 'xml',
            clean: true
          }
        }
      }
    }, {
      test: /.json$/,
      use: [
        'json-loader'
      ]
    }, {
      test: /\.(css|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?minimize!sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')()]
            }
          }
        ]
      })
    }, {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      use: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      use: 'url-loader?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: 'url-loader?limit=10000&mimetype=image/svg+xml'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      use: 'file-loader'
    }, {
      test: /\.ts$/,
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader',
        options: {
          configFileName: 'tsconfig.json'
        }
      }
    }, {
      test: /.html$/,
      use: [
        'html-loader'
      ]
    }]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
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
      'window.Tether': 'tether',
      'Tether': 'tether'
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
  output: {
    path: path.join(process.cwd(), conf.paths.dist),
    filename: '[name]-[hash].js'
  },
  resolve: {
    extensions: [
      '.webpack.js',
      '.web.js',
      '.js',
      '.ts'
    ]
  },
  entry: {
    app: `./${conf.path.src('index')}`,
    vendor: ['jquery', 'tether', 'bootstrap']
  }
};