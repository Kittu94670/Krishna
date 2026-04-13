public class OrgToOrgIntegrationService {

    public static void createAccountInTarget(String accountName){

        HttpRequest req = new HttpRequest();

        req.setEndpoint('callout:Org_A_NMC');
        req.setMethod('POST');

        req.setHeader('Content-Type','application/json');

        Map<String,Object> body = new Map<String,Object>();
        body.put('Name', accountName);

        req.setBody(JSON.serialize(body));

        Http http = new Http();
        HttpResponse res = http.send(req);

        System.debug('Response: '+res.getBody());
    }

}