// File: ContactTriggerHandler.cls
public class ContactTriggerHandler {

    public static void handleContactChanges(List<Contact> newContacts, List<Contact> oldContacts) {
        Set<Id> accountIdsToUpdate = new Set<Id>();

        // Gather Account IDs from new records (Insert, Update, Undelete)
        if (newContacts != null) {
            for (Contact c : newContacts) {
                if (c.AccountId != null) {
                    accountIdsToUpdate.add(c.AccountId);
                }
            }
        }

        // Gather Account IDs from old records (Update, Delete)
        // This catches reparenting or deletions from an account
        if (oldContacts != null) {
            for (Contact c : oldContacts) {
                if (c.AccountId != null) {
                    accountIdsToUpdate.add(c.AccountId);
                }
            }
        }

        // If no relevant Account IDs, exit early
        if (accountIdsToUpdate.isEmpty()) {
            return;
        }

        // Query Accounts and their related Contacts to get the actual count
        // Using a subquery ensures we get the current number of contacts after the event
        List<Account> accountsToUpdate = [
            SELECT Id, Count_of_Contacts__c, (SELECT Id FROM Contacts)FROM Account WHERE Id IN :accountIdsToUpdate ];

        List<Account> updatedAccounts = new List<Account>();
        for (Account acc : accountsToUpdate) {
            // Update the custom field with the size of the related Contacts list
            acc.Count_of_Contacts__c = acc.Contacts.size();
            updatedAccounts.add(acc);
        }

        // Bulk update the accounts (essential for performance)
        if (!updatedAccounts.isEmpty()) {
             try {
        update updatedAccounts;
    } catch (DmlException ex) {
        for (Account acc : updatedAccounts) {
            acc.addError('Update failed: ' + ex.getMessage());
        }
    }
        }
    }
    

// send mail to account owner when contact update
 public static void sendmail (list<Contact> newlist,Map<Id,Contact> oldMap){
        set<Id> ContIds = new set<Id>();
        for(Contact C: newlist){
            ContIds.add(C.Id);
        }
        List<Contact> CList = [Select Id,Name,Email,LastModifiedDate,AccountId,Account.LastModifiedDate, Account.Owner.Email from Contact WHERE Id IN: ContIds];
        list<Contact> Finallist = new list<Contact>();
        for(Contact C : CList){
            if(C.LastModifiedDate > C.Account.LastModifiedDate){
                Finallist.add(C);
            }
        }
        if(Finallist.isEmpty()){
            return;
        }
        //string msg = 'Hi';
                String msg = 'List of Updated Contacts: \n\n';

        for(Contact CC : Finallist){
           // msg += 'Hi';
                   msg += 'Id: ' + cc.Id + ' , Name: ' + cc.Name + ' , Email: '  + cc.Email  + '\n' ;

        }
        String Mai = Finallist[0].Account.Owner.Email;
        
        Messaging.SingleEmailMessage M = new Messaging.SingleEmailMessage();
        M.Subject = 'Contact Updated';
        M.setPlainTextBody(msg);
        M.setToAddresses(new String[]{ Mai });
        Messaging.sendEmail(new Messaging.SingleEmailMessage[]{ M });
    }
}