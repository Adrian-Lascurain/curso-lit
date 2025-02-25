import { css, html, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { InputType } from "./iptTypes.ts";

@customElement("app-input")
export class InputForm extends LitElement{

    @property({
        type: String
    })
    iptType: InputType = "text";

    @property({
        type: String
    })
    feedBackMessage: string = ""; 

    @property({
        type: String
    })
    title: string = '';

    @property({
        type: String
    })
    pattern: string = "";

    @property({
        type: String
    })
    value: string = ""

    regEx: RegExp = new RegExp("");

    @query('.ipt') ipt!: HTMLInputElement;
    @query('.message') message!: HTMLElement;

    validateRegEx(value: string): boolean{
        return this.regEx.test(value);
    }

    updateValue(e: Event){
        const ipt = e.target as HTMLInputElement;
        this.value = ipt.value;
    }

    showWarning(): void{
        this.message.classList.remove("d-none");
        this.message.classList.add("d-block");

        this.ipt.classList.remove("ipt-success");
        this.ipt.classList.add("ipt-warning");
    }

    showSuccess(): void{
        this.message.classList.remove("d-block");
        this.message.classList.add("d-none");

        this.ipt.classList.remove("ipt-warning");
        this.ipt.classList.add("ipt-success");
    }

    static styles = css `
        .ipt-warning{
            border: orange solid 2px;
        }

        .ipt-success{
            border: green solid 2px;
        }

        .ipt{
            border-radius: 10px;
            height: 25px;
            background-color: black;
            color: white;

        }

        .field-container{
            display:flex;
            flex-direction: column;
            gap: 3px;
            width: 100%;
            justify-content: center;
        }

        .title{
            font-size:25px;
            font-family: 'Arial';
            color: white;
        }

        .message{
            font-size:15px;
            font-family: 'Arial';
            margin-top: 5px;
            font-weight: bold;
            color: white;
        }

        .d-block{
            display:block;
        }

        .d-none{
            display:none;
        }
    `

    render(){
        this.regEx = new RegExp(this.pattern);
        return html `
            <div class="field-container">
                <label class="title">${this.title}</label>
                <input class="ipt" @change=${this.updateValue} type=${this.iptType} />
                <p class="message d-none">${this.feedBackMessage}</p>
            </div>
        `
    }
}