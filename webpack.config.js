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
        filename: 'bundle.js',
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
            },
            {
                // 处理CSS文件
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                // 处理图片资源
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ['file-loader'],
            },
            {
                // 处理字体文件
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
            },
            {
                // 处理JavaScript高级语法
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html")
        }),
        new VueLoaderPlugin()
    ],
    mode: "development",
    devServer: {
        hot: true,
        port: 5000,
        host: 'localhost',
        compress: true,
        // useLocalIp: true,
        // writeToDisk: true,
        open: true,
        inline: true//实时刷新
    },
}
module.exports = config