public with sharing class CalculatorController {
    @AuraEnabled(cacheable=false)
    public static Decimal calculate(Decimal num1, Decimal num2, String operation) {
        Decimal result = 0;
        
        if(operation == 'Add'){
            result = num1 + num2;
        } else if(operation == 'Subtract'){
            result = num1 - num2;
        } else if(operation == 'Multiply'){
            result = num1 * num2;
        } else if(operation == 'Divide'){
            if(num2 == 0){
                throw new AuraHandledException('Cannot divide by zero');
            }
            result = num1 / num2;
        }

        return result;
    }
}