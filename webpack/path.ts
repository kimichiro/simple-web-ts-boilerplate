import path from 'path'

export const rootDir = path.resolve(__dirname, `..`)

export const absoluteFromRoot = ((...paths: string[]) => {
    return path.resolve.apply(undefined, [rootDir, ...paths])
})
