public class AutoCountContact {
    // writing boolean variable for classs dont run twice and to control recursion
        public static Boolean isExecuted = false;

   public static void validate (list<Account>newlist){
       system.debug('AutoCountContact...validate... Running...');
       //looping the accounts recordscoming from trigger
        for(Account acc : newlist){
       // here if checkbox is ticked and also contact count field is empty      
            if (acc.Auto_Create_Contact__c == True && acc.Count_of_Contacts__c == null){
        // it stop the record saving and shows error message        
            acc.addError('You must enter the contact count field value to auto-create contacts');
        }
    }
}
    // Auto Contact Creating method
    
    public static void CreateContact(list<Account>newlist,map<id,Account>oldmap){
        // we have written this for preventing excution repeatingly
      
    // creating the list to store new contact before inserting    
         list<Contact>insertcontact = new list<Contact>();
    // looping the accounts from trigger    
        for(Account acc : newlist){
    // here create contact if checkbox true and count >=0 like valid number
            if (acc.Auto_Create_Contact__c == True && acc.Count_of_Contacts__c >= 0){
    // here we give how many contacts we need to create            
                 Decimal numberofContacts =acc.Count_of_Contacts__c;
     // here the loop run based on the given number in account           
                for(integer i=1;i<=numberofContacts;i++){
      // here giving the how contact detail should be while creating              
                    Contact C = new Contact();
         // here which account id is link to contact           
                    C.AccountId = acc.Id;
          // here what name shoulb be for contact          
                   C.LastName= acc.Name + 'child contact'+i;
          // here mapping address          
                    C.MailingStreet = acc.ShippingStreet;
       // here in contact cus field assinging the accounts parent account             
                    C.GrandParent_Account_c__c	 =acc.ParentId;
        // adding this created contact to list            
                    insertcontact.add(C);
                    system.debug(C);                   
                    
                }
                
        }
    }
        //insert the contact when the list is not empty
        if(!insertcontact.isEmpty()){
try {
    insert insertcontact;
} 
catch (DmlException e) {
    System.debug('Error while inserting contact: ' + e.getMessage());
}
                   
  }
                
 }
    // Reassign the contact to parent account method
public static void ReassigneContact(List<Account> newList) {
    // Step 1: Create a map of ChildAccountId → ParentAccountId
    Map<Id, Id> accountParentMap = new Map<Id, Id>();

    for (Account acc : newList) {
        if (acc.ParentId != null) {
            accountParentMap.put(acc.Id, acc.ParentId);
        }
    }

    // If no accounts have parents, exit
    if (accountParentMap.isEmpty()) {
        return;
    }

    // Step 2: Query contacts linked to these accounts
    List<Contact> relatedContacts = [ SELECT Id, AccountId FROM Contact WHERE AccountId IN :accountParentMap.keySet() ];

    // Step 3: Reassign contacts in a single loop
    List<Contact> contactsToUpdate = new List<Contact>();

    for (Contact c : relatedContacts) {
        if (accountParentMap.containsKey(c.AccountId)) {
            c.AccountId = accountParentMap.get(c.AccountId);
            contactsToUpdate.add(c);
        }
    }

    // Step 4: Save changes safely using Try-Catch
    if (!contactsToUpdate.isEmpty()) {
        try {
            update contactsToUpdate;
            System.debug('Contacts successfully reassigned: ' + contactsToUpdate);
        } catch (DmlException e) {
            System.debug('Error while updating contacts: ' + e.getMessage());
        }
    }
}


    // owner = sales rep method
    public static void OwnerToSalesRep(list<Account>newlist,map<Id,Account>oldmap){
        for(Account acc : newlist) {
            // inserting the owner id in sales rep if old is null
            if(oldmap == null){
           acc.Sales_Rep_c__c = acc.OwnerId;

            }     
                
           else {
               // here updating the data if record owner changes
                     Account oldAccount = oldmap.get(acc.Id);
                    if(acc.OwnerId!= oldAccount.OwnerId){
                        acc.Sales_Rep_c__c = acc.OwnerId;
                    }
                }
            
                }
            
        }

  // checking the duplicate account numbers method  
  public static void Restrictingduplicatenumbers(list<Account> newlist){
      set<String> newAccountnumbers = new set <String>();
        for(Account acc : newlist){
    // here the account Number is not null collected         
            if(acc.AccountNumber != null){
                newAccountnumbers.add(acc.AccountNumber);
            }
        }
      // map the exisisting account numbers
          Map<String, Id> existingA = new Map<String, Id>();

      if(!newAccountnumbers.isEmpty()){
          // query for get data from salesforce if set is not empty
          for(Account A : [SELECT Id,AccountNumber FROM Account WHERE AccountNumber IN :newAccountnumbers]){
             ExistingA.put(A.AccountNumber,A.Id);
          }
      }
      // here comparing incoming account numbers with existing account number
      for(Account acc : newlist){
          if(acc.AccountNumber != null && ExistingA.ContainsKey(acc.AccountNumber) ){
// throwing the error if the same account get but not in same record                                           
if(ExistingA.get(acc.AccountNumber) != acc.Id){
    acc.AccountNumber.addError('Duplicate Account Number found in another record.');
}

      }
  }
  }
}


          //  Account oldacc = oldmap.get(acc.id);
                        //   acc.addError('duplicates are not allowed');

           // if(oldacc!=null && oldacc.AccountNumber!=null){
        // if(acc.AccountNumber!=oldacc.AccountNumber){
           //acc.addError('duplicates are not allowed');

            
    




        /*
            newset.add(oldacc.AccountNumber);
             
        }
        
        list<Account>duplicate=[ select id,AccountNumber from Account where AccountNumber in: newset];
    	for(account acc:newlist)
        {
             if(!duplicate.isempty()){
                  acc.adderror('duplicate are not allowed');
            
        }
      

        
    	}
    
}
}
/*public static void Duplicate(List<Account> newList, Map<Id, Account> oldMap) {

    Set<String> newSet = new Set<String>();

    for(Account acc : newList){
        Account oldAcc = oldMap.get(acc.Id);
        if(oldAcc != null && oldAcc.AccountNumber != null){
            newSet.add(oldAcc.AccountNumber);
        }
    }

    List<Account> duplicate = new List<Account>();

    if(!newSet.isEmpty()){
        duplicate = [SELECT Id, AccountNumber FROM Account WHERE AccountNumber IN :newSet];
    }

    for(Account acc : newList){
        if(!duplicate.isEmpty()){
            acc.addError('duplicates are not allowed');
        }
    }*/