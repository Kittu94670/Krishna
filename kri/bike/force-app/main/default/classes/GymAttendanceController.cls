public with sharing class GymAttendanceController {

    @AuraEnabled(cacheable=true)
    public static List<Member__c> getMembers() {
        return [SELECT  Name FROM Member__c WHERE Status__c='Active'];
    }

    @AuraEnabled(cacheable=true)
    public static List<Attendance__c> getTodayAttendance() {
        return [
            SELECT Id,
       Member__c,
       Member__r.Name,
       Check_In__c,
       Check_Out__c
FROM Attendance__c
WHERE Date__c = TODAY

        ];
    }


    @AuraEnabled
    public static void checkIn(Id memberId) {
        Attendance__c att = new Attendance__c(
            Member__c = memberId,
            Date__c = Date.today(),
            Check_In__c = System.now()
        );
        insert att;
    }

    @AuraEnabled
    public static void checkOut(Id memberId) {
        Attendance__c att = [
            SELECT Id, Check_Out__c
FROM Attendance__c
WHERE Member__c = :memberId
AND Date__c = TODAY
LIMIT 1

        ];

        att.Check_Out__c = System.now();
        update att;
    }
}