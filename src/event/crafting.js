import { CraftingItem } from "../util/classes";
import { CraftingRequirement } from "../util/classes";

import { craftingRecipes } from "./globals";
import { rarity } from "./globals";

/**
 * This class constructs and stores all the Crafting Items in the game
 */

const rawMaterialNames = ["Pink Star", "Purple star", "Yellow star"];
const craftingItemNames = ["Clouds", "Rainbow", "Shooting stars",
                            "Asteroid", "Planet", "Cosmos"];

// Base
const rawMaterialA = new CraftingItem(rawMaterialNames[0], 0, 0, rarity.RAW, 1);
const rawMaterialB = new CraftingItem(rawMaterialNames[1], 0, 0, rarity.RAW, 2);
const rawMaterialC = new CraftingItem(rawMaterialNames[2], 0, 0, rarity.RAW, 3);
craftingRecipes.set(rawMaterialA.name, rawMaterialA);
craftingRecipes.set(rawMaterialB.name, rawMaterialB);
craftingRecipes.set(rawMaterialC.name, rawMaterialC);

// Tier 1
const tier1AReq = [new CraftingRequirement(rawMaterialA, 4)];
const tier1A = new CraftingItem(craftingItemNames[0], 15, 20, rarity.COMMON, 5, tier1AReq);
craftingRecipes.set(tier1A.name, tier1A);

const tier1BReq = [new CraftingRequirement(rawMaterialB, 4)];
const tier1B = new CraftingItem(craftingItemNames[1], 15, 20, rarity.COMMON, 6, tier1BReq);
craftingRecipes.set(tier1B.name, tier1B);

const tier1CReq = [new CraftingRequirement(rawMaterialC, 4)];
const tier1C = new CraftingItem(craftingItemNames[2], 15, 20, rarity.COMMON, 7, tier1CReq);
craftingRecipes.set(tier1C.name, tier1C);

// Tier 2
const tier2AReq = [new CraftingRequirement(tier1A, 3), new CraftingRequirement(tier1B, 2), new CraftingRequirement(tier1C, 2)];
const tier2A = new CraftingItem(craftingItemNames[3], 15, 150, rarity.RARE, 8, tier2AReq);
craftingRecipes.set(tier2A.name, tier2A);

const tier2BReq = [new CraftingRequirement(tier2A, 2), new CraftingRequirement(tier1C, 4), new CraftingRequirement(tier1B, 4)];
const tier2B = new CraftingItem(craftingItemNames[4], 30, 200, rarity.RARE, 8, tier2BReq);
craftingRecipes.set(tier2B.name, tier2B);

const tier2CReq = [new CraftingRequirement(tier2B, 3), new CraftingRequirement(tier1A, 8)];
const tier2C = new CraftingItem(craftingItemNames[5], 60, 200, rarity.RARE, 8, tier2CReq);
craftingRecipes.set(tier2C.name, tier2C);