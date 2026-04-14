public class DataTypesFunctionality {
    public static void stringfunctionality(){
      string s='Krishna sai Bashipaka' ;
        system.debug(s);
    }
    public static void datefunctionality(){
        date d= date.newinstance(2002,8,28);
        date e= d.adddays(2);
        system.debug(e);
        date f = d.addyears(20);
        system.debug(f);
        date m = d.addmonths(4);
        system.debug(m);
        integer h = d.day();
        system.debug(h);
        integer k =d.dayofyear();
        system.debug(k);
        integer l = date.daysinmonth(2026,12);
        system.debug(l);
        
        
    }
}