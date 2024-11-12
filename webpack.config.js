const { Configuration } = require('webpack') // 智能提示
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')

/** 配置智能提示
* @type {Configuration}  
*/
const config = {
    entry: "./src/main.ts",
    output: {
        filename: '[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
          '@framework': path.resolve(__dirname, './Framework/src')
        }
      },
    module: {
        rules: [
            {
                test: /\.ts$/,    //解析ts
                loader: "ts-loader",
                options: {
                    configFile: path.resolve(process.cwd(), 'tsconfig.json'),
                    appendTsSuffixTo: [/\.vue$/]
                },
            },
            {
            test: /\.vue$/,
            use: "vue-loader"
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html")
        }),
        new VueLoaderPlugin()
    ],
    mode: "development",
    devServer: {
        // contentBase: path.resolve(__dirname, '../../..'),
        // watchContentBase: true,
        // inline: true,
        hot: true,
        port: 5000,
        host: 'localhost',
        compress: true,
        // useLocalIp: true,
        // writeToDisk: true,
        open: true,
      },
}
module.exports = config