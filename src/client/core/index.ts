export type ApplicationContext = {}

export interface Application<Context extends ApplicationContext> {
    run(context: Context): void
    stop(): void
}

export interface ContainerContext {
    rootElement: Element
    containerElement: Element
}
export abstract class Container {
    getContext(): ContainerContext {
        const rootElement = this.getRootElement()
        const containerElement = this.getContainerElement()

        if (!rootElement.contains(containerElement) &&
            (rootElement.shadowRoot && !rootElement.shadowRoot.contains(containerElement))
        ) {
            throw new Error('container element must be inside root element')
        }

        return {
            containerElement,
            rootElement,
        }
    }

    protected abstract getRootElement(): Element
    protected abstract getContainerElement(): Element
}
