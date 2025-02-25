import { Task } from "@lit/task";
import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { pseudoFetch } from "./pseudofetch";
import { repeat } from "lit/directives/repeat.js";

@customElement("app-async")
export class AppAsync extends LitElement{

    private fetchTask = new Task(this, async() => await pseudoFetch(), () => [])

    static styles = css `
        .cards-container{
            display: flex;
            gap: 10px;
            flex-wrap:wrap;
        }
    `;

    render(){
        return html `
            <div class="cards-container">
                ${this.fetchTask.render({
                    initial: () => html`<span> Iniciando comunicación </span>`,
                    pending: () => html`<span>Cargando informacion</span>`,
                    complete: (data:any) => html `
                        ${repeat(data, (d: any) => html `
                                    <app-card title=${d.title} description=${d.description} imgSrc=${d.imgSrc} alt=${d.alt}></app-card>
                                `)}
                    `  
                })}
            </div>
        `;
    }
}