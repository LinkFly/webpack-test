const path = require('path');
const WildcardsEntryWebpackPlugin = require('wildcards-entry-webpack-plugin');

const srcDirname = "Logo";
const outputDir = path.resolve(process.cwd(), 'build/');
const sourcesDir = path.resolve(process.cwd(), srcDirname);

const config = {
    "target": "web",
    "mode": "none",

    "entry": WildcardsEntryWebpackPlugin.entry(sourcesDir + '/**/index.tsx'),

    "module": {
        "rules": [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loader: "awesome-typescript-loader"
            },
            {
              test: /\.less$/,
              use: [{
                loader: 'style-loader' // creates style nodes from JS strings
              }, {
                loader: 'css-loader' // translates CSS into CommonJS
              }, {
                loader: 'less-loader' // compiles Less to CSS
              }]
            },
            {
              test: /\.(jpe?g|png|gif|svg)$/,
              use: {
                loader: 'url-loader',
                options: {
                  limit: 30720,
                  name: '[path][name].[ext]',
                  outputPath: 'img/'
                }
              }
            }
        ]
    },

    "output": {
        "path": outputDir,
        "filename": '[name].js',
        "libraryTarget": "commonjs"
    }
};


module.exports = config;
