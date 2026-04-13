trigger CaseTrigger on Case (after insert) {
    for (Case c : Trigger.new) {
        if (c.Origin != null) {
            OrgAIntegrationHandler.sendRequest(c.Id, c.Origin);
        }
    }
}