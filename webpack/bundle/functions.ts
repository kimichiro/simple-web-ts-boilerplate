import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

import { absoluteFromRoot } from '../path'

interface Bundle {
    name: string
}

export const ts = (({ name }: Bundle): webpack.Configuration => ({
    entry: {
        [name]: absoluteFromRoot(`src/${name}/index.ts`),
    },
}))

export const tsx = (({ name }: Bundle): webpack.Configuration => ({
    entry: {
        [name]: absoluteFromRoot(`src/${name}/index.tsx`),
    },
}))

export const html = (({ name }: Bundle): webpack.Configuration => ({
    plugins: [
        new HtmlWebpackPlugin({
            chunks: [name],
            filename: `${name}.html`,
            template: absoluteFromRoot(`src/${name}/index.html`),
        }),
    ],
}))
