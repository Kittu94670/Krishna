import { LightningElement,track } from 'lwc';
import OrgConnectionCheck from '@salesforce/apex/OrgConnectionCheck.checkConnection'
export default class Checkauth extends LightningElement {

 @track Message;
 Checkauth(){
    checkConnection().then(result=>{
        this.Message=result;
    })
    .catch(error=>{
        this.Message='failed';
    });

 }

}