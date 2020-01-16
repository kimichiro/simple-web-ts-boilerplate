import { css } from 'styled-components'

import { Container } from '.'

export class ShadowContainer extends Container {
    private readonly rootElement: Element
    private readonly shadowRoot: ShadowRoot
    private readonly styleElement: Element
    private readonly containerElement: Element
    constructor() {
        super()

        this.rootElement = document.createElement('div')

        this.shadowRoot = this.rootElement.attachShadow({ mode: 'open' })

        this.styleElement = document.createElement('style')
        const styles = css`
            div {
                background-color: darkgray;
            }
        `
        this.styleElement.innerHTML = styles[0]?.toString() || ''

        this.containerElement = document.createElement('div')
        this.containerElement.setAttribute('slot', 'container')

        this.shadowRoot.appendChild(this.styleElement)
        this.shadowRoot.appendChild(this.containerElement)
    }

    getRootElement(): Element {
        return this.rootElement
    }

    getContainerElement(): Element {
        return this.containerElement
    }
}
