trigger AutoCountContact on Account (before insert,before update,After insert,after update,before delete) {
    if (trigger.isbefore &&(trigger.isinsert)){

         for(Account acc :trigger.new){
       // here if checkbox is ticked and also contact count field is empty      
            if (acc.Auto_Create_Contact__c == True && acc.Count_of_Contacts__c == null){
                  AutoCountContact.validate(trigger.new); 

        }
    } 
        }   
    
    
 
    if(trigger.isbefore && Trigger.isInsert || Trigger.isUpdate) {
                for(Account acc : trigger.new){
    // here the account Number is not null collected         
            if(acc.AccountNumber != null){
        
                 AutoCountContact.Restrictingduplicatenumbers(trigger.new);
            }     
       }
    } 

    
   if (trigger.isafter &&(trigger.isinsert )){
               for(Account acc : trigger.new){
    // here create contact if checkbox true and count >=0 like valid number
            if (acc.Auto_Create_Contact__c == True && acc.Count_of_Contacts__c >= 0){
                AutoCountContact.CreateContact(trigger.new,trigger.oldmap);
            }
               }

    }
    if(trigger.isbefore && trigger.isdelete){
        for (Account acc : trigger.old) {
        // the account has parent then contact move to that parent account
        if (acc.ParentId != null) {
AutoCountContact.ReassigneContact(trigger.old);
        }
        }
    }
    if(trigger.isbefore && (trigger.isinsert || trigger.isupdate)) {

        AutoCountContact.OwnerToSalesRep(trigger.new,trigger.oldmap);
    }
       
}