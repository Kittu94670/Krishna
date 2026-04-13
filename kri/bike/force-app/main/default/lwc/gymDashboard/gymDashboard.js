import { LightningElement, wire, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

import getDashboardData from '@salesforce/apex/GymDashboardController.getDashboardData';
import getMembersByStatus from '@salesforce/apex/GymDashboardController.getMembersByStatus';

export default class GymDashboard extends NavigationMixin(LightningElement) {

    totalMembers;
    activeMembers;
    inactiveMembers;
    revenue;

    // Modal
    @track showModal = false;
    @track members = [];
    modalTitle;

    // Datatable columns
    columns = [
        {
            label: 'Name',
            fieldName: 'recordLink',
            type: 'url',
            typeAttributes: {
                label: { fieldName: 'Name' },
                target: '_blank'   // remove if same tab kavali
            }
        },
        { label: 'Status', fieldName: 'Status__c' },
        { label: 'Phone', fieldName: 'Phone__c' }
    ];

    // Dashboard data
    @wire(getDashboardData)
    wiredData({ data }) {
        if (data) {
            this.totalMembers = data.totalMembers;
            this.activeMembers = data.activeMembers;
            this.inactiveMembers = data.inactiveMembers;
            this.revenue = data.revenue;
        }
    }

    // Count click
    handleClick(event) {

        const status = event.target.dataset.type;

        this.modalTitle = status + ' Members';

        getMembersByStatus({ status: status })
            .then(result => {

                // Add record links
                this.members = result.map(row => {
                    return {
                        ...row,
                        recordLink: '/' + row.Id
                    };
                });

                this.showModal = true;
            })
            .catch(error => {
                console.error(error);
            });
    }

    // Close modal
    closeModal() {
        this.showModal = false;
    }
}