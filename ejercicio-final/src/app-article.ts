import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-article")
export class AppArticle extends LitElement{

    static styles = css `
        :host{
            display:flex;
            justify-content:center;
            width:100vw;
            height:100vh;
            flex-grow:1;
        }

        .arti{
            display:flex;
            flex-direction: column;
            justify-content:start;
            align-items:center;
        }
        h1{
            font-family: sans-serif, 'Times New Roman';
            font-weight: bold;
            text-align: center;
        }
        
        p{
            text-align: center;
        }
    `;

    render(){
        return html `
            <article class="arti">
                <p>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>                
            </article>
        `;
    }
}