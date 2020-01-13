import argv from './argv'
import { clientBundlePath } from './path'

const appVar = ((name: string) => `APP_CONFIG_${name.toUpperCase()}`)

export default {
    port: parseInt(argv[appVar('port')] || process.env[appVar('port')] || '3000', 10),
    path: argv[appVar('path')] || process.env[appVar('path')] || clientBundlePath,
}
