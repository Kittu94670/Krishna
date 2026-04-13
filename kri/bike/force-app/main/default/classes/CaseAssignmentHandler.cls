public with sharing class CaseAssignmentHandler {
    // Method to assign Cases to queue
    public static void assignToQueue(List<Case> newCases) {
        if(newCases.isEmpty()) return;

        // Get the queue Id for "Support Team"
        Id queueId = [SELECT Id FROM Group WHERE Name = 'Support Team' AND Type = 'Queue' LIMIT 1].Id;
        System.debug('Queue Id: ' + queueId);

        // Assign each new Case to the queue regardless of current OwnerId
        for(Case c : newCases) {
            c.OwnerId = queueId;
          
        }
    }
}