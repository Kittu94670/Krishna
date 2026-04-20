public with sharing class GymController {

    @AuraEnabled(cacheable=true)
    public static List<Member__c> getMembers() {  
       // changed by krishna
        return [
            SELECT Id,
                   Name,
                   Phone__c,
                   Email__c,
                   Status__c
            FROM Member__c
            ORDER BY CreatedDate DESC
        ];
    }
}