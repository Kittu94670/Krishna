trigger CaseAfterUpdate on Case (after update) {
    Map<Id, Decimal> inventoryToAdd = new Map<Id, Decimal>();
    Map<Id, Decimal> inventoryToSubtract = new Map<Id, Decimal>();
    Map<Id, Decimal> damagedToAdd = new Map<Id, Decimal>();

    for (Case c : Trigger.new) {
        Case oldCase = Trigger.oldMap.get(c.Id);
        System.debug('➡️ Checking Case: ' + c.Id + 
                     ', Request_Type__c=' + c.Request_Type__c + 
                     ', Stage__c=' + c.Stage__c + 
                     ', oldStage=' + oldCase.Stage__c + 
                     ', Product__c=' + c.Product__c);

        // ✅ RETURN FLOW → Add back to inventory
        if (c.Request_Type__c == 'Return' &&
            c.Stage__c == 'Return Close' &&
            oldCase.Stage__c != 'Return Close' &&
            c.Product__c != null) {

            inventoryToAdd.put(
                c.Product__c, 
                (inventoryToAdd.containsKey(c.Product__c) ? inventoryToAdd.get(c.Product__c) : 0) + 1
            );

            System.debug('♻️ Case ' + c.Id + ': Return closed → Product ' + c.Product__c + ' inventory +1');
        }

        // 🔄 EXCHANGE FLOW → Decrease inventory (+ damaged only if reason=Defective)
        if (c.Request_Type__c == 'Exchange' &&
            c.Stage__c == 'Exchange Closed' &&
            oldCase.Stage__c != 'Exchange Closed' &&
            c.Product__c != null) {

            // 1️⃣ Always reduce inventory (but check later for 0)
            inventoryToSubtract.put(
                c.Product__c, 
                (inventoryToSubtract.containsKey(c.Product__c) ? inventoryToSubtract.get(c.Product__c) : 0) + 1
            );

            // 2️⃣ Add to damaged only if reason = Defective
            if (c.Reason__c == 'Defective') {
                damagedToAdd.put(
                    c.Product__c, 
                    (damagedToAdd.containsKey(c.Product__c) ? damagedToAdd.get(c.Product__c) : 0) + 1
                );
                System.debug('💥 Case ' + c.Id + ': Defective exchange → damaged +1');
            } else {
                System.debug('✅ Case ' + c.Id + ': Non-defective exchange → damaged unchanged');
            }

            System.debug('🔁 Case ' + c.Id + ': Exchange closed → Product ' + c.Product__c + ' inventory -1');
        }
    }

    // 🧩 Combine all affected products
    Set<Id> affectedProducts = new Set<Id>();
    affectedProducts.addAll(inventoryToAdd.keySet());
    affectedProducts.addAll(inventoryToSubtract.keySet());
    affectedProducts.addAll(damagedToAdd.keySet());

    if (!affectedProducts.isEmpty()) {
        List<Product2> productsToUpdate = [
            SELECT Id, Name, Inventory_Count__c, Damaged_Count__c
            FROM Product2
            WHERE Id IN :affectedProducts
        ];

        for (Product2 p : productsToUpdate) {
            Decimal inv = (p.Inventory_Count__c == null) ? 0 : p.Inventory_Count__c;
            Decimal dmg = (p.Damaged_Count__c == null) ? 0 : p.Damaged_Count__c;

            // ✅ Return path (add)
            if (inventoryToAdd.containsKey(p.Id)) 
                inv += inventoryToAdd.get(p.Id);

            // ✅ Exchange path (subtract)
            if (inventoryToSubtract.containsKey(p.Id)) {
                Decimal toSubtract = inventoryToSubtract.get(p.Id);
                if (inv > 0) {
                    inv -= toSubtract;
                    if (inv < 0) inv = 0; // never negative
                    System.debug('🧮 Product ' + p.Name + ': Inventory reduced by ' + toSubtract);
                } else {
                    System.debug('🚫 Product ' + p.Name + ': Inventory already 0, skipping subtraction');
                }
            }

            // ✅ Damaged path
            if (damagedToAdd.containsKey(p.Id))
                dmg += damagedToAdd.get(p.Id);

            System.debug('📦 Updating Product: ' + p.Name +
                         ' | Final Inventory=' + inv + 
                         ' | Final Damaged=' + dmg);

            p.Inventory_Count__c = inv;
            p.Damaged_Count__c = dmg;
        }

        update productsToUpdate;
        System.debug('✅ Inventory & Damaged Counts updated successfully.');
    } else {
        System.debug('⚠️ No qualified cases for update.');
    }

    System.debug('🏁 CaseAfterUpdate Trigger completed successfully.');
}