public class GetRajcasedetails {
    @AuraEnabled(cacheable=true)
    public static void Casedetails(){
        
        //string requestBody = JSON.serialize(getdetails);
        string Endpoint = 'callout:Named/services/apexrest/CaseHit';
        
        HttpRequest req = new HttpRequest();
        req.setEndpoint(Endpoint);
        req.setMethod('GET');
        //req.setBody(requestBody);
        
        Http http = new Http();
        HttpResponse res = http.send(req);
        System.debug('Response ===> ' + res.getBody());
        
        
        List<Object> caseList = (List<Object>) JSON.deserializeUntyped(res.getBody());

        System.debug('Total Records: ' + caseList.size());

        for(Object c : caseList){
            System.debug(c);
        }
        
    }

}