public with sharing class GymPlanController {

    @AuraEnabled(cacheable=true)
    public static List<Plan__c> getPlans() {
        return [
            SELECT Id,
                   Name,
                   Duration_Months__c,
                   Fee__c
            FROM Plan__c
        ];
    }
}