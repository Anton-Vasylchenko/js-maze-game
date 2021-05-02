const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

function optimization() {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config;
}

const cssLoaders = extra => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '../',
      },
    },
    'css-loader'
  ]

  if (extra) {
    loaders.push(extra)
  }
  return loaders;
}

const babelOptions = preset => {
  const opt = {
    presets: [
      '@babel/preset-env'
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties'
    ]
  }

  if (preset) {
    opt.presets.push(preset)
  }

  return opt;
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './js/index.js',]
  },
  output: {
    filename: isProd ? 'js/[name].[hash].js' : '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  optimization: optimization(),

  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin([{
      from: path.resolve(__dirname, 'src/img'),
      to: path.resolve(__dirname, 'dist/img'),
    }
    ]),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders()
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader')
      },
      {
        test: /\.less$/,
        use: cssLoaders('less-loader')
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[ext]',
          },
        }
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[hash].[ext]',
          }
        }
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      {
        test: /\.csv$/,
        use: ['csv-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: "babel-loader",
          options: babelOptions()
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: {
          loader: "babel-loader",
          options: babelOptions('@babel/preset-typescript')
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: {
          loader: "babel-loader",
          options: babelOptions('@babel/preset-react')
        }
      }
    ]
  },
  devServer: {
    port: 9000,
  },
  devtool: isDev ? 'source-map' : '',
}

