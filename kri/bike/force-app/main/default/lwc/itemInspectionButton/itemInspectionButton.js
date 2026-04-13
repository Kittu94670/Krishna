import { LightningElement, api } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ItemInspectionButton extends LightningElement {
    @api recordId;

    @api invoke() {
        if (!this.recordId) return;

        const fields = {
            Id: this.recordId,
            Stage__c: 'Refund Issued'
        };

        updateRecord({ fields })
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Your refund has been succesfully issued',
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