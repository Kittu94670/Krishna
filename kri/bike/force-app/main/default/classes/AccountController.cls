public with sharing class AccountController {

    @AuraEnabled
    public static String createAccount(String name, String phone) {
        
        Account acc = new Account();
        acc.Name = name;
        acc.Phone = phone;

        insert acc;
//HI from krishna
        return acc.Id;
    }
}