import { LightningElement, track, wire } from 'lwc';
import getMyOrders from '@salesforce/apex/CaseManager.getMyOrdersDebug';

export default class OrderTileList extends LightningElement {
    @track orders;
    @track showForm = false;
    @track selectedOrderId;

    @wire(getMyOrders)
    wiredOrders({ data, error }) {
        if (data) this.orders = data;
        else if (error) console.error('Error loading orders:', error);
    }

    handleOpenForm(event) {
        this.selectedOrderId = event.target.dataset.id;
        this.showForm = true;
    }

    handleCloseForm() {
        this.showForm = false;
        this.selectedOrderId = null;
    }
}