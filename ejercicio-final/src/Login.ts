import { css, html, LitElement } from "lit";
import { customElement, property, queryAll } from "lit/decorators.js";
import './InputForm'
import { InputForm } from "./InputForm";

@customElement("app-login")

export class Loging extends LitElement{

    @property({
        type: Boolean
    })
    disabled: boolean = true;

    userFlag: boolean = false;
    passwordFlag: boolean = false;
    userName: string = "";

    @queryAll("app-input") loginInputs!: NodeListOf<InputForm>;

    userChanged(e: Event):void {
        const userField = e.target as InputForm;
        
        if(userField.validateRegEx(userField.value)){
            this.userName = userField.value;
            this.userFlag = true;
            userField.showSuccess();
        }else{
            this.userFlag = false;
            userField.showWarning();
        }
        
        this.manageButton();
    }

    passwordChanged(e: Event){
        const passwordField = e.target as InputForm;
    
        if(passwordField.validateRegEx(passwordField.value)){
            this.passwordFlag = true;
            passwordField.showSuccess();
        }else{
            this.passwordFlag = false;
            passwordField.showWarning();
        }

        this.manageButton()
    }

    manageButton(): void{
        this.userFlag && this.passwordFlag? this.disabled = false : this.disabled = true;
    }

    connectedCallback(): void {
        super.connectedCallback();
        this.beforeRender();
    }

    beforeRender(){
        let isLoged = localStorage.getItem("isLoged") ?? "false";
        if(isLoged === "true") window.location.href = "../index.html";
    }

    login(){
        localStorage.setItem("userName",this.userName)
        localStorage.setItem("isLoged","true")
        window.location.href = "../index.html"
    }

    static styles = css `

        :host{
            display:flex;
            align-items: center;
            margin:0;
            padding:0;
        }        

        .login-container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            gap: 10px;
            width: 50%;
            height: 100vh;
            margin-left: auto;
            margin-right: auto;
            background-color: #242424;
        }

        .send-btn{
            display:flex;
            justify-content: center;
            align-items: center;
            height:30px;
            width: 300px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 30px;
        }

        .ipt{
            margin-bottom: 10px;
        }
        
    `

    render(){
        return html `
            <div class="login-container">
                <form>
                    <app-input class="ipt" @blur=${this.userChanged} title= "Username" pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$' feedBackMessage="Correo inválido"></app-input>  
                    <app-input class="ipt" @blur=${this.passwordChanged} title= "Password" pattern='^.+$' iptType="password" feedBackMessage= "contraseña vacía"></app-input> 
                    <button class="send-btn" @click=${this.login} ?disabled=${this.disabled}>Login</button>
                </form>
            </div>
        `
    };

}