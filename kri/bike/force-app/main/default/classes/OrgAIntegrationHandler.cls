public class OrgAIntegrationHandler {
    @future(callout=true)
    public static void sendRequest(Id caseId, String originValue) {
        String endpoint = 'callout:krishnanotifrecords/services/apexrest/VerifyOrigin/' + originValue;
        
        HttpRequest req = new HttpRequest();
        req.setEndpoint(endpoint);
        req.setMethod('GET');

        Http http = new Http();
        try {
            HttpResponse res = http.send(req);
            
            String rawResponse = res.getBody().trim();
           System.debug('RAW RESPONSE: ' + rawResponse);
            rawResponse = rawResponse.replace('"', '');
                System.debug('CLEAN RESPONSE: ' + rawResponse);

            Boolean result = rawResponse.equalsIgnoreCase('true');

            //Boolean result = Boolean.valueOf(res.getBody());


            Callout__c log = new Callout__c();
            log.Case__c = caseId;
            log.Request__c = endpoint;
            //log.Response__c = result;
            //log.Response__c = String.valueOf(result);
            log.Response__c = result ? 'True' : 'False';



            insert log;
        } catch(Exception e) {
            System.debug('Error: ' + e.getMessage());
        }
    }
}