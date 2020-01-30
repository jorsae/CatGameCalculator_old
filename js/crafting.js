// Base
cotton = new CraftingItem("Cotton", 0, 0, rarity.RAW);
log = new CraftingItem("Log", 0, 0, rarity.RAW);
rock = new CraftingItem("Rock", 0, 0, rarity.RAW);
quartz = new CraftingItem("Quartz", 0, 0, rarity.RAW);
craftingRecipes.set(cotton.name, cotton);
craftingRecipes.set(log.name, log);
craftingRecipes.set(rock.name, rock);
craftingRecipes.set(quartz.name, quartz);

// Basic Crafting
var stringReq = [new CraftingRequirement(cotton, 3)];
string = new CraftingItem("String", 5, 50, rarity.COMMON, stringReq);
craftingRecipes.set(string.name, string);

var woodReq = [new CraftingRequirement(log, 3)];
wood = new CraftingItem("Wood", 5, 50, rarity.RARE, woodReq);
craftingRecipes.set(wood.name, wood);

var ribbonReq = [new CraftingRequirement(string, 2), new CraftingRequirement(wood, 2)];
ribbon = new CraftingItem("Ribbon", 15, 100, rarity.EPIC, ribbonReq);
craftingRecipes.set(ribbon.name, ribbon);

// Shiny Crafting
var metalReq = [new CraftingRequirement(rock, 3)];
metal = new CraftingItem("Metal", 15, 100, rarity.COMMON, metalReq);
craftingRecipes.set(metal.name, metal);

var needlesReq = [new CraftingRequirement(metal, 4), new CraftingRequirement(ribbon, 1)];
needles = new CraftingItem("Needles", 30, 200, rarity.RARE, needlesReq);
craftingRecipes.set(needles.name, needles);

var sparklesReq = [new CraftingRequirement(needles, 2), new CraftingRequirement(ribbon, 2)];
sparkles = new CraftingItem("Sparkles", 60, 300, rarity.EPIC, sparklesReq);
craftingRecipes.set(sparkles.name, sparkles);

// Precious Crafting
var bronzeReq = [new CraftingRequirement(rock, 4)];
bronze = new CraftingItem("Bronze", 30, 200, rarity.COMMON, bronzeReq);
craftingRecipes.set(bronze.name, bronze);

var silverReq = [new CraftingRequirement(bronze, 3), new CraftingRequirement(sparkles, 1)];
silver = new CraftingItem("Silver", 120, 300, rarity.RARE, silverReq);
craftingRecipes.set(silver.name, silver);

var goldReq = [new CraftingRequirement(silver, 2), new CraftingRequirement(sparkles, 2)];
gold = new CraftingItem("Gold", 360, 500, rarity.EPIC, goldReq);
craftingRecipes.set(gold.name, gold);

// Jewel Crafting
var amethystReq = [new CraftingRequirement(quartz, 10)];
amethyst = new CraftingItem("Amethyst", 60, 300, rarity.COMMON, amethystReq);
craftingRecipes.set(amethyst.name, amethyst);

var pendantReq = [new CraftingRequirement(amethyst, 7), new CraftingRequirement(silver, 2)];
pendant = new CraftingItem("Pendant", 180, 500, rarity.RARE, pendantReq);
craftingRecipes.set(pendant.name, pendant);

var necklaceReq = [new CraftingRequirement(pendant, 3), new CraftingRequirement(gold, 2)];
necklace = new CraftingItem("Necklace", 760, 500, rarity.EPIC, necklaceReq);
craftingRecipes.set(necklace.name, necklace);

// Magic Crafting
var orbReq = [new CraftingRequirement(quartz, 20)];
orb = new CraftingItem("Orb", 60, 300, rarity.COMMON, orbReq);
craftingRecipes.set(orb.name, orb);

var waterReq = [new CraftingRequirement(orb, 2), new CraftingRequirement(silver, 1)];
water = new CraftingItem("Water", 360, 800, rarity.RARE, waterReq);
craftingRecipes.set(water.name, water);

var fireReq = [new CraftingRequirement(orb, 6), new CraftingRequirement(gold, 1)];
fire = new CraftingItem("Fire", 720, 1000, rarity.EPIC, fireReq);
craftingRecipes.set(fire.name, fire);

// Ancient Crafting
var waterstoneReq = [new CraftingRequirement(water, 2), new CraftingRequirement(ribbon, 10)];
waterstone = new CraftingItem("Waterstone", 720, 1500, rarity.COMMON, waterstoneReq);
craftingRecipes.set(waterstone.name, waterstone);

var firestoneReq = [new CraftingRequirement(fire, 1), new CraftingRequirement(sparkles, 2)];
firestone = new CraftingItem("Firestone", 720, 1500, rarity.RARE, firestoneReq);
craftingRecipes.set(firestone.name, firestone);

var elementstoneReq = [new CraftingRequirement(firestone, 1), new CraftingRequirement(waterstone, 1)];
elementstone = new CraftingItem("Elementstone", 1440, 5000, rarity.LEGENDARY, elementstoneReq);
craftingRecipes.set(elementstone.name, elementstone);

// Ruin Crafting
var artifactReq = [new CraftingRequirement(elementstone, 1), new CraftingRequirement(necklace, 1)];
artifact = new CraftingItem("Artifact", 4320, 10000, rarity.LEGENDARY, artifactReq);
craftingRecipes.set(artifact.name, artifact);