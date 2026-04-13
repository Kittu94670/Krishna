// LWC ki needed imports teesukuntunnam
import { LightningElement, track } from 'lwc';

// Apex method ni import cheskuntunnam (backend calculation)
import calculate from '@salesforce/apex/CalculatorController.calculate';

export default class CalculatorAssignment extends LightningElement {

    // result ni UI lo auto refresh kavadaniki @track use chestunnam
    @track result;

    // user ichina numbers store cheyadaniki variables
    num1;
    num2;

    // user input lo values enter chesthe e method run avtundi
    onInputChangeHandler(event) {

        // ye input field lo type chesaro ani name tiskuntunnam
        const name = event.target.name;

        // first number ayithe num1 lo store chestunnam
        if (name === 'Number1') 
            this.num1 = event.target.value;

        // second number ayithe num2 lo store chestunnam
        if (name === 'Number2') 
            this.num2 = event.target.value;
    }

    // button click ayithe e method run avtundi (Add, Subtract etc.)
    onButtonCLick(event) {

        // user click chesina button label (Add/Subtract/Multiply/Divide)
        const operation = event.target.label;

        // Apex method ki values pass chestunnam
        calculate({ 
            num1: this.num1,   // first number
            num2: this.num2,   // second number
            operation: operation  // operation type
        })

        // Apex nundi success result vaste
        .then((res) => {
            // result ni UI lo chupinchadaniki set chestunnam
            this.result = res;
        })

        // Apex lo error vaste (ex: divide by zero)
        .catch((error) => {
            // error message ni result lo show chestunnam
            this.result = error.body.message;
        });
    }
}