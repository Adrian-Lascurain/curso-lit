import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import './app-header'
import './app-article'
import './app-footer'

@customElement("app-page")
export class AppPage extends LitElement{
    render(){
        return html `
            <app-header></app-header>
            <app-article></app-article>
            <app-footer></app-footer>
        `;
    }
}