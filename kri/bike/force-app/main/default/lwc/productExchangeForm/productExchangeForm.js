import { LightningElement, track } from 'lwc';
import USER_ID from '@salesforce/user/Id';
import getUserName from '@salesforce/apex/ProductExchangeHelper.getUserName';
import getOrderedProducts from '@salesforce/apex/ProductExchangeHelper.getOrderedProducts';

export default class ProductExchangeForm extends LightningElement {
    @track customerName;
    @track productOptions = [];
    @track selectedProduct;
    @track requestType;
    @track reason;
    @track comments;

    @track isReturnModalOpen = false;
    @track amountPayable = 0;
    @track payTo;
    payToOptions = [
        { label: 'Source', value: 'Source' },
        { label: 'Credits', value: 'Credits' }
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

    connectedCallback() {
        // Customer Name
        getUserName({ userId: USER_ID })
            .then(result => { this.customerName = result; })
            .catch(error => { console.error(error); });

        // Products
        getOrderedProducts({ userId: USER_ID })
            .then(result => {
                this.productOptions = result.map(prod => ({ label: prod.Name, value: prod.Id }));
            })
            .catch(error => { console.error(error); });
    }

    handleProductChange(event) { this.selectedProduct = event.detail.value; }
    handleRequestTypeChange(event) { this.requestType = event.detail.value; }
    handleReasonChange(event) { this.reason = event.detail.value; }
    handleCommentsChange(event) { this.comments = event.detail.value; }
    handlePayToChange(event) { this.payTo = event.detail.value; }

    handleSubmit() {
        if(this.requestType === 'Return') {
            // Show Return Modal
            this.amountPayable = 100; // Placeholder, can fetch dynamically
            this.isReturnModalOpen = true;
        } else if(this.requestType === 'Exchange') {
            this.startFlow();
        }
    }

    handleCancel() {
        this.selectedProduct = null;
        this.requestType = null;
        this.reason = null;
        this.comments = '';
    }

    handleModalCancel() { this.isReturnModalOpen = false; }

    handleModalConfirm() {
        this.isReturnModalOpen = false;
        this.startFlow();
    }

    startFlow() {
        const flow = this.template.querySelector('lightning-flow');
        const flowInputs = [
            { name: 'ProductId', type: 'String', value: this.selectedProduct },
            { name: 'RequestType', type: 'String', value: this.requestType },
            { name: 'Reason', type: 'String', value: this.reason },
            { name: 'Comments', type: 'String', value: this.comments },
            { name: 'PayTo', type: 'String', value: this.payTo },
            { name: 'AmountPayable', type: 'Currency', value: this.amountPayable },
            { name: 'CustomerId', type: 'String', value: USER_ID }
        ];
        flow.startFlow('lwc_to', flowInputs);
        this.handleCancel(); // Reset form after flow starts
    }
}