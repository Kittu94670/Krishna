public with sharing class caseFormController {

    @AuraEnabled(cacheable=true)
    public static List<Order> getMyOrders() {
        Id userId = UserInfo.getUserId();
        User u = [SELECT Id, ContactId FROM User WHERE Id = :userId LIMIT 1];
        List<Order> orders = new List<Order>();

        // Orders linked via Contact
        if (u.ContactId != null) {
            List<Order> contactOrders = [
                SELECT Id, Name, OrderNumber, Status, EffectiveDate, TotalAmount
                FROM Order
                WHERE AccountId IN (SELECT AccountId FROM Contact WHERE Id = :u.ContactId)
            ];
            orders.addAll(contactOrders);
        }

        // Orders created by user
        List<Order> myOrders = [
            SELECT Id, Name, OrderNumber, Status, EffectiveDate, TotalAmount
            FROM Order
            WHERE CreatedById = :userId
        ];
        orders.addAll(myOrders);

        // Remove duplicates
        Map<Id, Order> uniqueOrders = new Map<Id, Order>();
        for (Order o : orders) uniqueOrders.put(o.Id, o);

        return uniqueOrders.values();
    }

    @AuraEnabled(cacheable=true)
    public static List<OrderItem> getProductsByOrder(Id orderId) {
        if (orderId == null) return new List<OrderItem>();
        return [
            SELECT Id, Product2.Id, Product2.Name, UnitPrice
            FROM OrderItem
            WHERE OrderId = :orderId
        ];
    }
}