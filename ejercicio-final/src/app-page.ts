import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import './app-header'
import './app-article'
import './app-footer'
import './Card'

@customElement("app-page")
export class AppPage extends LitElement{

    @property({
        type: String
    })
    title: string = "";

    userName: string = "";

    connectedCallback(): void {
        super.connectedCallback();
        this.beforeRender();
    }

    beforeRender(){
        let isLoged = localStorage.getItem("isLoged") ?? "false";
        if(isLoged === "true"){
            this.userName = localStorage.getItem("userName") ?? "";
        }else{
            window.location.href = "./src/pages/login.html";
        }
    }

    closeSession(){
        localStorage.clear()
        window.location.href = "./pages/login.html"
    }

    static styles = css `
        :host {
            display:flex;
            flex-direction: column;
            width:100vw;
            height:100vh;
            margin:0;
            padding:0;
        }
    `;
    
    render(){
        return html `
            <app-header title="${this.title}"></app-header>
            <app-article></app-article>
            <button @click=${this.closeSession}>Cerrar sesión</button>
            <app-card title="Usuario" description=${this.userName} imgSrc="https://cdn-icons-png.flaticon.com/512/7816/7816916.png"></app-card>
            <app-footer></app-footer>
            
        `;
    }
}