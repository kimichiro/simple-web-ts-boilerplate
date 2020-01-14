import webpack from 'webpack'

import argv from '../argv'
import { absoluteFromRoot } from '../path'

const config: webpack.Configuration = {
    devtool: 'source-map',

    mode: argv.mode === 'production' ? 'production' : 'development',

    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                exclude: /node_modules/,
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            interpolate: true,
                            minimize: false,
                        },
                    },
                ],
            },
        ],
    },

    output: {
        path: absoluteFromRoot('./build/client'),
        filename: 'js/[name].js',
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.html'],
    },

    target: 'web',
}

export default config
