import merge from 'webpack-merge'

import argv from './webpack/argv'
import clientConfig from './webpack/config/client'
import serverConfig from './webpack/config/server'
import { clientBundles, serverBundles } from './webpack/bundle'

const config = argv['build-bundles'] === 'server' ? serverConfig : clientConfig
const bundles = argv['build-bundles'] === 'server' ? serverBundles : clientBundles

export default merge(
    config,
    ...bundles,
)
