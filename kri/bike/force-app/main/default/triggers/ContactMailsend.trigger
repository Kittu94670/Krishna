trigger ContactMailsend on Contact (before insert,after update) {
    if(trigger.isbefore && trigger.isinsert){
        ContactHandler.DontAllowDuplicates(trigger.new);
    }
    if(trigger.isafter && trigger.isupdate){
        DeleteFunctionality.sendmail(trigger.new,trigger.oldMap);
    }

}