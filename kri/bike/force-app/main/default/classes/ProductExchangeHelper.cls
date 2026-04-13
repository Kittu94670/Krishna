public with sharing class ProductExchangeHelper {

    // 1️⃣ Get logged-in user name
    @AuraEnabled(cacheable=true)
    public static String getUserName(Id userId) {
        User u = [SELECT Id, FirstName, LastName FROM User WHERE Id = :userId LIMIT 1];
        return u.FirstName + ' ' + u.LastName;
    }

    // 2️⃣ Get Products (Dev Org: return all active products)
    @AuraEnabled(cacheable=true)
    public static List<Product2> getOrderedProducts(Id userId) {
        return [SELECT Id, Name 
                FROM Product2 
                WHERE IsActive = true 
                LIMIT 100];
    }
}