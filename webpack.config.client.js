const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "browser",
    mode: "development",
    devtool: 'eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        path.join(CURRENT_WORKING_DIR, 'client/main.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            /*{
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader',
                    options: { url: false } // tell css-loader to not package images referenced in css. perhaps re-activate this for base64 injection
                    },
                ] 
                
            }*/
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.(jpeg|png|woff|woff2)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },  plugins: [
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NoEmitOnErrorsPlugin(),
          new MiniCssExtractPlugin(),
          new ExtractTextPlugin({filename: 'style.css'})
      ]
}
module.exports = config
