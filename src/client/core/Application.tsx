import * as React from 'react'
import * as ReactDom from 'react-dom'

import Container from './Container'

class Application {
    private readonly container: Container
    constructor(container: Container) {
        this.container = container
    }

    run(element: React.ReactElement): void {
        const rootElement = this.container.getRootElement()
        if (document.body.contains(rootElement)) {
            throw new Error('Application is already run')
        }

        const containerElement = this.container.getContainerElement()

        ReactDom.render(
            element,
            containerElement,
        )

        document.body.appendChild(rootElement)
    }

    stop(): void {
        const rootElement = this.container.getRootElement()
        if (!document.body.contains(rootElement)) {
            throw new Error('Application is not run yet')
        }

        const containerElement = this.container.getContainerElement()

        document.body.removeChild(containerElement)
    }
}

export default Application
