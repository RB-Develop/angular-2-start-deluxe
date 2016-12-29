const webpack = require('webpack');
const conf = require('./gulp.config');
const path = require('path');

module.exports = {
  debug: true,
  devtool: 'inline-source-map',

  resolve: {
    extensions: [
      '',
      '.webpack.js',
      '.web.js',
      '.js',
      '.ts'
    ],
    modulesDirectories: [
      'node_modules',
      'src'
    ]
  },

  module: {
    loaders: [{
      test: /.json$/,
      loaders: [
        'json'
      ]
    }, {
      test: /\.(css|scss)$/,
      loaders: [
        'style',
        'css',
        'sass',
        'postcss'
      ]
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
    }],
    postLoaders: [{
      test: /\.(ts|js)$/,
      loader: 'istanbul-instrumenter',
      exclude: [
        /node_modules/,
        /\.(e2e|spec)\.ts$/
      ],
      query: {
        esModules: true
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
    })
  ],

  ts: {
    configFileName: 'tsconfig.json'
  }
};
