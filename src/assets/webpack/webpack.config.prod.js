const path = require('path'), resolve = path.resolve,
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    // CleanWebpackPlugin = require('clean-webpack-plugin'),
    UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
    OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

let entries = {};
try{
    entries = require(resolve(__dirname, '..', 'entry.js'));
}catch (e){
    console.error('Entry file not found.');
    process.exit(1);
}
let keys = Object.keys(entries);
if(!keys[0]){
    console.error('Entry file is empty.');
    process.exit(0);
}
keys.map((entry)=>{
    entries[entry] = resolve(__dirname, '..', entries[entry]);
});

module.exports = {
    entry: entries,
    output: {
        filename: '[name].js',
        path: '/home/node/out',
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/react'],
                        }
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                        }
                    },
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|gif|jpg|jpeg|woff|woff2|eot|ttf|otf|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash].[ext]',
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(['out'], {
        //     root: resolve(__dirname, '..')
        // }),
        new MiniCssExtractPlugin('[name].css')
    ]
};
