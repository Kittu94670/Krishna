public with sharing class KrishnaCls {

    // Fetch all Orders with their Product info
    @AuraEnabled(cacheable=true)
    public static List<Orders__c> getAllOrders() {
        List<Orders__c> orders = [
            SELECT Id, Name, Account__c, Contact__c, Status__c, Effective_Date__c,
                   Product__c, Product__r.Name, Refund_Amount__c
            FROM Orders__c
            ORDER BY Effective_Date__c DESC
            LIMIT 200
        ];
        return orders;
    }
// commenthgj
    // Create Case (same as before)
    @AuraEnabled
    public static Id createCaseWithRecordType(
        String requestType,
        String orderId,
        String productId,
        String reason,
        String description,
        String payTo,
        String userName
    ) {
        Id rtId;
        try {
            RecordType rt = [SELECT Id FROM RecordType WHERE SObjectType='Case' AND DeveloperName = :requestType LIMIT 1];
            rtId = rt.Id;
        } catch(Exception e) {
            throw new AuraHandledException('RecordType not found: ' + requestType);
        }

        Orders__c orderRecord = [SELECT Id, Contact__c, Account__c, Product__c FROM Orders__c WHERE Id = :orderId LIMIT 1];

        Case newCase = new Case(
            RecordTypeId = rtId,
            Orders__c = orderId,
            Product__c = productId,
            Request_Type__c = requestType,
            Reason__c = reason,
            Description = description,
            Pay_To__c = (requestType == 'Return') ? payTo : null,
            Status = 'New',
            Origin = 'Web',
            Subject = requestType + ' Request by ' + userName,
            AccountId = orderRecord.Account__c,
            ContactId = orderRecord.Contact__c
        );

        insert newCase;
        return newCase.Id;
    }
}