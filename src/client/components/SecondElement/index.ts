import {
    TemplateResult,

    customElement,
    property,

    css,
    html,
} from 'lit-element'

import { ParentElement } from '../ParentElement'

@customElement('second-element')
export class SecondElement extends ParentElement {
    @property()
    readonly prop1: string = 'haha'

    @property()
    readonly prop2: boolean = false

    static get styles() {
        return [
            ...super.styles,
            css`
                p {
                    color: red;
                }
            `,
        ]
    }

    render(): TemplateResult {
        return html`
            <p ?prop2=${this.prop2} @click=${() => console.log('second get click!')}>${this.prop1}</p>
        `
    }
}
