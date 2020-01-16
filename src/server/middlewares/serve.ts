import path from 'path'

import { Express } from 'express'

interface Options {
    path: string
}
export default ((app: Express, options: Options) => {
    const {
        path: runningPath,
    } = options

    app.get('/', (_, res) => {
        res.redirect('/simple.html')
    })

    app.get('*', (req, res) => {
        let requestPath = req.path
        if (requestPath.startsWith('/')) {
            requestPath = requestPath.substr(1)
        }
        res.sendFile(path.resolve(runningPath, requestPath))
    })
})
