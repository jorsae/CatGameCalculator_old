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
    constructor(name, craftingTime, baseCost, rarity, craftingRequirements = null){
        this.name = name;
        this.craftingTime = craftingTime;
        this.baseCost = baseCost;
        this.rarity = rarity;

        this.craftingRequirements = craftingRequirements;
    }

    toString(){
        var craftReq = "";
        for(var i = 0; i < this.craftingRequirements.length; i++){
            craftReq += this.craftingRequirements[i].craftingItem.name + ' : ' + this.craftingRequirements[i].quantity + " ";
        }
        return this.name + ", " + this.craftingTime + "minutes, " + this.baseCost + "coins. Crafting Requirement: " + craftReq;
    }
}

class CraftingItemOutput{
    constructor(name, craftingTime, baseCost, rarity, quantity){
        this.name = name;
        this.craftingTime = craftingTime;
        this.baseCost = baseCost;
        this.rarity = rarity;
        this.quantity = quantity;
    }

    getRarityValue(){
        switch(this.rarity){
            case rarity.HIDDEN:
                return 0;
            case rarity.RAW:
                return 1;
            default:
            case rarity.COMMON:
                return 2;
            case rarity.RARE:
                return 3;
            case rarity.EPIC:
                return 4;
            case rarity.LEGENDARY:
                return 5;
        }
    }

    getCrafts(time){
        var crafts = 1;
        if(this.craftingTime < time){
            crafts = Math.ceil(time / this.craftingTime);
        }
        if(crafts > this.quantity){
            return this.quantity;
        }
        return crafts;
    }

    getItemsPerCraft(time){
        var crafts = 1;
        if(this.craftingTime < time){
            crafts = Math.ceil(time / this.craftingTime);
        }
        if(crafts > this.quantity){
            crafts = this.quantity;
        }
        return Math.ceil(this.quantity / crafts);
    }

    getCost(time){
        var itemsPerCraft = this.getItemsPerCraft(time);
        var crafts = this.getCrafts(time);

        return (this.baseCost / 4) * (Math.pow(itemsPerCraft, 2) + 3 * itemsPerCraft) * crafts;
    }
}