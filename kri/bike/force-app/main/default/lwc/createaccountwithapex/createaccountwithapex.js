import { LightningElement, track } from 'lwc';
import createAccount from '@salesforce/apex/AccountController.createAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateAccountApex extends LightningElement {

    @track name = '';
    @track phone = '';

    handleName(event) {
        this.name = event.target.value;
    }

    handlePhone(event) {
        this.phone = event.target.value;
    }

    handleCreate() {

        createAccount({ name: this.name, phone: this.phone })
            .then(result => {

                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account Created! Id: ' + result,
                        variant: 'success'
                    })
                );

                // Clear fields
                this.name = '';
                this.phone = '';

            })
            .catch(error => {

                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: error.body.message,
                        variant: 'error'
                    })
                );

            });
    }
}