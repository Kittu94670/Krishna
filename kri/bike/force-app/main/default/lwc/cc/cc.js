import { LightningElement, api, track } from 'lwc';

export default class Cc extends LightningElement {

    @track message = '';

    connectedCallback() {
        console.log('🟢 Child loaded (connectedCallback)');
    }

    renderedCallback() {
        console.log('🔵 Child rendered. Current message:', this.message);
    }

    @api showAlert(parentMsg) {

        console.log('🔥 Step 5: Child method triggered');
        console.log('📩 Data received from parent:', parentMsg);

        this.message = 'Child says: ' + parentMsg;

        console.log('✏️ Step 6: Message updated:', this.message);
    }
}