import { LightningElement, api, track } from 'lwc';

export default class ChildCountryList extends LightningElement {
    @api countries;
    @track selectedCountries = [];

    handleCheck(event) {
        const name = event.target.value;
        if (event.target.checked) {
            this.selectedCountries.push(name);
        } else {
            this.selectedCountries = this.selectedCountries.filter(item => item !== name);
        }
    }

    handleSubmit() {
        const event = new CustomEvent('reportsubmit', {
            detail: {
                count: this.selectedCountries.length,
                names: this.selectedCountries.join(', ')
            }
        });
        this.dispatchEvent(event);
    }
}