public with sharing class contactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(String acctId) {
        List<Contact> contacts = [SELECT Id, Name, MailingStreet, Phone, Email, LeadSource 
        FROM Contact
        WHERE AccountId = :acctId
        WITH SECURITY_ENFORCED];
        //Add isAccessible() check
        return contacts;
    }
}