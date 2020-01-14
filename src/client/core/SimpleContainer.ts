import Container from './Container'

class SimpleContainer implements Container {
    private readonly element: Element
    constructor() {
        this.element = document.createElement('div')
    }

    getRootElement(): Element {
        return this.element
    }

    getContainerElement(): Element {
        return this.element
    }
}

export default SimpleContainer
