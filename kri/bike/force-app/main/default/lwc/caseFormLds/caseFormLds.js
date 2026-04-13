import { LightningElement, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { NavigationMixin } from 'lightning/navigation';
import CASE_OBJECT from '@salesforce/schema/Case';

export default class CaseFormLds extends NavigationMixin(LightningElement) {
    showForm = false;
    returnRtId;
    exchangeRtId;

    // 🔹 Fetch record type IDs for Case
    @wire(getObjectInfo, { objectApiName: CASE_OBJECT })
    objectInfo({ data, error }) {
        if (data) {
            const rtMap = data.recordTypeInfos;
            this.returnRtId = Object.keys(rtMap).find(rti => rtMap[rti].name === 'Return');
            this.exchangeRtId = Object.keys(rtMap).find(rti => rtMap[rti].name === 'Exchange');
        } else if (error) {
            this.showToast('Error', 'Unable to fetch Record Types', 'error');
        }
    }

    handleShowForm() {
        this.showForm = true;
    }

    handleSubmit(event) {
        event.preventDefault();
        const fields = event.detail.fields;

        // 🔒 Fixed portal Contact and Account
        fields.ContactId = '003gL00000E0lDkQAJ';
        fields.AccountId = '001gL00000QxEzGQAV';
        fields.Origin = 'Web';

        // 🧩 RecordType assign based on Request Type
        const requestType = fields.Request_Type__c;
        if (requestType === 'Return') {
            fields.RecordTypeId = this.returnRtId;
        } else if (requestType === 'Exchange') {
            fields.RecordTypeId = this.exchangeRtId;
        }

        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }

    // ✅ Case created successfully
    handleSuccess(event) {
        const caseId = event.detail.id;
        this.showToast('Success', `Case created successfully: ${caseId}`, 'success');
        this.showForm = false;

        // 🧭 Navigate to the newly created Case record page
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: caseId,
                objectApiName: 'Case',
                actionName: 'view'
            }
        });
    }

    handleError(event) {
        this.showToast('Error', event.detail.message, 'error');
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({ title, message, variant }));
    }
}