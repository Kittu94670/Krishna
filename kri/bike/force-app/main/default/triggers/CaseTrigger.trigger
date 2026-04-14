trigger CaseTrigger on Case (after insert) {
    for (Case c : Trigger.new) {
        if (c.Origin != null) {
            // Background lo callout method ni pilustunnam
            OrgAIntegrationHandler.sendRequest(c.Id, c.Origin);
        }
    }
}