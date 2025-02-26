import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("app-header")
export class AppHeader extends LitElement{

    @property({
        type: String
    })
    title: string = "";
    static styles = css `
        :host{
            padding:0;
            margin:0;
        }    

        h1{
            font-family: sans-serif, 'Times New Roman';
            font-weight: bold;
            text-align: center;
        }
    `;

    render(){
        return html `
            <header>
                <h1>${this.title}</h1>
            </header>
        `;
    }
}