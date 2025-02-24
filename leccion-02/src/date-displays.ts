import { html, LitElement, PropertyValues } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { isSameDate } from "./date-utils";

@customElement("date-display")
export class DateDisplay extends LitElement{

    @property({
        type: Date,
        hasChanged: (value?: Date, oldValue?: Date) => {
            return isSameDate(value,oldValue);
        }
    })
    date?: Date;

    @query("#datefield")
    datefield!: HTMLSpanElement

    frames = [
        {backgroundColor: '#fff'},
        {backgroundColor: '#324fff'},
        {backgroundColor: '#fff'}
    ]

    render(){
        return html `
            <span>
                ${this.date?.toLocaleString()}
            </span>
        `
    }

    updated(changed: PropertyValues<this>){
        if(changed.has('date')){
            console.log("update",changed.get('date'))
            this.datefield.animate(this.frames,1000)
        }
    }
}