public with sharing class ContactController {
    
    // 1. Fetch DataTable Columns Dynamically
    @AuraEnabled(cacheable=true)
    public static List<Map<String, String>> getTableColumns() {
        List<Map<String, String>> columns = new List<Map<String, String>>();
        columns.add(new Map<String, String>{'label' => 'First Name', 'fieldName' => 'FirstName'});
        columns.add(new Map<String, String>{'label' => 'Last Name', 'fieldName' => 'LastName'});
        columns.add(new Map<String, String>{'label' => 'Email', 'fieldName' => 'Email', 'type' => 'email'});
        columns.add(new Map<String, String>{'label' => 'Mailing City', 'fieldName' => 'MailingCity'});
        return columns;
    }

    // 2. Fetch Unique Cities for Combo-box
    @AuraEnabled(cacheable=true)
    public static List<Map<String, String>> getCityOptions() {
        List<Map<String, String>> options = new List<Map<String, String>>();
        options.add(new Map<String, String>{'label' => 'All Cities', 'value' => 'All'});
        
        // Get unique cities from Contact object
        for(AggregateResult ar : [SELECT MailingCity FROM Contact WHERE MailingCity != NULL GROUP BY MailingCity]) {
            String city = (String)ar.get('MailingCity');
            options.add(new Map<String, String>{'label' => city, 'value' => city});
        }
        return options;
    }

    // 3. Fetch Contacts based on selected City
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactRecords(String selectedCity) {
        if (selectedCity == 'All' || String.isBlank(selectedCity)) {
            return [SELECT Id, FirstName, LastName, Email, MailingCity FROM Contact LIMIT 100];
        }
        return [SELECT Id, FirstName, LastName, Email, MailingCity FROM Contact WHERE MailingCity = :selectedCity];
    }
}