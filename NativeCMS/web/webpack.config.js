'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('webpack-html-plugin');
var HasteResolverPlugin = require('haste-resolver-webpack-plugin');

var IP = '0.0.0.0';
var PORT = 3000;
var NODE_ENV = process.env.NODE_ENV;
var ROOT_PATH = path.resolve(__dirname, '..');
var PROD = 'production';
var DEV = 'development';
let isProd = NODE_ENV === 'production';

var config = {
  paths: {
    src: path.join(ROOT_PATH, '.'),
    index: path.join(ROOT_PATH, 'index.web'),
  },
};

module.exports = {
  ip: IP,
  port: PORT,
  devtool: 'source-map',
  resolve: {
    alias: {
      'react-native/Libraries/EventEmitter/EventEmitter': 'events',
      // 'react-native/Libraries/EventEmitter/EventEmitter': 'react-native-eventemitter',      
      'react-native-simple-router/.styles': 'react-native-simple-router/styles.ios',
      'react-native': 'ReactWeb',
    },
    extensions: ['', '.js', '.jsx'],
  },
  entry: isProd? [
    config.paths.index
  ]: [
    'webpack-dev-server/client?http://' + IP + ':' + PORT,
    'webpack/hot/only-dev-server',
    config.paths.index,
  ],
  output: {
    path: path.join(__dirname, '../../public/web/output'),
    filename: 'bundle.js'
  },
  plugins: [
    new HasteResolverPlugin({
      platform: 'web',
      nodeModules: ['react-web']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(isProd? PROD: DEV),
      }
    }),
    isProd? new webpack.ProvidePlugin({
      React: "react"
    }): new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.jsx?$/,
      loader: 'react-hot',
      include: [config.paths.src],
      exclude: [/node_modules/]
    }, {
      test: /\.js?$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'latest']
      },
      include: [config.paths.src],
      exclude: [/node_modules/]
    }, {
      test: /\.js?$/,
      loader: 'babel',
      query: {
        presets: [ 'es2015', 'react', 'latest' ],
        plugins: ["transform-class-properties","syntax-object-rest-spread","transform-object-rest-spread"]
      },
      //add your modules here
      include: [
        path.join(ROOT_PATH, 'node_modules/react-native-vector-icons'),
        // path.join(ROOT_PATH, 'node_modules/react-native-simple-router'),
        // path.join(ROOT_PATH, 'node_modules/react-native-eventemitter'),
        path.join(ROOT_PATH, 'node_modules/react-native-elements')
      ],
      // exclude:[/\.png$/gi]
    },{
      // Match woff2 in addition to patterns like .woff?v=1.1.1.
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url',
      query: {
        limit: 50000,
        mimetype: 'application/font-woff',
        name: './fonts/[hash].[ext]'
      },
      include: [
        path.join(ROOT_PATH, 'web/custom_node_modules/react-native-vector-icons')
      ]
    },{
      // test: /\.ttf$|\.eot$/,
      test: /\.(jpe?g|png|gif|svg|ttf|eot)$/i,
      loader: 'file',
      query: {
        // name: 'font/[hash].[ext]'
        name: 'file/[hash].[ext]'
      },
      include: [
        path.join(ROOT_PATH, 'web/custom_node_modules/react-native-vector-icons'),
        // path.join(ROOT_PATH, 'web/custom_node_modules/react-native-simple-router')
      ]
    },{ 
      test: /\.css$/, 
      loader: "style-loader!css-loader",
      include: [
        path.join(ROOT_PATH, 'web/custom_node_modules/react-native-vector-icons')
      ]
    }
    ]
  }
};
