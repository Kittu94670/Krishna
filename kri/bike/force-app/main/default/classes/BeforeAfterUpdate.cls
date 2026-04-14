public class BeforeAfterUpdate {
    public static void kittu(List<Opportunity> newList){
        
        if(newList == null || newList.isEmpty()){
            return;
        }
        
        for(Opportunity opp : newList){
            if(opp.Amount != null){
                
                if (opp.Amount <= 5000){
                    opp.StageName = 'Qualification';
                }
                else if(opp.Amount >= 10000){
                    opp.StageName = 'Closed Won';
                }
            }
        }
    }
}