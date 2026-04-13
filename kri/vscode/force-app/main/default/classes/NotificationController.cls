public class NotificationController {

    @AuraEnabled(cacheable=true)
    public static List<Notifications__c> getNotifications(String filtertype, String groupName, String source) {

      
        
        String Q = 'SELECT Id, Name, Status__c, Source__c,Group__r.Name FROM Notifications__c WHERE Id!= null';

       if(String.isNotBlank(source)){
            Q += ' AND Source__c = :source';   
        }

       if(String.isNotBlank(groupName)){
            Q += ' AND Group__r.Name = :groupName';  
        }

        if(filtertype == 'today'){
            Q += ' AND CreatedDate = TODAY';     
        } 
        else if(filtertype == 'week'){
            Q += ' AND CreatedDate = LAST_N_DAYS:7';  
        }

        System.debug('QUERY: ' + Q); 

        return Database.query(Q);
    }
}