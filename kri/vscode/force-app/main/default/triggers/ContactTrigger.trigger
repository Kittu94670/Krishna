trigger ContactTrigger on Contact (after insert, after update, after delete, after undelete) {
 if(Trigger.isAfter && (trigger.isinsert || trigger.isdelete || trigger.isundelete)){
        ContactTriggerHandler.handleContactChanges(Trigger.new, Trigger.old);
    }
     if(Trigger.isAfter && Trigger.isUpdate){
            ContactTriggerHandler.sendmail(Trigger.new, Trigger.oldmap);

     }
}