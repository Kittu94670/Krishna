public with sharing class OrgConnectionCheck {
@AuraEnabled
    public static string checkConnection(){
        Http h = new http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint ('callout:Integrated_named/services/data/v60.o/');
        req.setMethod('GET');
        
        HttpResponse res = h.send(req);
        if(res.getStatusCode()==200){
            return 'sucessfull';
        }else{
            return 'failed';
            
        }
        }
    }