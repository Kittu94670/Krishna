public class Beforeafterinserttrigger {
    public static void beforeantunna(list<Account> newlist){
        for(Account Acc : newlist){
            if(Acc.Ownership == 'Public'){
                Acc.Description = 'Before insert functionality';
            }
        } 
    }
    public static void afterantunna(list<Account> newlist){
        List<Contact>C = new List<Contact>();
        for(Account Acc : newlist){
            if(Acc.SLA__c == 'Gold'){
                Contact CC = new Contact();
                CC.LastName = 'Lastname from Beforeafterinserttrigger';
                CC.Description = 'Created from after insert';
                CC.AccountId = Acc.Id;
                C.add(CC);
            }
            if(!C.isEmpty()){
                insert C;
                system.debug(C);
            }
        }
        
    }

}