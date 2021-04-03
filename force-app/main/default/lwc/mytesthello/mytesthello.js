import { LightningElement,track } from 'lwc';

export default class Mytesthello extends LightningElement {
    @track greeting = 'World';
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}