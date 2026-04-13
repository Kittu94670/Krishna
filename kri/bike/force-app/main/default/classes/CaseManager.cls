public with sharing class CaseManager {
    @AuraEnabled(cacheable=true)
    public static List<Orders__c> getMyOrdersDebug() {
        Id userId = UserInfo.getUserId();
        User u = [SELECT Id, ContactId FROM User WHERE Id = :userId LIMIT 1];

        List<Orders__c> orders = new List<Orders__c>();

        if (u.ContactId != null) {
            orders.addAll([
                SELECT Id, Name, Account__c, Contact__c, Status__c, Effective_Date__c,
                       Product__c, Product__r.Name, Refund_Amount__c
                FROM Orders__c
                WHERE Account__c IN (SELECT AccountId FROM Contact WHERE Id = :u.ContactId)
            ]);
        }

        orders.addAll([
            SELECT Id, Name, Account__c, Contact__c, Status__c, Effective_Date__c,
                   Product__c, Product__r.Name, Refund_Amount__c
            FROM Orders__c
            WHERE CreatedById = :userId
        ]);

        Map<Id, Orders__c> uniqueOrders = new Map<Id, Orders__c>();
        for (Orders__c o : orders) uniqueOrders.put(o.Id, o);
        return uniqueOrders.values();
    }
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
        Id rtId = [
            SELECT Id 
            FROM RecordType 
            WHERE SObjectType = 'Case' AND DeveloperName = :requestType 
            LIMIT 1
        ].Id;

        Orders__c orderRecord = [
            SELECT Id, Contact__c, Account__c, Product__c 
            FROM Orders__c 
            WHERE Id = :orderId 
            LIMIT 1
        ];

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
    @AuraEnabled(cacheable=true)
    public static ServiceRequestWrapper getMyServiceRequests() {
        Id userId = UserInfo.getUserId();
        User u = [SELECT Id, ContactId, AccountId FROM User WHERE Id = :userId LIMIT 1];

        Set<Id> contactIds = new Set<Id>();
        Set<Id> accountIds = new Set<Id>();

        if (u.ContactId != null) contactIds.add(u.ContactId);
        if (u.AccountId != null) accountIds.add(u.AccountId);
        List<Case> cases = [
            SELECT Id, CaseNumber, Status, Stage__c, Request_Type__c, Reason__c, Pay_To__c,
                   Orders__r.Product__r.Name, CreatedDate
            FROM Case
            WHERE (ContactId IN :contactIds OR AccountId IN :accountIds OR CreatedById = :userId)
            ORDER BY Stage__c ASC, CreatedDate DESC
        ];

        List<CaseWrapper> wrappers = new List<CaseWrapper>();
        Integer openCount = 0;
        Integer closeCount = 0;
        Integer returnClosed = 0;
        Integer exchangeClosed = 0;

        Set<String> closedStages = new Set<String>{'Return Close', 'Exchange Closed', 'Request Rejected', 'Exchange Rejected'};

        for (Case c : cases) {
            String productName = (c.Orders__r != null && c.Orders__r.Product__r != null)
                ? c.Orders__r.Product__r.Name
                : 'No Product';

            wrappers.add(new CaseWrapper(
                c.Id,
                c.CaseNumber,
                productName,
                c.Stage__c,
                c.Pay_To__c,
                c.Request_Type__c,
                c.Reason__c,
                c.Status
            ));

            // Count logic
            if (c.Stage__c == 'Return Close') {
                returnClosed++;
                closeCount++;
            } else if (c.Stage__c == 'Exchange Closed') {
                exchangeClosed++;
                closeCount++;
            } else if (closedStages.contains(c.Stage__c)) {
                closeCount++;
            } else {
                openCount++;
            }
        }

        return new ServiceRequestWrapper(wrappers, openCount, closeCount, wrappers.size(), returnClosed, exchangeClosed);
    }

    // Wrapper for single case row
    public class CaseWrapper {
        @AuraEnabled public Id Id;
        @AuraEnabled public String CaseNumber;
        @AuraEnabled public String Product;
        @AuraEnabled public String Stage;
        @AuraEnabled public String PayTo;
        @AuraEnabled public String RequestType;
        @AuraEnabled public String Reason;
        @AuraEnabled public String Status;

        public CaseWrapper(Id Id, String CaseNumber, String Product, String Stage, String PayTo, String RequestType, String Reason, String Status) {
            this.Id = Id;
            this.CaseNumber = CaseNumber;
            this.Product = Product;
            this.Stage = Stage;
            this.PayTo = PayTo;
            this.RequestType = RequestType;
            this.Reason = Reason;
            this.Status = Status;
        }
    }
    public class ServiceRequestWrapper {
        @AuraEnabled public List<CaseWrapper> cases;
        @AuraEnabled public Integer openCount;
        @AuraEnabled public Integer closeCount;
        @AuraEnabled public Integer totalCount;
        @AuraEnabled public Integer returnClosed;
        @AuraEnabled public Integer exchangeClosed;

        public ServiceRequestWrapper(List<CaseWrapper> cases, Integer openCount, Integer closeCount, Integer totalCount,
                                     Integer returnClosed, Integer exchangeClosed) {
            this.cases = cases;
            this.openCount = openCount;
            this.closeCount = closeCount;
            this.totalCount = totalCount;
            this.returnClosed = returnClosed;
            this.exchangeClosed = exchangeClosed;
        }
    }
}