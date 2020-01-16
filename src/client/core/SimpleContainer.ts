import { Container } from '.'

export class SimpleContainer extends Container {
    private readonly element: Element
    constructor() {
        super()

        this.element = document.createElement('div')
    }

    getRootElement(): Element {
        return this.element
    }

    getContainerElement(): Element {
        return this.element
    }
}
