public with sharing class CaseOrderHandler {

    // Fetch Case RecordTypeIds for LWC
    @AuraEnabled(cacheable=true)
    public static Map<String, Id> getCaseRecordTypeIds() {
        Map<String, Id> recordTypeMap = new Map<String, Id>();
        for (RecordType rt : [
            SELECT Id, DeveloperName 
            FROM RecordType 
            WHERE SObjectType = 'Case'
        ]) {
            recordTypeMap.put(rt.DeveloperName, rt.Id);
        }
        return recordTypeMap;
    }
}