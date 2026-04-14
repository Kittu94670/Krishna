PUBLIC CLASS BeforeAfterInsert {
PUBLIC STATIC VOID contact (LIST <Account>newlist){
list<contact> newcontact = new list<contact>();// ee line correct
for (account acc : newlist)
{
if(acc.rating == 'Warm'){
	//For(integer i=1;i<=1000;i++)
   // { 
	contact c = new contact();//ee line correctct
	c.LastName = 'ral';
	c.accountid = acc.id;
    newcontact.add(c);
    

    

}
if(!newcontact.isEmpty()){
insert newcontact;

}
}
}
}