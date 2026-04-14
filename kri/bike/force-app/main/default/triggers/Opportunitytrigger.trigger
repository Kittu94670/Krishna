trigger Opportunitytrigger on Opportunity(after Update){
if(trigger.isafter && trigger.isUpdate){
BeforeAfterUpdate.kittu(TRIGGER.NEW);
}
}