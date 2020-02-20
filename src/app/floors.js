import { floorRecipes, craftingRecipes } from "./globals";
import { Floor, CraftingRequirement } from "./classes";

var basicReq = [new CraftingRequirement(craftingRecipes.get("String"), 3)];
const basic = new Floor("Basic", 1, basicReq);
floorRecipes.set(basic.name, basic);

/*
    // Basic Crafting
    var stringReq = [new CraftingRequirement(cotton, 3)];
    const string = new CraftingItem("String", 5, 50, rarity.COMMON, 5, stringReq);
    craftingRecipes.set(string.name, string);

    const cotton = new CraftingItem("Cotton", 0, 0, rarity.RAW, 1);
    const log = new CraftingItem("Log", 0, 0, rarity.RAW, 2);
    const rock = new CraftingItem("Rock", 0, 0, rarity.RAW, 3);
    const quartz = new CraftingItem("Quartz", 0, 0, rarity.RAW, 4);
    craftingRecipes.set(cotton.name, cotton);
    craftingRecipes.set(log.name, log);
    craftingRecipes.set(rock.name, rock);
    craftingRecipes.set(quartz.name, quartz);
*/