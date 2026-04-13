public class DeleteFunctionality {
    public static void parentaccountdelete(list<Account> AL){
        list<Contact> UpdateContact= new List<Contact>();
        for(Account acc : AL){
            if(acc.ParentId != null){
                        list<Contact> contactlist = [select Id, AccountId from Contact WHERE AccountId =:acc.Id];
                for(Contact CC : contactlist){
                    CC.AccountId = acc.ParentId;
                    UpdateContact.add(CC);
                }
                if(!UpdateContact.isEmpty()){
                    Update UpdateContact;
                }

            }
        }
    }
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