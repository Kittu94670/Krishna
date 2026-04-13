@RestResource(urlMapping='/VerifyOrigin/*')
global with sharing class OrgBOriginService {
    @HttpGet
    global static String checkOrigin() {
        RestRequest req = RestContext.request;
        // URL chivara unna Name ni matrame cut chestunnam
        String originName = req.requestURI.substringAfter('/VerifyOrigin/');
        
        List<Origin__c> results = [SELECT Authentication__c FROM Origin__c WHERE Name = :originName LIMIT 1];
        
        if(!results.isEmpty()) {
            return String.valueOf(results[0].Authentication__c);
        }
        return 'false';
    }
}