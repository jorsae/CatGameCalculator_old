var craftingRecipes = new Map(); // Used to store all the different crafting recipes

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
    constructor(name, craftingTime, cost, craftingRequirements){
        this.name = name;
        this.craftingTime = craftingTime;
        this.cost = cost;

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

        console.log(this.name + ': ' + itemsPerCraft + 'x, ' + crafts + 'times | cost: ' + cost);
        return cost;
    }
}

// Base
cotton = new CraftingItem("Cotton", 0, 0, null);
log = new CraftingItem("Log", 0, 0, null);
rock = new CraftingItem("Rock", 0, 0, null);
quartz = new CraftingItem("Quartz", 0, 0, null);
craftingRecipes.set(cotton.name, cotton);
craftingRecipes.set(log.name, log);
craftingRecipes.set(rock.name, rock);
craftingRecipes.set(quartz.name, quartz);

// Basic Crafting
var stringReq = [ new CraftingRequirement(cotton, 3) ];
string = new CraftingItem("String", 5, 50, stringReq);
craftingRecipes.set(string.name, string);

var woodReq = [ new CraftingRequirement(log, 3) ];
wood = new CraftingItem("Wood", 5, 50, woodReq);
craftingRecipes.set(wood.name, wood);

var ribbonReq = [ new CraftingRequirement(string, 2), new CraftingRequirement(wood, 2) ];
ribbon = new CraftingItem("Ribbon", 15, 100, ribbonReq);
craftingRecipes.set(ribbon.name, ribbon);

// Shiny Crafting
var metalReq = [ new CraftingRequirement(rock, 3) ];
metal = new CraftingItem("Metal", 15, 100, metalReq);
craftingRecipes.set(metal.name, metal);

var needlesReq = [ new CraftingRequirement(metal, 4), new CraftingRequirement(ribbon, 1) ];
needles = new CraftingItem("Needles", 30, 200, needlesReq);
craftingRecipes.set(needles.name, needles);