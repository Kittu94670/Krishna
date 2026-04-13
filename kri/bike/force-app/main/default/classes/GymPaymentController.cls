public with sharing class GymPaymentController {

    @AuraEnabled(cacheable=true)
    public static Member__c getMemberDetails(Id memberId) {

        return [
            SELECT Id,
                   Name,
                   Membership_Plan__c,
                   Membership_Plan__r.Fee__c
            FROM Member__c
            WHERE Id = :memberId
            LIMIT 1
        ];
        //huiikjhkj
    }
}