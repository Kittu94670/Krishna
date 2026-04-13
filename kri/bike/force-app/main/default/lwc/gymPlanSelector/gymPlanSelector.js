import { LightningElement, wire } from 'lwc';
import getPlans from '@salesforce/apex/GymPlanController.getPlans';

export default class GymPlanSelector extends LightningElement {

    plans;

   @wire(getPlans)
wiredPlans({ data, error }) {
    if (data) {
        this.plans = data;
    } else if (error) {
        console.error(error);
    }
}


    handleSelect(event) {
        const planId = event.target.dataset.id;

        const selectEvent = new CustomEvent('planselect', {
            detail: planId
        });

        this.dispatchEvent(selectEvent);
    }
}