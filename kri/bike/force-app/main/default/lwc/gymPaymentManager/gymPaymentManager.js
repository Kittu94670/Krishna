import { LightningElement, api, wire } from 'lwc';
import getMemberDetails from '@salesforce/apex/GymPaymentController.getMemberDetails';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class GymPaymentManager extends LightningElement {

    // 🔥 Record Context Id
    @api recordId;

    amount = 0;
    memberName = '';

    // 🔥 DEBUG — Check recordId
    renderedCallback() {
        console.log('RecordId from Record Page →', this.recordId);
    }

    // 🔥 Fetch Member + Plan Fee
    @wire(getMemberDetails, { memberId: '$recordId' })
    wiredMember({ data, error }) {

        if (data) {

            console.log('Member Data →', data);

            this.memberName = data.Name;

            if (data.Membership_Plan__r) {
                this.amount = data.Membership_Plan__r.Fee__c;
            } else {
                this.amount = 0;
            }

        } else if (error) {
            console.error('Wire Error →', error);
        }
    }

    // 🔥 Override Submit
    handleSubmit(event) {

        event.preventDefault();

        const fields = event.detail.fields;

        // Auto populate
        fields.Member__c = this.recordId;
        fields.Amount__c = this.amount;

        console.log('Submitting Fields →', fields);

        this.template
            .querySelector('lightning-record-edit-form')
            .submit(fields);
    }

    handleSuccess() {

        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Payment Recorded',
                variant: 'success'
            })
        );
    }
}