import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    value = '';
    groupValue = '';
    sourceValue = '';


    // Dropdown options
    get Activityoptions() {
        return [
            { label: 'Today', value: 'Today' },
            { label: 'Last 7 Days', value: 'Last 7 Days' }
        ];
    }
    get Groupoption() {
        return [
            { label: 'groupA', value: 'groupA' },
            { label: 'GroupB ', value: 'GroupB' },
             { label: 'GroupC ', value: 'GroupC' }
        ];
    }
    get Sourceoption() {
        return [
            { label: 'Email', value: 'Email' },
            { label: 'Web', value: 'Web' },
             { label: ' Phone ', value: 'Phone' }
        ];
    }


    handleActivityoptionschange(event) {
        this.value = event.detail.value;
        console.log('Parent Activity selected:', this.value);
        
    }
   handleGroupoptionchange(event) {
    this.groupValue = event.detail.value// remove extra spaces
    console.log('Parent Group selected:', this.groupValue);
}

handleSourceoptionchange(event) {
    this.sourceValue = event.detail.value
    console.log('Parent Source selected:', this.sourceValue);
}
   /* handlechange(event) {
        // Corrected: event.detail.value ani undali
        this.value = event.detail.value;
    }*/
}