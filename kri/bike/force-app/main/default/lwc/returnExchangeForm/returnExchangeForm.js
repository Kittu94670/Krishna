import { LightningElement, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import USER_ID from '@salesforce/user/Id';
import USER_NAME_FIELD from '@salesforce/schema/User.Name';
import { getRecord } from 'lightning/uiRecordApi';

import getMyOrders from '@salesforce/apex/CaseManager.getMyOrdersDebug';
import createCaseWithRecordType from '@salesforce/apex/CaseManager.createCaseWithRecordType';

const FIELDS = [USER_NAME_FIELD];

export default class ReturnExchangeForm extends NavigationMixin(LightningElement) {
    @track orders = [];
    @track userName;
    @track isModalOpen = false;
    @track selectedOrder;
    @track caseFields = { Request_Type__c: '', Reason__c: '', Pay_To__c: '', Description: '' };
    @track ordersLoaded = false;
    @track isReturnRequest = false;
    @track isExchangeRequest = false;
    @track isSubmitting = false;
    @track showDescription = false; // 
    @track showConfirmPopup = false; // 
    @track isAcknowledged = false; // 

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

    async loadOrders() {
        try {
            const data = await getMyOrders();
            this.orders = data.map(o => ({
                ...o,
                displayProductName: o.Product__r ? o.Product__r.Name : 'No Product Linked'
            }));
            this.ordersLoaded = true;
            this.showToast('Success', 'Orders Loaded Successfully!', 'success');
        } catch (error) {
            this.showToast('Error', 'Failed to load orders: ' + (error.body?.message || error.message), 'error');
        }
    }

    handleLoadOrdersClick() {
        this.loadOrders();
    }

    get getOrdersForTemplate() {
        return this.orders.map(order => ({
            ...order,
            displayProductName: order.Product__r ? order.Product__r.Name : 'No Product',
            displayOrderDate: order.Effective_Date__c
                ? new Date(order.Effective_Date__c).toLocaleDateString()
                : 'N/A',
            displayRefundAmount: order.Refund_Amount__c != null
                ? new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(order.Refund_Amount__c)
                : '₹0.00'
        }));
    }

    handleTileClick(event) {
        const orderId = event.currentTarget.dataset.id;
        this.selectedOrder = this.orders.find(o => o.Id === orderId);

        const today = new Date();
        const orderDate = new Date(this.selectedOrder.Effective_Date__c);
        const diffDays = (today - orderDate) / (1000 * 60 * 60 * 24);

        if (diffDays > 7) {
            this.showToast(
                'Return/Exchange Blocked',
                'Your order was delivered more than 7 days ago. Sorry, no return or exchange allowed.',
                'error'
            );
            return;
        }

        this.isModalOpen = true;
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.caseFields = { ...this.caseFields, [name]: value };

        if (name === 'Request_Type__c') {
            this.isReturnRequest = value === 'Return';
            this.isExchangeRequest = value === 'Exchange';
        }

        //  Show Description only for "Others"
        if (name === 'Reason__c') {
            this.showDescription = value === 'Others';
        }
    }

    // ---------- NEW: confirmation flow ----------
    handleSubmitClick() {
        if (!this.selectedOrder || !this.caseFields.Request_Type__c) {
            this.showToast('Error', 'Please fill required fields before submitting.', 'error');
            return;
        }
        this.showConfirmPopup = true;
    }

    handleAcknowledgeChange(event) {
        this.isAcknowledged = event.target.checked;
    }

    confirmSubmit() {
        if (!this.isAcknowledged) {
            this.showToast('Error', 'Please acknowledge before submitting.', 'error');
            return;
        }
        this.showConfirmPopup = false;
        this.handleSubmit();
    }

    cancelConfirm() {
        this.showConfirmPopup = false;
    }

    // ---------- original submit logic ----------
    async handleSubmit() {
        if (this.isSubmitting) return;
        this.isSubmitting = true;

        try {
            if (!this.selectedOrder || !this.caseFields.Request_Type__c) {
                this.showToast('Error', 'Please fill required fields.', 'error');
                this.isSubmitting = false;
                return;
            }

            if (this.caseFields.Reason__c === 'Others' && !this.caseFields.Description) {
                this.showToast('Error', 'Please provide a comment for "Others" reason.', 'error');
                this.isSubmitting = false;
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

            let successMsg = '';
            if (this.caseFields.Request_Type__c === 'Return') {
                successMsg = '✅ Return request placed — refund’s on the way 💰';
            } else {
                successMsg = '🔄 Exchange locked in — new product coming soon 🚀';
            }
            this.showToast('Success', successMsg, 'success');

            const confetti = document.createElement('div');
            confetti.innerHTML = '🎉';
            confetti.style.position = 'fixed';
            confetti.style.top = '50%';
            confetti.style.left = '50%';
            confetti.style.fontSize = '4rem';
            confetti.style.animation = 'pop 0.6s ease';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 600);

            this.isModalOpen = false;

            this[NavigationMixin.Navigate]({
                type: 'standard__webPage',
                attributes: {
                    url: 'https://davara-kanakaraju-dev-ed.develop.my.site.com/FP/s/my-service-requests'
                }
            });

        } catch (error) {
            this.showToast('Error', 'Case Creation Failed: ' + (error.body?.message || error.message), 'error');
        } finally {
            this.isSubmitting = false;
        }
    }

    handleCloseModal() {
        this.isModalOpen = false;
        this.isReturnRequest = false;
        this.isExchangeRequest = false;
        this.caseFields = { Request_Type__c: '', Reason__c: '', Pay_To__c: '', Description: '' };
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({ title, message, variant }));
    }
}