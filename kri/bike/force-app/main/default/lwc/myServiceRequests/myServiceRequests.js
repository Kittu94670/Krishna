import { LightningElement, track, wire } from 'lwc';
import getMyServiceRequests from '@salesforce/apex/CaseManager.getMyServiceRequests';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class MyServiceRequests extends NavigationMixin(LightningElement) {
    @track serviceRequests = [];
    @track paginatedData = [];
    @track openCount = 0;
    @track closeCount = 0;
    @track totalCount = 0;
    @track returnClosed = 0;
    @track exchangeClosed = 0;
    @track isLoading = true;

    // Pagination
    pageSize = 15;
    currentPage = 1;
    totalPages = 0;

    columns = [
        { label: 'Case Number', fieldName: 'CaseNumber', type: 'text', sortable: true },
        { label: 'Product', fieldName: 'Product', type: 'text' },
        { label: 'Stage', fieldName: 'Stage', type: 'text', sortable: true },
        { label: 'Pay To', fieldName: 'PayTo', type: 'text' },
        { label: 'Request Type', fieldName: 'RequestType', type: 'text' },
        { label: 'Reason', fieldName: 'Reason', type: 'text' }
    ];

    // Fetch Data
    @wire(getMyServiceRequests)
    wiredCases({ error, data }) {
        if (data) {
            this.serviceRequests = data.cases;
            this.openCount = data.openCount;
            this.closeCount = data.closeCount;
            this.totalCount = data.totalCount;
            this.returnClosed = data.returnClosed;
            this.exchangeClosed = data.exchangeClosed;

            this.totalPages = Math.ceil(this.serviceRequests.length / this.pageSize);
            this.updatePaginatedData();
            this.isLoading = false;
        } else if (error) {
            this.isLoading = false;
            this.showToast('Error', 'Failed to load service requests: ' + (error.body?.message || error.message), 'error');
        }
    }

    // Pagination Functions
    updatePaginatedData() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = this.currentPage * this.pageSize;
        this.paginatedData = this.serviceRequests.slice(start, end);
    }

    handleNext() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.updatePaginatedData();
        }
    }

    handlePrevious() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.updatePaginatedData();
        }
    }

    get isNextDisabled() {
        return this.currentPage >= this.totalPages;
    }

    get isPrevDisabled() {
        return this.currentPage <= 1;
    }

    // ✅ Navigate to your site page instead of record view
    handleRowAction(event) {
        const caseId = event.detail.row.Id;
        const siteUrl = '/my-site-page?caseId=' + caseId; // Replace with your actual site path

        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: { url: siteUrl }
        });
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({ title, message, variant }));
    }
}