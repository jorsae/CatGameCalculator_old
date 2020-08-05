var craftingItem = require('../classes/craftingItem');
var craftingRequirement = require('../classes/craftingRequirement');
var rarity = require('../classes/rarity');
var eventNames = require('./eventNames');

/**
 * We wrap adding the crafting recipes in a function so we can call it from window.onload.
 * This makes it so that the javascript is not run at once, so that the html/css can render first.
 */
export function getCraftingRecipes(){
    var craftingRecipes = new Map();
    
    // Base
    const rawMaterialA = new craftingItem.CraftingItem(eventNames.rawMaterialNames[0], eventNames.categories[0], 0, 0, rarity.Rarity.RAW, 1);
    const rawMaterialB = new craftingItem.CraftingItem(eventNames.rawMaterialNames[1], eventNames.categories[0], 0, 0, rarity.Rarity.RAW, 2);
    const rawMaterialC = new craftingItem.CraftingItem(eventNames.rawMaterialNames[2], eventNames.categories[0], 0, 0, rarity.Rarity.RAW, 3);
    craftingRecipes.set(rawMaterialA.name, rawMaterialA);
    craftingRecipes.set(rawMaterialB.name, rawMaterialB);
    craftingRecipes.set(rawMaterialC.name, rawMaterialC);
    
    // Tier 1
    const AReq = [new craftingRequirement.CraftingRequirement(rawMaterialA, 4)];
    const A = new craftingItem.CraftingItem(eventNames.craftingItemNames[0], eventNames.categories[1], 20, 15, rarity.Rarity.COMMON, 5, AReq);
    craftingRecipes.set(A.name, A);
    
    const BReq = [new craftingRequirement.CraftingRequirement(rawMaterialB, 4)];
    const B = new craftingItem.CraftingItem(eventNames.craftingItemNames[1], eventNames.categories[1], 20, 15, rarity.Rarity.COMMON, 6, BReq);
    craftingRecipes.set(B.name, B);
    
    const CReq = [new craftingRequirement.CraftingRequirement(rawMaterialC, 4)];
    const C = new craftingItem.CraftingItem(eventNames.craftingItemNames[2], eventNames.categories[1], 20, 15, rarity.Rarity.COMMON, 7, CReq);
    craftingRecipes.set(C.name, C);
    
    // Tier 2
    const DReq = [new craftingRequirement.CraftingRequirement(A, 3), new craftingRequirement.CraftingRequirement(B, 2), new craftingRequirement.CraftingRequirement(C, 2)];
    const D = new craftingItem.CraftingItem(eventNames.craftingItemNames[3], eventNames.categories[2], 150, 15, rarity.Rarity.RARE, 8, DReq);
    craftingRecipes.set(D.name, D);
    
    const EReq = [new craftingRequirement.CraftingRequirement(D, 2), new craftingRequirement.CraftingRequirement(C, 4), new craftingRequirement.CraftingRequirement(B, 4)];
    const E = new craftingItem.CraftingItem(eventNames.craftingItemNames[4], eventNames.categories[2], 200, 30, rarity.Rarity.RARE, 9, EReq);
    craftingRecipes.set(E.name, E);
    
    const FReq = [new craftingRequirement.CraftingRequirement(E, 3), new craftingRequirement.CraftingRequirement(A, 8)];
    const F = new craftingItem.CraftingItem(eventNames.craftingItemNames[5], eventNames.categories[2], 400, 60, rarity.Rarity.RARE, 10, FReq);
    craftingRecipes.set(F.name, F);

    // Tier 3
    const starsReq = [new craftingRequirement.CraftingRequirement(A, 1), new craftingRequirement.CraftingRequirement(B, 1),
                    new craftingRequirement.CraftingRequirement(C, 1), new craftingRequirement.CraftingRequirement(E, 1)];
    const stars = new craftingItem.CraftingItem(eventNames.craftingItemNames[6], eventNames.categories[3], 300, 0, rarity.Rarity.RARE, 11, starsReq);
    craftingRecipes.set(stars.name, stars);

    return craftingRecipes;
}