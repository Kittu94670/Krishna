import { LightningElement, track } from 'lwc';
// Importing the Apex method
import getCases from '@salesforce/apex/CaseService.Casedetails';

export default class Getcases extends LightningElement {
    

    // Using @track to make the array reactive
    @track cases = [];
    @track selectedOrigin =[];

    // Columns for the lightning-datatable
    columns = [
        { label: 'Case Number', fieldName: 'CaseNumber' },
        { label: 'Subject', fieldName: 'Subject' },
        { label: 'Status', fieldName: 'Status' }
    ];
    options = [
        {label : 'Phone',value : 'Phone'},
                {label : 'Email',value : 'Email'},
                        {label : 'Web',value : 'Web'}


    ];
    handleChange(event){
        this.selectedOrigin = event.detail.value;
    }
    

    // Method to fetch cases from External System (via Apex)
    handleGet() {
        console.log('--- Fetching cases process started ---');

        getCases({origin: this.selectedOrigin})
            .then(result => {this.cases = JSON.parse(result);

            })
            .catch(error => {
                // 4. If Apex itself fails (Status 500), it lands here
                console.error('Apex Callout Error:', error);
                

            });
    }
}