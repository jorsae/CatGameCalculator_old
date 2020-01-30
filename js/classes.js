class CraftingRequirement{
    constructor(craftingItem, quantity){
        this.craftingItem = craftingItem;
        this.quantity = quantity;
    }

    toString(){
        this.craftingItem.name + ' : ' + this.quantity;
    }
}

class CraftingItem{
    constructor(name, craftingTime, cost, rarity, craftingRequirements = null){
        this.name = name;
        this.craftingTime = craftingTime;
        this.cost = cost;
        this.rarity = rarity;

        this.craftingRequirements = craftingRequirements;
    }

    toString(){
        var craftReq = "";
        for(var i = 0; i < this.craftingRequirements.length; i++){
            craftReq += this.craftingRequirements[i].craftingItem.name + ' : ' + this.craftingRequirements[i].quantity + " ";
        }
        return this.name + ", " + this.craftingTime + "minutes, " + this.cost + "coins. Crafting Requirement: " + craftReq;
    }
    
    getCost(time, quantity){
        const halfPrice = Math.ceil(this.cost / 2);
        var crafts = 1;
        if(this.craftingTime < time){
            crafts = Math.ceil(time / this.craftingTime);
        }

        if(crafts > quantity){
            crafts = quantity;
        }
        var itemsPerCraft = Math.ceil(quantity / crafts);

        var cost = (this.cost / 4) * (Math.pow(itemsPerCraft, 2) + 3 * itemsPerCraft) * crafts;

        return [cost, itemsPerCraft, crafts];
    }
}