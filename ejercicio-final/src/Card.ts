import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("app-card")
export class AppCard extends LitElement{

    @property({
        type: String
    })
    title: string = "";

    @property({
        type: String
    })
    description: string = "";

    @property({
        type: String
    })
    imgSrc: string = "";

    @property({
        type: String
    })
    alt: string = "";


    static styles = css `
    :host{
        display:flex;
        justify-content: center;
    }    

    .card-body{
        width: 300px;
        height: 400px;
        background-color: #444444;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        border: 2px solid black;
        overflow: hidden;
    }

    .img-figure{
        width: 100%;
        height: 225px;
        margin:0;
    }

    .card-img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        
    }

    .title{
        margin-top: 5px;
        margin-bottom: 0px;
        text-align: center;
        font-size: 28px;
        font-family: arial;
        font-weight: bold;
    }

    .description{
        margin-top: 5px;
        margin-left: 15px;
        margin-right: 15px;
        flex-grow: 1;
        font-family: arial;
        overflow-y: auto;
        overflow-wrap: break-word;
        }
    `;
    render(){
        return html `
            <div class="card-body">
                <figure class="img-figure">
                    <img class="card-img" src=${this.imgSrc} alt=${this.alt} />
                </figure>
                <h2 class="title">${this.title}</h2>
                <p class="description">${this.description}</p>
            </div>
        `;
    }
}