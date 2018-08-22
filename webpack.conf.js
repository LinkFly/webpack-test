const WildcardsEntryWebpackPlugin = require('wildcards-entry-webpack-plugin');

const outputDir = path.resolve(process.cwd(), 'build/');
const sourcesDir = path.resolve(process.cwd(), 'sources/');


const config = {
    "target": "web",
    "mode": "none",

    "entry": WildcardsEntryWebpackPlugin.entry('./sources/**/index.tsx'),

    "module": {
        "rules": [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loader: "awesome-typescript-loader"
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
