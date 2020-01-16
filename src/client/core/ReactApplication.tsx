import * as React from 'react'
import * as ReactDom from 'react-dom'

import { Application, ApplicationContext, Container } from '.'

interface ReactApplicationContext extends ApplicationContext {
    element: React.ReactElement
}

export class ReactApplication implements Application<ReactApplicationContext> {
    private readonly container: Container
    constructor(container: Container) {
        this.container = container
    }

    run({ element }: ReactApplicationContext): void {
        const { containerElement, rootElement } = this.container.getContext()
        if (document.body.contains(rootElement)) {
            throw new Error('Application is already run')
        }

        ReactDom.render((
            <>
                {element}
            </>
        ), containerElement)

        document.body.appendChild(rootElement)
    }

    stop(): void {
        const { rootElement } = this.container.getContext()
        if (!document.body.contains(rootElement)) {
            throw new Error('Application is not run yet')
        }
        document.body.removeChild(rootElement)
    }
}
