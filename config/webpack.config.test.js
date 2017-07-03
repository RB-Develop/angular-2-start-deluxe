const webpack = require('webpack');
const conf = require('./gulp.config');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: [
      '.webpack.js',
      '.web.js',
      '.js',
      '.ts'
    ],
    modules: [
      'node_modules',
      'src'
    ]
  },

  module: {
    rules: [{
      test: /.json$/,
      use: [
        'json-loader'
      ]
    }, {
      test: /\.(css|scss)$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
        'postcss-loader'
      ]
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
    }, {
      enforce: 'post',
      test: /\.(ts|js)$/,
      exclude: [
        /node_modules/,
        /\.(e2e|spec)\.ts$/
      ],
      use: {
        loader: 'istanbul-instrumenter-loader',
        options: {
          esModules: true
        }
      }
    }]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      conf.paths.src
    ),
    new webpack.SourceMapDevToolPlugin({
      filename: null, // if no value is provided the sourcemap is inlined
      test: /\.(ts|js)($|\?)/ // process .js and .ts files only
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ]
};