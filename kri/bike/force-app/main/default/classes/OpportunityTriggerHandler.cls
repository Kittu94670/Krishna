public class OpportunityTriggerHandler {
    Public static void UpdateandInsert(list<Opportunity> newlist ,Map<Id, Opportunity> oldMap ){
        for(Opportunity Opp: newlist){
            if(oldMap == null){
                
                if(Opp.StageName  == 'Prospecting' ){
                    Opp.Type = 'New Customer';
                }
                else 
                    if(opp.StageName == 'Closed Won' ){
                        
                        Opp.Type = 'Existing Customer - Upgrade';
                    }
                
            }
            else{           
                
                Opportunity Oldvalue = oldMap.get(Opp.Id);
                if(Opp.StageName != Oldvalue.StageName){
                    
                    if(Opp.StageName  == 'Prospecting' ){
                        Opp.Type = 'New Customer';
                    }
                    else 
                        if(opp.StageName == 'Closed Won' ){
                            Opp.Type = 'Existing Customer - Upgrade';
                            
                        }
                    
                }
            }
        }
    }
    
    public static void dontchangeamount(list<opportunity> newlist,Map<Id,Opportunity> Oldopp){ 
        Profile Pro = [SELECT Id FROM Profile WHERE Name = 'System Administrator' LIMIT 1];
        for(Opportunity opp: newlist){
            
            Opportunity ol = Oldopp.get(opp.Id);
            if(UserInfo.getProfileId() == Pro.Id){
                
                if( opp.Amount != null && opp.Amount > 50000){
                    if(Oldopp != null && Oldopp.containsKey(opp.Id) && opp.Amount == Oldopp.get(opp.Id).Amount ){
                        
                    }      
                    
                    opp.Amount.addError('Amount > 50000 cannot be changed ');
                    
                    
                }
            }
            
        }   
    }
    
    
    
    
    
    public static void createx2fromx1(list<Opportunity> newlist,Map<Id,Opportunity> oldMap){
        list<Recordtype > RTlist = [select Id , DeveloperName from RecordType WHERE Sobjecttype ='Opportunity' ORDER BY DeveloperName];
        
        Map<String,Id> rtMap = new Map<String,Id>();
        for(RecordType rt : RTlist){
            rtMap.put(rt.DeveloperName,rt.Id);
        }
        Id x1 = rtMap.get('X1');
        Id x2 =rtMap.get('X2');
        list<Opportunity> createnew = new list<Opportunity>();
        
        
        for(Opportunity opp : newlist){
            
            if(opp.RecordTypeId == x1){
                Opportunity newopp = new Opportunity();
                
                
                newopp.Name = opp.Name;
                newopp.RecordTypeId = x2;
                newopp.StageName = opp.StageName;
                newopp.CloseDate = opp.CloseDate;
                newopp.Type = opp.Type;
                newopp.Amount = opp.Amount;
                newopp.Name_Recordtype3__c = opp.Name_Recordtype1__c;
                newopp.EmailRecordtype3__c =opp.EmailRecordtype1__c;
                newopp.MobileRecordtype3__c = opp.MobileRecordtype1__c;
                createnew.add(newopp);
                system.debug(newopp);
                
                
            }
        }
        if(!createnew.isEmpty()){
            insert createnew;
        }
    }
    
    // Whenevere a type in Opportunity is new customer , account associated with that opportunity (account type) should be same .
    
    public static void Updatetype(List<Opportunity> newlist,Map<Id,Opportunity> OldMap){
        Map<Id, String> mapofaccountIdvsopportunity = new Map<Id,String>();
        
        for(Opportunity opp : newlist){
            if(opp.AccountId == null){
                continue;
            }
           
            if(oldMap ==  null){
               
                  mapofaccountIdvsopportunity.put(opp.AccountId, opp.Type);
                    
                    
                
            }else{
                Opportunity oldopp = OldMap.get(opp.Id);
                if(  oldopp != null && opp.Type != oldopp.Type){
                
                                     mapofaccountIdvsopportunity.put(opp.AccountId,opp.Type);
 
                }
            }
            
            
        }
        List<Account> AClist = [select Id,Type from Account WHERE Id IN  :mapofaccountIdvsopportunity.keyset()];
        for(Account A : AClist){
            A.Type = mapofaccountIdvsopportunity.get(A.Id);
        }
        if(!AClist.isEmpty()){
            update AClist;
        }
    }
    // Whenever a stagename in opportunity is closed won , reflect the total amount of opportunities of closed won to that associated account.
    
    public static void updateclosedwonamount(list<Opportunity>newlist,Map<Id,Opportunity> oldMap){
        set<Id> ACCid = new set<Id>();
        for(Opportunity opp: newlist){
            if(opp.AccountId!= null){
                ACCid.add(opp.AccountId);
            }
            
        }
        list<Opportunity> opplist = [select AccountId, Amount FROM Opportunity WHERE StageName = 'Closed Won' AND AccountId IN:ACCid];
        Map<Id,Decimal> totalAmount = new Map<Id,Decimal>();
        for(Opportunity opp :opplist){
            if(!totalAmount.containsKey(opp.AccountId)){
                totalAmount.put(opp.AccountId,0);
            }
            if(opp.Amount != null){
                totalAmount.put(opp.AccountId,totalAmount.get(opp.AccountId)+opp.Amount);
            }
        }
        list<Account> AAAlist = new list<Account>();
        for(Id ACid :ACCid){
            Account A = new Account();
            A.Id = ACid;
            A.AnnualRevenue = totalAmount.containsKey(ACid)?totalAmount.get(ACid) :0;
            AAAlist.add(A);
        }
        update AAAlist;
    }
}