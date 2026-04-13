@RestResource(urlMapping='/AccountInt/*')
global with sharing class restAccount {

    // GET → Fetch Accounts
    @HttpGet
    global static void getAccounts() {

        APIResponse res;

        try{

            List<Account> accList =
            [SELECT Id, Name, Phone FROM Account WHERE Name = 'Raj'];

            res = new APIResponse(accList);

        }catch(Exception e){

            res = new APIResponse(e);
        }

        RestContext.response.responseBody =
        Blob.valueOf(JSON.serialize(res));//Rest API responseBody accepts Blob only
    }

    // POST → Create Accounts
    @HttpPost
    global static void createAccounts() {

        APIResponse res;

        try{

            String jsonAccounts = RestContext.request.requestBody.toString();

            List<Account> deserializedAccounts =
            (List<Account>) JSON.deserialize(jsonAccounts, List<Account>.class);

            for(Account acc : deserializedAccounts){
               // acc.Name = 'Post ' + acc.Name;
                acc.Id = null;
            }

            insert deserializedAccounts;

            res = new APIResponse(deserializedAccounts);

        }catch(Exception e){

            res = new APIResponse(e);
        }

        RestContext.response.responseBody =
        Blob.valueOf(JSON.serialize(res));//Rest API responseBody accepts Blob only
    }

    // PATCH → Update Accounts
    @HttpPatch
    global static void updateAccounts() {

        APIResponse res;

        try{

            String jsonAccounts = RestContext.request.requestBody.toString();

            List<Account> accList =
            (List<Account>) JSON.deserialize(jsonAccounts, List<Account>.class);

            update accList;

            res = new APIResponse(accList);

        }catch(Exception e){

            res = new APIResponse(e);
        }

        RestContext.response.responseBody =
        Blob.valueOf(JSON.serialize(res));//Rest API responseBody accepts Blob only
    }

    // PUT → Upsert Accounts
    @HttpPut
    global static void upsertAccounts() {

        APIResponse res;

        try{

            String jsonAccounts = RestContext.request.requestBody.toString();

            List<Account> accList =
            (List<Account>) JSON.deserialize(jsonAccounts, List<Account>.class);

            upsert accList;

            res = new APIResponse(accList);

        }catch(Exception e){

            res = new APIResponse(e);
        }

        RestContext.response.responseBody =
        Blob.valueOf(JSON.serialize(res));//Rest API responseBody accepts Blob only
    }

    // DELETE → Delete Account
    @HttpDelete
    global static void deleteAccount() {

        APIResponse res;

        try{

            String accId = RestContext.request.params.get('id');

            list<Account> acc =
            [SELECT Id FROM Account WHERE Id = :accId LIMIT 1 ];
            
            if(acc.isEmpty()){
                //throw new Exception('Account not found');
               res= new APIResponse('Account not found');
            }else{

            delete acc;
            res= new APIResponse('Account Deleted Succesfully');
            }

            //res = new APIResponse(true);

        }catch(Exception e){

            res = new APIResponse(e);
        }

        RestContext.response.responseBody = Blob.valueOf(JSON.serialize(res));
    }
    }