import express from 'express'

import config from './config'
import serve from './middlewares/serve'

const app = express()

serve(app, {
    path: config.path,
})

app.listen(config.port, () => {
    console.log(`Server launched at port ${config.port}`)
})
