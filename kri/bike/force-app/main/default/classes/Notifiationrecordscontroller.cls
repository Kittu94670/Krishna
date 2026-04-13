public class Notifiationrecordscontroller {
    @InvocableMethod
    public static void runbatch(list<string> l){
        CreateNotificationRecords batch = new CreateNotificationRecords(100);
        Database.executeBatch(batch , 102);
    }

}