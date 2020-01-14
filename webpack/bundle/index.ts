import { html, ts, tsx } from './functions'

export const clientBundles = [
    tsx({ name: 'main', path: 'client/pages' }),
    html({ name: 'main', path: 'client/pages' }),
]

export const serverBundles = [
    ts({ name: 'server' }),
]
