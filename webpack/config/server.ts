import webpack from 'webpack'
import nodeExternals from 'webpack-node-externals'
import CopyPlugin from 'copy-webpack-plugin'

import argv from '../argv'
import { absoluteFromRoot } from '../path'

const config: webpack.Configuration = {
    devtool: 'source-map',

    externals: [
        nodeExternals(),
    ],

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
        ],
    },

    output: {
        path: absoluteFromRoot('./build/server'),
    },

    plugins: [
        new CopyPlugin([
            { from: 'src/server/openapi.json', to: '../client' },
            { from: 'src/server/openapi.yaml', to: '../client' },
        ]),
    ],

    resolve: {
        extensions: ['.ts', '.tsx'],
    },

    target: 'node',
}

export default config
