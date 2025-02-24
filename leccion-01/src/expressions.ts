import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";


// El nombre de mi componente debe constar de dos o más elementos <Elemento1>-<Elemento2>
// Esto para eliminar colisiones con los elementos HTML nativos
@customElement("app-extensions")

export class Extensions extends LitElement{
    @property()
    bodyText = "Text in child expression";

    @property()
    label = "cerrar";

    @property({
        type: Boolean
    })
    editable: boolean = true;

    @property({
        type: Number
    })
    value: number = 7;

    @property({
        type: Array
    })
    animals = ["dog","cat","lion"];

    condition = true;

    eventClick(){
        this.editable = !this.editable;
    }

    render(){
        return html`
            <div>Child expression ${this.bodyText}</div>
            <button aria-label>${this.label}</button>
            <div>
                Boolean expression.
                <input type="text" ?disabled=${!this.editable} />
            </div>

            <div>
                Property expression.
                <input type="number" .valueAsNumber=${this.value} />
            </div>

            <div>
                Event
                <button @click=${this.eventClick}>Click me</button>
            </div>

            <div>
                render
                ${this.condition 
                    ? html`<p>Condition is True</p>` 
                    : html`<p>Condition is False</p>`}
            </div>

            <p>Render list</p>
            <ul>
                ${this.animals.map( animal => {
                    return html `<list>${animal}</list>`
                })}
            </ul>
        `;
    }
}