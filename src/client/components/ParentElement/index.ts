import {
    LitElement,
    TemplateResult,

    customElement,

    css,
    html,
} from 'lit-element'

@customElement('parent-element')
export class ParentElement extends LitElement {
    static get styles() {
        return [css`
            p {
                background-color: yellow;
                color: blue;
            }
        `]
    }

    render(): TemplateResult {
        return html`
            <p>par-ent</p>
        `
    }
}
