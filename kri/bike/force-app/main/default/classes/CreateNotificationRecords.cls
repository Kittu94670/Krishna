global class CreateNotificationRecords implements Database.Batchable<sObject> {
    public final integer numberofrecords;
    
    global CreateNotificationRecords(integer RTC){
        this.numberofrecords = RTC;
    }
    
    global list<Notification_Record__c> start(Database.BatchableContext BC){
        list<Notification_Record__c> NRnew = new list<Notification_Record__c>();
        for(integer i=0; i<numberofrecords; i++){
            NRnew.add(new Notification_Record__c(Name = 'Records created with batch job '+ i,Source__c = 'Phone', Status__c = 'success',Group__c = 'a0FgL00000AiIGPUA3'));
        }
                    return NRnew;

    }
    global void execute(Database.BatchableContext BC , list<Notification_Record__c> scope){
        if(!scope.isEmpty()){
            insert scope;
        }
    }
    global void finish(Database.BatchableContext BC){
        system.debug('Batch job finished');
    }

}