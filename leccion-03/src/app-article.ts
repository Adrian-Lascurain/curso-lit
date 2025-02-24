import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-article")
export class AppArticle extends LitElement{

    static styles = css `
        h1{
        font-family: sans-serif, 'Times New Roman';
        font-weight: bold;
        text-align: center;
        }
    `;

    render(){
        return html `
            <article>
                <p>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </article>
        `;
    }
}