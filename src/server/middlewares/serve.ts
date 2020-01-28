import path from 'path'

import { Router } from 'express'

interface Options {
    path: string
}
const middleware = (({ path: runningPath }: Options) => {
    const router = Router()
    
    router.get('/', (_, res) => {
        res.redirect('/main.html')
    })
    
    router.get('*', (req, res) => {
        const requestPath = req.path
        if (requestPath.startsWith('/')) {
            res.sendFile(path.resolve(runningPath, requestPath.substr(1)))
        }
    })

    return router
});

export default middleware
