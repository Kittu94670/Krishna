//public class RestApiUsingConnectClass {

//}
public with sharing class RestApiUsingConnectClass {

    public static String sendAccountToTargetOrg(String accName, String phone) {

        HttpRequest req = new HttpRequest();
        req.setEndpoint('callout:TargetOrgCredential/services/apexrest/accountAPI');
        req.setMethod('POST');
        req.setHeader('Content-Type', 'application/json');

        Map<String, String> payload = new Map<String, String>();
        payload.put('Name', accName);
        payload.put('Phone', phone);

        req.setBody(JSON.serialize(payload));

        Http http = new Http();
        HttpResponse res = http.send(req);

        if(res.getStatusCode() == 200){
            return res.getBody();
        } else {
            return 'Error: ' + res.getBody();
        }
    }
}