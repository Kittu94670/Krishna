import { LightningElement, api, track } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CaseStageController extends LightningElement {
    @api recordId;
    @track caseStage = ''; // current stage
    @track stageButtons = []; // array for template

    stages = [
        'Return Initiated',
        'Return Instructions Sent',
        'Item Received',
        'Item inspection',
        'Refund Issued',
        'Return Close'
    ];

    connectedCallback() {
        this.updateStageButtons();
    }

    // Prepare stage buttons with disabled info
    updateStageButtons() {
        const currentIndex = this.stages.indexOf(this.caseStage);
        this.stageButtons = this.stages.map((stage, index) => {
            return {
                name: stage,
                disabled: currentIndex >= 0 ? index <= currentIndex : index !== 0
            };
        });
    }

    async handleStage(newStage) {
        const fields = {
            Id: this.recordId,
            Stage__c: newStage
        };

        try {
            await updateRecord({ fields });
            this.caseStage = newStage;
            this.updateStageButtons(); // refresh button disabled states
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: `Stage updated to ${newStage}!`,
                    variant: 'success'
                })
            );
        } catch (error) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: error.body?.message || error.message,
                    variant: 'error'
                })
            );
        }
    }

    handleStageClick(event) {
        const stage = event.target.dataset.stage;
        this.handleStage(stage);
    }
}