global class NotificationBatch implements Database.Batchable<Integer> {

    global Id groupId;

    // constructor
    global NotificationBatch(Id grpId) {
        groupId = grpId;
    }

    // start method
    global Iterable<Integer> start(Database.BatchableContext bc) {
        List<Integer> numbers = new List<Integer>();

        for(Integer i = 1; i <= 25; i++) {
            numbers.add(i);
        }

        return numbers;
    }

    // execute method
    global void execute(Database.BatchableContext bc, List<Integer> scope) {

    List<Notifications__c> notifList = new List<Notifications__c>();

    for(Integer i : scope) {

        Notifications__c n = new Notifications__c();

        n.Name = 'groupBBNotification ' + i;
        n.Status__c = 'Success';
        n.Group__c = groupId;
        n.Source__c = 'Phone';

        notifList.add(n);
    }

    Database.SaveResult[] results = Database.insert(notifList, false);

    for(Database.SaveResult sr : results) {
        if(!sr.isSuccess()) {
            System.debug('Insert Failed: ' + sr.getErrors()[0].getMessage());
        }
    }
}

    // finish method
    global void finish(Database.BatchableContext bc) {
        System.debug('Done');
    }
}