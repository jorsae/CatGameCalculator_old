import { craftingRecipes, currentCraft } from "./globals";

/**
 * Converts int to abbreviated number. 1,005,123 => 1m, etc.
 */
export function intToString (value) {
    var suffixes = ["", "k", "m", "b","t"];
    var suffixNum = Math.floor((""+value).length/3);
    var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(2));
    if (shortValue % 1 != 0) {
        shortValue = shortValue.toFixed(1);
    }
    return shortValue+suffixes[suffixNum];
}

/**
 * Recursive function that will fetch all crafting requirements from a given item.
 */
export function getCraftingRequirements(item, parentQuantity = 1){
    if(item.craftingRequirements === null){
        return;
    }

    // Adds all the requirements
    for(var i = 0; i < item.craftingRequirements.length; i++){
        var name = item.craftingRequirements[i].craftingItem.name;
        var quantity = item.craftingRequirements[i].quantity * parentQuantity;
        
        var nameMap = currentCraft.get(name);
        if(nameMap === undefined){
            var craftingItem = craftingRecipes.get(name);
            getCraftingRequirements(craftingItem, quantity);
            currentCraft.set(name, quantity);
        }
        else{
            var craftingItem = craftingRecipes.get(name);
            getCraftingRequirements(craftingItem, quantity);
            var oldQuantity = currentCraft.get(name);
            currentCraft.set(name, oldQuantity + quantity);
        }
    }
    return currentCraft;
}