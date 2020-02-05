function getCraftingRequirements(item, parentQuantity = 1){
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