public without sharing class JobController {

    @AuraEnabled(cacheable=true)
    public static List<Job__c> getJobs(String searchKey) {
        String key = '%' + searchKey + '%';
        return [
            SELECT Id, Job_Title__c, Description__c, Experience__c, Department__c, Location__c, Status__c
            FROM Job__c
            WHERE Job_Title__c LIKE :key
            ORDER BY CreatedDate DESC
        ];
    }

    @AuraEnabled
    public static Id saveCandidate(Candidate__c cand) {
        insert cand;
        return cand.Id;

    @AuraEnabled
    public static void uploadResume(Id candidateId, String fileName, String base64Data) {
        try {
            // Step 1: Create ContentVersion record
            ContentVersion cv = new ContentVersion();
            cv.Title = fileName;
            cv.PathOnClient = fileName;
            cv.VersionData = EncodingUtil.base64Decode(base64Data);
            insert cv;

            // Step 2: Get ContentDocumentId from newly inserted ContentVersion
            cv = [SELECT Id, ContentDocumentId FROM ContentVersion WHERE Id = :cv.Id LIMIT 1];

            // Step 3: Link file to Candidate__c record
            ContentDocumentLink cdl = new ContentDocumentLink();
            cdl.ContentDocumentId = cv.ContentDocumentId;
            cdl.LinkedEntityId = candidateId;
            cdl.ShareType = 'V';
            cdl.Visibility = 'AllUsers';
            insert cdl;
        } catch (Exception e) {
            System.debug('Error uploading file: ' + e.getMessage());
            throw new AuraHandledException('Failed to upload file: ' + e.getMessage());
        }
    }
}