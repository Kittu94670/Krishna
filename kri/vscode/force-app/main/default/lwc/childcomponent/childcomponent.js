import { LightningElement, api } from 'lwc';
import getNotifications from '@salesforce/apex/NotificationController.getNotifications';
export default class ChildComponent extends LightningElement {
    pageSize = 10;
currentPage = 1;
totalPages = 0;

allData = [];
    data = [];
    columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Status', fieldName: 'Status__c' },
        { label: 'Source', fieldName: 'Source__c' },
        { label: 'Group', fieldName: 'GroupName' },
    ];
    
    @api
set filtertype(value) {
    this._filtertype = value;
    this.tryLoad();
}
get filtertype() {
    return this._filtertype;
}

    @api
    set groupValue(value) {
        this._groupValue = value;
        this.LoadData();
    }
    get groupValue() {
        return this._groupValue;
    }

    @api
    set sourceValue(value) {
        this._sourceValue = value;
        this.LoadData();
    }
    get sourceValue() {
        return this._sourceValue;
    }

    tryLoad() {
        if (this._groupValue && this._sourceValue &&  this._filtertype) {
            this.LoadData();
        }
    }

  LoadData() {
    console.log('LoadData called with:', this._groupValue, this._sourceValue);
    //if (!this._groupValue || !this._sourceValue) return;

    getNotifications({ 
         filtertype: this.filtertype,
        groupName: this.groupValue, // match Apex parameter
        source: this.sourceValue
    })
    .then(result => {
        console.log('Apex result:', result);
       this.allData = result.map(row => ({
    ...row,
    GroupName: row.Group__r ? row.Group__r.Name : ''
}));

this.totalPages = Math.ceil(this.allData.length / this.pageSize);
this.currentPage = 1;

this.updatePageData();
    })
    .catch(error =>{console.error('Apex error:', error);});
  }
    updatePageData() {
    let start = (this.currentPage - 1) * this.pageSize;
    let end = this.currentPage * this.pageSize;
console.log('Page:', this.currentPage, 'Start:', start, 'End:', end);

    this.data = this.allData.slice(start, end);
    }
    handleNext() {
    if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.updatePageData();
    }
    }

handlePrevious() {
    if (this.currentPage > 1) {
        this.currentPage--;
        this.updatePageData();
    }
}
}