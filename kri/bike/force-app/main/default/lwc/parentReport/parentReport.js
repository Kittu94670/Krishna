import { LightningElement, track } from 'lwc';
import CountryFlags from '@salesforce/resourceUrl/CountryFlags';
import { getCountries } from './countryData';

export default class ParentReport extends LightningElement {
    // Static Resource ni function ki pampi data techukuntunnam
    countryList = getCountries(CountryFlags); 
    
    @track showReport = false;
    @track reportData = {};

    handleReportUpdate(event) {
        this.reportData = event.detail;
        this.showReport = true;
    }
}