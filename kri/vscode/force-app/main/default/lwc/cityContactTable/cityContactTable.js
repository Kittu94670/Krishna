import { LightningElement, wire, track } from 'lwc';
import getTableColumns from '@salesforce/apex/ContactController.getTableColumns';
import getCityOptions from '@salesforce/apex/ContactController.getCityOptions';
import getContactRecords from '@salesforce/apex/ContactController.getContactRecords';

export default class CityContactTable extends LightningElement {
    @track selectedCity = 'All'; // Default option
    @track columns = [];
    @track cityOptions = [];
    @track contacts = [];

    // Fetch Columns from Server
    @wire(getTableColumns)
    wiredColumns({ error, data }) {
        if (data) this.columns = data;
    }

    // Fetch City List from Server
    @wire(getCityOptions)
    wiredCities({ error, data }) {
        if (data) this.cityOptions = data;
    }

    // Fetch Contacts (Refreshes when selectedCity changes)
    @wire(getContactRecords, { selectedCity: '$selectedCity' })
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
        } else if (error) {
            console.error(error);
        }
    }

    handleCityChange(event) {
        this.selectedCity = event.detail.value;
    }
}