import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("app-upanddown")

export class UpAndDown extends LitElement{
    @property({
        type: Number
    })
    counter: number = 0;

    @property({
        type: Boolean
    })
    disabled: boolean = true;

    @property({
        type: Number
    })
    step: number = 0;

    decreaseCounter(){
        this.counter --;
        return this.counter;
    }

    increaseCounter(){
        this.counter++;
        return this.counter;
    }

    static styles = css `
        :host {
            gap: 5px;
            display: flex;
        }
    
        #counter-container{
            display: flex;
            gap: 5px;
            justify-content: center;
            margin-top: 45vh;
            scale: 2;
        }
    
        input{
            text-align: center;
            font-size: 20px;
            border-style: solid;
            border-width: 1.5px;
            border-color: black;
            border-radius: 10px;
            background-color: pink;
            font-weight: bold;
        }

        button{
            text-align: center;
            height: 30px;
            width: 30px;
            font-size: 20px;
        }
    `

    render(){
        return html `
            <div>
                <div id="counter-container">
                    <button @click=${this.decreaseCounter}>-</button>
                    <input type="number" ?disabled=${this.disabled} .value= ${this.counter}/>
                    <button @click=${this.increaseCounter}>+</button>    
                </div>    
            </div>
        `;
    }
}