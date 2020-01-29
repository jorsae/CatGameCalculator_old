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
var stringReq = [new CraftingRequirement(cotton, 3)];
string = new CraftingItem("String", 5, 50, stringReq);
craftingRecipes.set(string.name, string);

var woodReq = [new CraftingRequirement(log, 3)];
wood = new CraftingItem("Wood", 5, 50, woodReq);
craftingRecipes.set(wood.name, wood);

var ribbonReq = [new CraftingRequirement(string, 2), new CraftingRequirement(wood, 2)];
ribbon = new CraftingItem("Ribbon", 15, 100, ribbonReq);
craftingRecipes.set(ribbon.name, ribbon);

// Shiny Crafting
var metalReq = [new CraftingRequirement(rock, 3)];
metal = new CraftingItem("Metal", 15, 100, metalReq);
craftingRecipes.set(metal.name, metal);

var needlesReq = [new CraftingRequirement(metal, 4), new CraftingRequirement(ribbon, 1)];
needles = new CraftingItem("Needles", 30, 200, needlesReq);
craftingRecipes.set(needles.name, needles);

var sparklesReq = [new CraftingRequirement(needles, 2), new CraftingRequirement(ribbon, 2)];
sparkles = new CraftingItem("Sparkles", 60, 300, sparklesReq);
craftingRecipes.set(sparkles.name, sparkles);

// Precious Crafting
var bronzeReq = [new CraftingRequirement(rock, 4)];
bronze = new CraftingItem("Bronze", 30, 200, bronzeReq);
craftingRecipes.set(bronze.name, bronze);

var silverReq = [new CraftingRequirement(bronze, 3), new CraftingRequirement(sparkles, 1)];
silver = new CraftingItem("Silver", 120, 300, silverReq);
craftingRecipes.set(silver.name, silver);

var goldReq = [new CraftingRequirement(silver, 2), new CraftingRequirement(sparkles, 2)];
gold = new CraftingItem("Gold", 360, 500, goldReq);
craftingRecipes.set(gold.name, gold);

// Jewel Crafting
var amethystReq = [new CraftingRequirement(quartz, 10)];
amethyst = new CraftingItem("Amethyst", 60, 300, amethystReq);
craftingRecipes.set(amethyst.name, amethyst);

var pendantReq = [new CraftingRequirement(amethyst, 7), new CraftingRequirement(silver, 2)];
pendant = new CraftingItem("Pendant", 180, 500, pendantReq);
craftingRecipes.set(pendant.name, pendant);

var necklaceReq = [new CraftingRequirement(pendant, 3), new CraftingRequirement(gold, 2)];
necklace = new CraftingItem("Necklace", 760, 500, necklaceReq);
craftingRecipes.set(necklace.name, necklace);

// Magic Crafting
var orbReq = [new CraftingRequirement(quartz, 20)];
orb = new CraftingItem("Orb", 60, 300, orbReq);
craftingRecipes.set(orb.name, orb);

var waterReq = [new CraftingRequirement(orb, 2), new CraftingRequirement(silver, 1)];
water = new CraftingItem("Water", 360, 800, waterReq);
craftingRecipes.set(water.name, water);

var fireReq = [new CraftingRequirement(orb, 6), new CraftingRequirement(gold, 1)];
fire = new CraftingItem("Fire", 720, 1000, fireReq);
craftingRecipes.set(fire.name, fire);

// Ancient Crafting
var waterstoneReq = [new CraftingRequirement(water, 2), new CraftingRequirement(ribbon, 10)];
waterstone = new CraftingItem("Waterstone", 720, 1500, waterstoneReq);
craftingRecipes.set(waterstone.name, waterstone);

var firestoneReq = [new CraftingRequirement(fire, 1), new CraftingRequirement(sparkles, 2)];
firestone = new CraftingItem("Firestone", 720, 1500, firestoneReq);
craftingRecipes.set(firestone.name, firestone);

var elementstoneReq = [new CraftingRequirement(firestone, 1), new CraftingRequirement(waterstone, 1)];
elementstone = new CraftingItem("Elementstone", 1440, 5000, elementstoneReq);
craftingRecipes.set(elementstone.name, elementstone);

// Ruin Crafting
var artifactReq = [new CraftingRequirement(elementstone, 1), new CraftingRequirement(necklace, 1)];
artifact = new CraftingItem("Artifact", 2880, 10000, artifactReq); // TODO: This time might be wrong
craftingRecipes.set(artifact.name, artifact);