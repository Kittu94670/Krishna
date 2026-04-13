public class healthScore {
    public static void begin(List<Contact> newList, list<Contact> oldlist){
        
        Integer emailPoints = 10;
       // Integer phonePoints = 5;
        //String validSymbol = '@';

        

        // Collect Account Ids
        Set<Id> A = new Set<Id>();
        for(Contact c : newList){
            if(c.AccountId != null){
                A.add(c.AccountId);
            }
        }

        System.debug(' Account Ids collected: ' + A);
        if(oldlist != null){
        for(Contact OC :oldlist){
            if(OC.AccountId != null){
                A.add(OC.AccountId);
            }
        }
        } 

        if(A.isEmpty()) {
            System.debug(' No Accounts found. Exiting.');
            return;
        }

        // Query all Contacts for these Accounts
        List<Contact> relatedContacts = [ SELECT Id, Email, Phone, AccountId FROM Contact WHERE AccountId IN :A ];

        System.debug(' Related Contacts fetched: ' + relatedContacts);

        Map<Id, Integer> scoreMap = new Map<Id, Integer>();

        // Calculate score per Contact
        for(Contact c : relatedContacts){

            Integer score = 0;

            if(String.isNotBlank(c.Email) && c.Email.contains('@')){
                score += emailPoints;
            }

            if(String.isNotBlank(c.Phone)){
                score += 5;
            }

            System.debug('➡️ Contact: ' + c.Id + ' | Score: ' + score);

            // Add score to total per Account
            scoreMap.put(
                c.AccountId,
                (scoreMap.containsKey(c.AccountId) ? scoreMap.get(c.AccountId) : 0) + score
            );
        }

        System.debug(' Final Score Map (Account → Score): ' + scoreMap);

        // Query Accounts to update
        List<Account> accList = [SELECT Id, Account_HealthScore__c	 FROM Account WHERE Id IN :A];

        System.debug(' Accounts fetched : ' + accList);

        // Update health score
        for(Account acc : accList){
            acc.Account_HealthScore__c	 = scoreMap.get(acc.Id);
            System.debug(' Updating Account: ' + acc.Id + ' → New Score: ' + scoreMap.get(acc.Id));
        }

        update accList;
        System.debug(' Health Scores Updated ');
    }
}