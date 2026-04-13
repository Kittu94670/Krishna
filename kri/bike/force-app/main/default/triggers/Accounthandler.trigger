trigger Accounthandler on Account (before insert,after insert,before delete) {
    if(trigger.isbefore && trigger.isinsert){
        Beforeafterinserttrigger.beforeantunna(trigger.new);
    }
    if(trigger.isafter && trigger.isinsert){
        Beforeafterinserttrigger.afterantunna(trigger.new);
    }
     if(trigger.isbefore && trigger.isdelete){
        DeleteFunctionality.parentaccountdelete(trigger.old);
    }


}