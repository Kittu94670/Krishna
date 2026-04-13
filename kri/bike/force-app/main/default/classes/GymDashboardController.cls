public with sharing class GymDashboardController {

    /* ---------------- DASHBOARD WRAPPER ---------------- */
    public class DashboardWrapper {
        @AuraEnabled public Integer totalMembers;
        @AuraEnabled public Integer activeMembers;
        @AuraEnabled public Integer inactiveMembers;
        @AuraEnabled public Decimal revenue;
    }

    /* ---------------- DASHBOARD DATA ---------------- */
    @AuraEnabled(cacheable=true)
    public static DashboardWrapper getDashboardData() {

        DashboardWrapper dw = new DashboardWrapper();

        // Total Members
        dw.totalMembers =
            [SELECT COUNT()
             FROM Member__c];

        // Active Members
        dw.activeMembers =
            [SELECT COUNT()
             FROM Member__c
             WHERE Status__c = 'Active'];

        // Inactive / Expired Members
        dw.inactiveMembers =
            [SELECT COUNT()
             FROM Member__c
             WHERE Status__c = 'Expired'];

        // Revenue
        AggregateResult ar =
            [SELECT SUM(Amount__c) total
             FROM Payment__c];

        // Null check (important)
        if (ar.get('total') != null) {
            dw.revenue = (Decimal) ar.get('total');
        } else {
            dw.revenue = 0;
        }

        return dw;
    }

    /* ---------------- MEMBERS POPUP DATA ---------------- */
    @AuraEnabled(cacheable=true)
    public static List<Member__c> getMembersByStatus(String status) {

        return [
            SELECT Id,
                   Name,
                   Status__c,
                   Phone__c,
                   Email__c,
                   Date_of_Joining__c
            FROM Member__c
            WHERE Status__c = :status
            ORDER BY Name
        ];
    }
}