import { LightningElement, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import USER_ID from '@salesforce/user/Id';
import USER_NAME_FIELD from '@salesforce/schema/User.Name';
import { getRecord } from 'lightning/uiRecordApi';

import getAllOrders from '@salesforce/apex/KrishnaCls.getAllOrders';
import createCaseWithRecordType from '@salesforce/apex/KrishnaCls.createCaseWithRecordType';

const FIELDS = [USER_NAME_FIELD];

export default class Krishnalwc extends NavigationMixin(LightningElement) {
    @track orders = [];
    @track userName;
    @track isModalOpen = false;
    @track selectedOrder;
    @track caseFields = {
        Request_Type__c: '',
        Reason__c: '',
        Pay_To__c: '',
        Description: ''
    };
    @track ordersLoaded = false; // NEW: tracks if orders are loaded

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

    @wire(getRecord, { recordId: USER_ID, fields: FIELDS })
    wiredUser({ data }) {
        if (data) this.userName = data.fields.Name.value;
    }

    // ===============================
    // Load all orders (on button click)
    // ===============================
    async loadOrders() {
        try {
            const data = await getAllOrders();
            this.orders = data;
            this.ordersLoaded = true; // now show tiles
        } catch (error) {
            this.showToast('Error', 'Failed to load orders: ' + (error.body?.message || error.message), 'error');
        }
    }

    handleLoadOrdersClick() {
        this.loadOrders();
        this.showToast('Info', 'Loading all orders...', 'info');
    }

    get getOrdersForTemplate() {
        return this.orders.map(order => ({
            ...order,
            displayProductName: order.Product__r ? order.Product__r.Name : 'No Product',
            displayOrderDate: order.Effective_Date__c ? new Date(order.Effective_Date__c).toLocaleDateString() : 'N/A',
            displayRefundAmount: order.Refund_Amount__c != null 
                ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(order.Refund_Amount__c)
                : '$0.00'
        }));
    }

    handleTileClick(event) {
        const orderId = event.currentTarget.dataset.id;
        this.selectedOrder = this.orders.find(o => o.Id === orderId);

        const today = new Date();
        const orderDate = new Date(this.selectedOrder.Effective_Date__c);
        const diffTime = today - orderDate;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);

        if (diffDays > 7) {
            this.showToast(
                '🚫💥 RETURN/EXCHANGE BLOCKED! 💥🚫',
                '😱 Whoa! Your order was delivered over 7 DAYS AGO!\n\n⏳ Sorry, returns or exchanges are no longer allowed! 🙅‍♂',
                'error'
            );
            return;
        }

        this.isModalOpen = true;
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.caseFields = { ...this.caseFields, [name]: value };
    }

    get isReturnRequest() {
        return this.caseFields.Request_Type__c === 'Return';
    }

    async handleSubmit() {
        try {
            if (!this.selectedOrder || !this.caseFields.Request_Type__c) {
                this.showToast('Error', 'Please fill required fields.', 'error');
                return;
            }

            const caseId = await createCaseWithRecordType({
                requestType: this.caseFields.Request_Type__c,
                orderId: this.selectedOrder.Id,
                productId: this.selectedOrder.Product__c,
                reason: this.caseFields.Reason__c,
                description: this.caseFields.Description,
                payTo: this.caseFields.Pay_To__c,
                userName: this.userName
            });

            this.showToast('Success', 'Case Created Successfully!', 'success');
            this.isModalOpen = false;

            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: caseId,
                    objectApiName: 'Case',
                    actionName: 'view'
                }
            });

        } catch (error) {
            this.showToast('Error', 'Case Creation Failed: ' + (error.body?.message || error.message), 'error');
        }
    }

    handleCloseModal() {
        this.isModalOpen = false;
        this.caseFields = { Request_Type__c: '', Reason__c: '', Pay_To__c: '', Description: '' };
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({ title, message, variant }));
    }
}