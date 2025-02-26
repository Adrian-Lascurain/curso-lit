import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-footer")
export class AppFooter extends LitElement{

    static styles = css `
        :host{
            margin:0;
            padding:0;
        }

        footer{
            display:flex;
            justify-content: center;
            font-family: sans-serif, 'Times New Roman';
        }
    `;

    render(){
        return html `
            <footer>
                <p>Pie de página</p>
            </footer>
        `;
    }
}