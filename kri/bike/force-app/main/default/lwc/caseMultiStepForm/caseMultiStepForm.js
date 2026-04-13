import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
import USER_ID from '@salesforce/user/Id';

export default class CaseMultiStepForm extends LightningElement {
    @track step = 1;

    @track caseFields = {
        Product__c: '',
        Request_Type__c: '',
        Reason__c: '',
        Pay_To__c: '',
        Comments: '',
        Origin: 'Web'
    };

    selectedProductPrice = '';

    products = [
        { label: 'Product A', value: 'Product_A', price: '100' },
        { label: 'Product B', value: 'Product_B', price: '200' },
        { label: 'Product C', value: 'Product_C', price: '300' }
    ];

    requestTypeOptions = [
        { label: 'Return', value: 'Return' },
        { label: 'Exchange', value: 'Exchange' }
    ];

    reasonOptions = [
        { label: 'Defective', value: 'Defective' },
        { label: 'Wrong Item', value: 'Wrong Item' },
        { label: 'Not Satisfied', value: 'Not Satisfied' },
        { label: 'Others', value: 'Others' }
    ];

    payToOptions = [
        { label: 'Source', value: 'Source' },
        { label: 'Credits', value: 'Credits' }
    ];

    get isStep1() { return this.step === 1; }
    get isStep2() { return this.step === 2; }
    get isStep3() { return this.step === 3; }

    handleNextStep() {
        if (this.step < 3) this.step += 1;
    }
    handlePreviousStep() {
        if (this.step > 1) this.step -= 1;
    }

    handleFieldChange(event) {
        const field = event.target.name;
        this.caseFields[field] = event.target.value;

        if (field === 'Product__c') {
            const product = this.products.find(p => p.value === this.caseFields.Product__c);
            this.selectedProductPrice = product ? product.price : '';
        }
    }

    handleSubmit() {
        if (!this.caseFields.Product__c) {
            this.showToast('Error', 'Please select a Product before submitting.', 'error');
            return;
        }

        const fields = {
            Origin: this.caseFields.Origin,
            Subject: 'Customer Request',
            OwnerId: USER_ID
        };

        ['Product__c', 'Request_Type__c', 'Reason__c', 'Pay_To__c', 'Comments'].forEach(f => {
            if (this.caseFields[f]) fields[f] = this.caseFields[f];
        });

        console.log('Creating Case with fields:', fields);

        createRecord({ apiName: 'Case', fields })
            .then(caseRec => {
                console.log('✅ Case created successfully:', caseRec.id);
                this.showToast('Success', `Case created successfully: ${caseRec.id}`, 'success');
                this.resetForm();
            })
            .catch(error => {
                console.error('❌ Failed to create Case:', JSON.stringify(error, null, 2));
                let errMsg = 'Unknown error';
                if (error && error.body && error.body.message) errMsg = error.body.message;
                else if (typeof error === 'string') errMsg = error;
                this.showToast('Error', `Failed to create Case: ${errMsg}`, 'error');
            });
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({ title, message, variant }));
    }

    resetForm() {
        this.step = 1;
        this.caseFields = {
            Product__c: '',
            Request_Type__c: '',
            Reason__c: '',
            Pay_To__c: '',
            Comments: '',
            Origin: 'Web'
        };
        this.selectedProductPrice = '';
    }
}