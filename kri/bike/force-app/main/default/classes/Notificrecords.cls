public class Notificrecords {

    @AuraEnabled(cacheable=true)
    public static List<Notification_Record__c> getRecords(String filtertype, String groupval, String sourceval) {

      
        
        String Q = 'SELECT Id, Name, Status__c, Source__c,Group__r.Name FROM Notification_Record__c WHERE Id!= null';

       if(String.isNotBlank(sourceval)){
            Q += ' AND Source__c = :sourceval';   
        }

       if(String.isNotBlank(groupval)){
            Q += ' AND Group__r.Name = :groupval';  
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