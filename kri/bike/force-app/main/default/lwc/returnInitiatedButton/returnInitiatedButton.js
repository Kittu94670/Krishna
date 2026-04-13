import { LightningElement, api } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ReturnInitiatedButton extends LightningElement {
    @api recordId;

    // This method will be invoked automatically when user clicks the Quick Action
    @api invoke() {
        if (!this.recordId) return;

        const fields = {
            Id: this.recordId,
            Stage__c: 'Return Instructions Sent'
        };

        updateRecord({ fields })
            .then(() => {
                console.log('fields,',fields);
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: ' Return Instructions sent succesfully',
                        variant: 'success'
                    })
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: error.body?.message || error.message,
                        variant: 'error'
                    })
                );
            });
    }
}