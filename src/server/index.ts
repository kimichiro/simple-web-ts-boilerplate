import express from 'express'
import cookieParser from 'cookie-parser'
import { OpenApiValidator } from 'express-openapi-validator'
import {  } from 'tsoa'

import config from './config'
import serve from './middlewares/serve'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

new OpenApiValidator({
    apiSpec: `${config.path}/openapi.yaml`,
    validateRequests: true,
    validateResponses: true,
}).install(app).then(() => {
    app.get('/3dsecure', (req, res) => {
        console.log(req.body)
        res.json({})
    })

    app.get('/pet/{id}', (req, res) => {
        console.log(req.body)
        res.json({})
    })

    app.use(serve({
        path: config.path,
    }))

    app.use((err: any, _, res: any) => {
        res.status(err.status || 500).json({
            message: err.message,
            errors: err.errors,
        })
    })

    app.listen(config.port, () => {
        console.log(`Server launched at port ${config.port}`)
    })
})
