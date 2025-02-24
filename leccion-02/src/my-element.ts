import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localeDateFromUTC } from "./date-utils";
import './date-displays'

@customElement("my-element")
export class MyElement extends LitElement{
  @property()
  date?: Date

  static styles = css `
    .title{
      color: blue;
      font-weight: bold;
      font-size: 32px
    }

    .sub-title{

      color: red;
      font-weight: bold;
      font-size: 25px
    }
  `

  _detectChanged(e: Event){
    const utcDate = (e.target as HTMLInputElement).valueAsDate;
    if (utcDate) {
      this.date = localeDateFromUTC(utcDate);
      console.log(this.date);
    }
  }

  _chooseToday(){
    this.date = new Date();
  }

  render(){
    return html `
      <p>Elige una fecha:</p>
      <input type="date" @change=${this._detectChanged}/>
      <p><button @click=${this._chooseToday}>Selecciona hoy</button></p>
      <p>Fecha elegida: 
        <date-display .date=${this.date}></date-display>
      </p>

      <hr>

      <label class=${true? "title": "sub-title"}>Hola lit</label>
    `
  }
}