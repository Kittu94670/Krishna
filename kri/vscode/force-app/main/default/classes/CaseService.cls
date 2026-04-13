public with sharing class CaseService {
// Common Method
@AuraEnabled(cacheable=true)
    public static String Casedetails(string origin){
        return callout('GET',null, origin);
    }
        
   public static String callout(String method, String body,String origin){
    try {
        String endpoint = 'callout:Named/services/apexrest/CaseHit/'+ origin ;
        HttpRequest req = new HttpRequest();
        req.setEndpoint(endpoint);
        req.setMethod(method);
        req.setHeader('Content-Type','application/json');

        if(body != null) {
            req.setBody(body);
        }

        Http http = new Http();
        HttpResponse res = http.send(req);

        // 2. Add this Check: 200 unte ok, ledante error pampu
        if(res.getStatusCode() == 200) {
            return res.getBody();
        } else {
            // Deeni valla manaki asalu em thappu ayyindo telustundi
            return '{"error": "Server returned ' + res.getStatusCode() + ' - ' + res.getStatus() + '"}';
        }
    } catch(Exception e) {
        return '{"error": "' + e.getMessage() + '"}';
    }
}
}