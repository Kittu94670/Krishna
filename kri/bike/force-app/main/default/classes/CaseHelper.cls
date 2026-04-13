public with sharing class CaseHelper {
    @AuraEnabled(cacheable=true)
    public static List<Order> getOrders() {
        return [SELECT Id, Name FROM Order WHERE Status = 'Activated' LIMIT 50];
    }

    @AuraEnabled(cacheable=true)
    public static List<OrderItem> getOrderProducts(Id orderId) {
        return [
            SELECT Id, Product2.Name
            FROM OrderItem
            WHERE OrderId = :orderId
        ];
    }

    @AuraEnabled
    public static void createCaseRecord(Id orderId, Id productId, String subject, String description) {
        Case newCase = new Case(
            Subject = subject,
            Description = description,
            Origin = 'Web',
            Status = 'New',
            Order__c = orderId,
            Product__c = productId
        );
        insert newCase;
    }
}