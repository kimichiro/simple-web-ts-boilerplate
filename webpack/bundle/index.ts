import { html, ts, tsx } from './functions'

export const clientBundles = [
    tsx({ name: 'main' }),
    html({ name: 'main' }),
]

export const serverBundles = [
    ts({ name: 'server' }),
]
