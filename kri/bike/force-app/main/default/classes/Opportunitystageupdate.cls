//Automate opportunity stage updates when amount exceeds threshold, create follow-up tasks for owner

public class Opportunitystageupdate {
    public static void updatethreshold(list<Opportunity> newlist){    
        for(Opportunity opp : newlist){
            // Opportunity OMP = oldMap.get(opp.Id);
            
            if(opp.Amount != null && opp.Amount > 5000){
                opp.StageName= 'Prospecting';
            }
            
        }
    }
    //Hi krishna , this is raj changes done by me ok raj
    public static void createrelatedtask(list<Opportunity> newlist , Map<Id,Opportunity> oldMap){
        
        list<Task> NT = new list<Task>();
        
        for(Opportunity opp : newlist){
            Opportunity OMP = oldMap.get(opp.Id);
            
            
            if(opp.StageName == 'Prospecting'){
                Task T= new Task();
                T.Subject = 'Created by after update trigger';
                T.WhatId = opp.Id;
                T.OwnerId = opp.OwnerId;
                T.Status = 'Not Started';
                system.debug(T);
                
                
                NT.add(T);
                
            }
        }
        if(!NT.isEmpty()){
            insert NT;
            system.debug(NT);
        }
    }
}