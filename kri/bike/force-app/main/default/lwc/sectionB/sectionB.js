import { LightningElement,api } from 'lwc';
import getRecords  from '@salesforce/apex/Notificrecords.getRecords'




const columns=[
    {label:'Name',fieldName: 'Name'},
    {label:'Status',fieldName: 'Status__c'},
    {label:'source',fieldName:'Source__c'},
    {label:'Group',fieldName:'GroupName'}
]
export default class SectionB extends LightningElement {
     data =[];
    columns= columns;
     
   pageData = [];
  currentPage = 1;
  pageSize = 10;
    totalPages = 0;
  


    @api
     set value(val){
    this._value = val;
    this.loadData();
}
get value(){
    return this._value;
}
@api
set sourcevalue(val){
    this._sourcevalue = val;
    this.loadData();   
}
get sourcevalue(){
    return this._sourcevalue;
}
@api
set groupvalue(val){
    this._groupvalue = val;
    this.loadData();   
}
get groupvalue(){
    return this._groupvalue;
}

get isFirstPage(){
    return this.currentPage === 1;
}
get isLastPage(){
    return this.currentPage === this.totalPages;
}
get pageNumbers(){
    let pages = [];
    for(let i = 1;i<= this.totalPages; i++){
        pages.push(i);
    }
    return pages;
}


   
   
 
 /*connectedCallback() {
       this.loadData();
    }*/

    loadData(){
        getRecords({
            filtertype:this.value,
            groupval:this.groupvalue,
            sourceval:this.sourcevalue
        
        })
          .then(result => {

        
        this.data = result.map(row => {
            return {
                ...row,
                GroupName: row.Group__r ? row.Group__r.Name : ''
            };
        });
        console.log('FULL DATA:', this.data); 

        this.currentPage = 1;
        this.totalPages = Math.ceil(this.data.length / this.pageSize);

        this.updatePageData();

                console.log('PAGE DATA:', this.pageData); 


        

    })
    .catch(error => {
        console.error('ERROR:', error);
    });
}
      updatePageData(){
        const start = (this.currentPage - 1) * this.pageSize;
        const end = this.currentPage * this.pageSize;
        this.pageData = this.data.slice(start,end);
      }
      handleNext(){
        if(this.currentPage < this.totalPages){
            this.currentPage++;
            this.updatePageData();
        }
      }
      handlePrev(){
        if(this.currentPage > 1){
            this.currentPage--;
            this.updatePageData();
        }
      }
       handlePageClick(event){
        this.currentPage = Number(event.target.label);
        this.updatePageData();
       }
      
    }