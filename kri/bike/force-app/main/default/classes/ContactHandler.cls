public class ContactHandler {
    public static void DontAllowDuplicates(list<Contact> newlist){
        set<String> UniqueEmail = new set<String>();
        for(Contact C : newlist){
            if (C.Email != null) {
    UniqueEmail.add(C.Email.toLowerCase());
}

           // UniqueEmail.add(C.Email.tolowerCase());
        }
                list<Contact> ExistingEmail = new list<Contact>();
  
        if(!UniqueEmail.isEmpty()){
             ExistingEmail = [Select Id, Email FROM Contact WHERE Email IN :UniqueEmail];
        }
        if(ExistingEmail != null && !ExistingEmail.isEmpty()){
                    set<String> DuplicateMails = new set<String>();
            for(Contact Exist :ExistingEmail){
                DuplicateMails.add(Exist.Email);
            }
            /*for(Contact C:newlist){
                if(C.Email!= null && DuplicateMails.contains(C.Email) ){
                    C.addError('Cannot create a contact record with existing mail Id');
                    
                }
            }
*/

        }
    }
}