import { html, ts, tsx } from './functions'

export const clientBundles = [
    tsx({ name: 'main', path: 'client/main' }),
    html({ name: 'main', path: 'client/main' }),
]

export const serverBundles = [
    ts({ name: 'server' }),
]
