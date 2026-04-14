import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ContactCreator extends LightningElement {
    //here taken variable to show or hide the popup 
    displayModal = false;
    //Here we declared contact fields API Names  
    contactFields = ['LastName', 'Phone', 'Title'];
    // Method to show the popup
    showPopup() {
        this.displayModal = true;
    }
    // Method to hide the popup
    hidePopup() {
        this.displayModal = false;
    }
    // This runs when you click Save and the record is created
    onSaveSuccess() {
        // Simple success message
        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'Contact has been saved',
            variant: 'success',
        });
        this.dispatchEvent(evt);
        // Close the popup after saving
        this.displayModal = false;
    }
}