public class OrgAIntegrationHandler {
    @future(callout=true)
    public static void sendRequest(Id caseId, String originValue) {
        // Org B URL ikkada pettali
        String endpoint = 'callout:Integrate/services/apexrest/VerifyOrigin/' + originValue;
        
        HttpRequest req = new HttpRequest();
        req.setEndpoint(endpoint);
        req.setMethod('GET');
        // Ikkada Session ID leda Token ivvali Authentication kosam
       // req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionId()); 

        Http http = new Http();
        try {
            HttpResponse res = http.send(req);
            String result = res.getBody();

            // Ippudu Callout__c record create chestunnam
            Callouts__c log = new Callouts__c();
            log.Related_case__c = caseId;
            log.Request__c = endpoint;
            log.Response__c = result;
            insert log;
        } catch(Exception e) {
            System.debug('Error: ' + e.getMessage());
        }
    }
}