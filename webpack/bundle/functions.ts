import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

import { absoluteFromRoot } from '../path'

interface Bundle {
    name: string
    path?: string
}

const resolvePath = (({ name, path }: Bundle, filename: string) => `src/${path ? path : name}/${filename}`)

export const ts = ((bundle: Bundle): webpack.Configuration => ({
    entry: {
        [bundle.name]: absoluteFromRoot(resolvePath(bundle, 'index.ts')),
    },
}))

export const tsx = ((bundle: Bundle): webpack.Configuration => ({
    entry: {
        [bundle.name]: absoluteFromRoot(resolvePath(bundle, 'index.tsx')),
    },
}))

export const html = ((bundle: Bundle): webpack.Configuration => ({
    plugins: [
        new HtmlWebpackPlugin({
            chunks: [bundle.name],
            filename: `${bundle.name}.html`,
            template: absoluteFromRoot(resolvePath(bundle, 'index.html')),
        }),
    ],
}))
