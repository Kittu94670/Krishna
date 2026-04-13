import { LightningElement,track } from 'lwc';
export default class SectionA extends LightningElement {
    
    value ='';
    groupvalue ='';
    sourcevalue ='';
     options =[
            {label:'Today',value:'today'},
                        {label:'Last 7 days',value:'week'}

        ];
    

      optionsA =
        [
            {label:'A',value:'A'},
                        {label:'B',value:'B'},
                        {label:'C',value:'C'}

        ];
     
       

         optionsB =
        [
            {label:'Email',value:'Email'},
                        {label:'Web',value:'Web'},
                        {label:'Phone',value:'Phone'}

        ];
     
        

        handleoptionschange(event){
          this.value = event.detail.value;
          console.log('VALUE:', this.value);
        }

        handleoptionsAchange(event){
          this.groupvalue = event.detail.value;
                        console.log('GROUP:', this.groupvalue); 

        }
        handleoptionsBchange(event){
          this.sourcevalue = event.detail.value;
              console.log('SOURCE:', this.sourcevalue); 

        }
        

}