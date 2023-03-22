const webpack = require('webpack')
const { ModuleFederationPlugin } = webpack.container
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    plugins: [
        new ModuleFederationPlugin({
            name: 'sub',
            filename: 'remoteEntrySub.js',
            exposes: {
                './time': './src/utils/time.ts',
                './date': './src/utils/date.ts'
            },
            shared: ['md5']
        }),
        new HTMLWebpackPlugin()
    ],
    optimization: {
        minimize: false
    },
    devServer: {
      port: 8081
    },
    resolve: {
      extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {test: /\.ts$/, loader: 'ts-loader'}
        ]
    }
}