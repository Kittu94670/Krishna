trigger Stageopportunityhandler on Opportunity (before insert,before update,after insert , after update ) {
    
    if(trigger.isbefore && trigger.isinsert|| trigger.isupdate){
  
        OpportunityTriggerHandler.UpdateandInsert(trigger.new, trigger.oldMap);
    }
    if(trigger.isbefore && trigger.isupdate){
        OpportunityTriggerHandler.dontchangeamount(trigger.new, trigger.oldMap);
    }
     if(trigger.isafter && trigger.isinsert){
  
        OpportunityTriggerHandler.createx2fromx1(trigger.new,trigger.oldMap);
    }
     if(trigger.isafter && trigger.isinsert|| trigger.isupdate){
  
        OpportunityTriggerHandler.Updatetype(trigger.new,trigger.oldMap);
    }
     if(trigger.isafter && trigger.isinsert|| trigger.isupdate){
  
        OpportunityTriggerHandler.updateClosedWonAmount(trigger.new,trigger.oldMap);
    }
    
    
}