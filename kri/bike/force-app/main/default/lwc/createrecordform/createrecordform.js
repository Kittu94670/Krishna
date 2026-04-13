import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent } from 'lightning/actions';

export default class createrecordform extends LightningElement {

    handleSuccess() {

        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Record Created',
                variant: 'success'
            })
        );

        this.dispatchEvent(new CloseActionScreenEvent()); // 
    }
    

    handleCancel() {
        this.dispatchEvent(new CloseActionScreenEvent ()); // 
    }
}