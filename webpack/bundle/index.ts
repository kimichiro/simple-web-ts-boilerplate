import { html, ts, tsx } from './functions'

export const clientBundles = [
    tsx({ name: 'simple', path: 'client/pages/simple' }),
    html({ name: 'simple', path: 'client/pages/simple' }),
    
    tsx({ name: 'shadow', path: 'client/pages/shadow' }),
    html({ name: 'shadow', path: 'client/pages/shadow' }),
]

export const serverBundles = [
    ts({ name: 'server' }),
]
