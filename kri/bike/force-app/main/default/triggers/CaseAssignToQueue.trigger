trigger CaseAssignToQueue on Case (before insert) {
    CaseAssignmentHandler.assignToQueue(Trigger.new);
}