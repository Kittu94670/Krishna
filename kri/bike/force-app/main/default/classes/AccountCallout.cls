public class AccountCallout {

    public static void callAPI(String methodType, String body, String accId){

        String endpoint = 'callout:Integrated_named/services/apexrest/AccountInt';

        if(accId != null){
            endpoint += '?id=' + accId;
        }

        HttpRequest req = new HttpRequest();
        req.setEndpoint(endpoint);
        req.setMethod(methodType);

        //req.setHeader('Authorization','Bearer '+UserInfo.getSessionId());
        //req.setHeader('Content-Type','application/json');

        if(body != null){
            req.setBody(body);
        }

        Http http = new Http();
        HttpResponse res = http.send(req);

        System.debug('Response ===> ' + res.getBody());
           if (res.getStatusCode() != 200) {
            System.debug('Error sending accounts: ' + res.getBody());
        } 
        else {
            System.debug('Accounts sent successfully: ' + res.getBody());
        }

    }
}