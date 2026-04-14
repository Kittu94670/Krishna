import { LightningElement, track } from 'lwc';
import countries from 'c/countryData';   // 🔥 THIS LINE IS MUST

export default class CountryParent extends LightningElement {

    selectedCountry;
    @track selectedCountryDetails;

    get countryOptions() {
        return countries.map(country => {
            return {
                label: country.name,
                value: country.name
            };
        });
    }

    handleChange(event) {
        this.selectedCountry = event.detail.value;

        
    }

    handleShow() {
        this.selectedCountryDetails = countries.find(
            country => country.name === this.selectedCountry
        );
    }
}