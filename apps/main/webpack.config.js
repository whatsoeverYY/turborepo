const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { ModuleFederationPlugin } = webpack.container

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    optimization: {
        minimize: false
    },
    mode: 'production',
    plugins: [
        new ModuleFederationPlugin({
            name: 'main1',
            remotes: {
                'sub': 'sub@http://localhost:8081/remoteEntrySub.js'
            },
            shared: ['md5']
        }),
        new HTMLWebpackPlugin(),
    ],
    module: {
        rules: [
            {test: /\.ts$/, loader: 'ts-loader'},
        ]
    }
}