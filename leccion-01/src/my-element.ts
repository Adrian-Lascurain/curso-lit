import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-element")
export class myElement extends LitElement {

  static styles = css `
    p {
      color: blue;
      font-weight: bold;
      font-size: 25px
    }`;

  @property()
  nombre = "Adrián";

  render(){
    return html `<p>Hola, ${this.nombre}</p>`;
  }
}