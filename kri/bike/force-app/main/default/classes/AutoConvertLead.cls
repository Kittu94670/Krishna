public with sharing class AutoConvertLead {

    public class LeadInput {
        @InvocableVariable(required=true)
        public Id leadId;
    }

    @InvocableMethod(label='Auto Convert Lead')
    public static void convertLeads(List<LeadInput> requests) {

        List<Database.LeadConvert> jobs = new List<Database.LeadConvert>();

        for (LeadInput r : requests) {

            // Validate the ID is a Lead Id
            if (r.leadId == null || String.valueOf(r.leadId).substring(0,3) != '00Q') {
                continue; // skip invalid / non-lead ids
            }

            Lead ld = [SELECT Id, IsConverted FROM Lead WHERE Id = :r.leadId LIMIT 1];

            // Skip already converted leads
            if (ld.IsConverted) {
                continue;
            }
   
            Database.LeadConvert lc = new Database.LeadConvert();
            lc.setLeadId(ld.Id);
            lc.setConvertedStatus('Closed - Converted'); // must exist in Lead Status
            lc.setDoNotCreateOpportunity(false);

            jobs.add(lc);
        }

        if (!jobs.isEmpty()) {
            Database.convertLead(jobs, true);
        }
    }
}