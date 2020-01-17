import {
    LitElement,
    PropertyValues,
    TemplateResult,

    customElement,
    property,

    css,
    html,
} from 'lit-element'

@customElement('first-element')
export class FirstElement extends LitElement {
    @property({ type: String })
    readonly prop1: string = 'hey'

    @property({ type: Number })
    readonly prop2: number = 111

    @property({ type: Number })
    readonly proP2: number = 222

    @property({ type: Number })
    readonly pRop2: number = 333

    @property({ type: Object })
    readonly object: Object = {}

    @property({ type: Array })
    readonly array: Array<any> = []

    static get styles() {
        return css`
            :host(first-element) {
                color: var(--my-color, lightblue);
                font-weight: bold;
            }
        `
    }

    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
        console.log('attribute change: ', name, newValue);
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    firstUpdated(changedProperties: PropertyValues): void {
        console.log(changedProperties)
    }

    render(): TemplateResult {
        return html`
            <p>first me! ${this.prop2} ${this.proP2} ${this.pRop2} ${JSON.stringify(this.object)} ${JSON.stringify(this.array)}</p>
            <p @click=${this.onClick}>
                <second-element attr="hello" .prop1=${this.prop1} .prop2=${true}></second-element>
            </p>
        `
    }

    onClick(): void {
        console.log(`onclick: ${this.prop2} ${this.proP2} ${this.pRop2} ${JSON.stringify(this.object)} ${JSON.stringify(this.array)}`)

        this.dispatchEvent(new CustomEvent('hello'))
        this.dispatchEvent(new MouseEvent('click'))
    }

    handleEvent(): void {
        console.log(111)
    }
}
