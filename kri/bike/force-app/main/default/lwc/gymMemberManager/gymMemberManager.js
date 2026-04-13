import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import { createRecord } from 'lightning/uiRecordApi';

export default class GymMemberManager extends NavigationMixin(LightningElement) {

    handleSubmit(event) {

        event.preventDefault(); // Stop default save

        const fields = event.detail.fields;
        const status = fields.Status__c;

        // Record input
        const recordInput = {
            apiName: 'Member__c',
            fields: fields
        };

        // Manual create
        createRecord(recordInput)
            .then(record => {

                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Member Created',
                        variant: 'success'
                    })
                );

                // 🔥 Navigate only Active
                if (status === 'Active') {

                    this[NavigationMixin.Navigate]({
                        type: 'standard__recordPage',
                        attributes: {
                            recordId: record.id,
                            objectApiName: 'Member__c',
                            actionName: 'view'
                        }
                    });
                }
            })
            .catch(error => {
                console.error(error);
            });
    }
}