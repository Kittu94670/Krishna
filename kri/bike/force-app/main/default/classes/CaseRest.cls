@RestResource(urlMapping='/CaseHit/*')
global with sharing class CaseRest {

    // GET → Fetch Case
    @HttpGet
    global static List<Case> getCase() {
        RestRequest R =RestContext.request;
        string Orig = R.requestURI.substringAfter('/CaseHit/');
        List<Case> casList = [SELECT Id, CaseNumber, Subject, Status FROM Case WHERE Origin = :Orig];
        return casList;
    }
    
}