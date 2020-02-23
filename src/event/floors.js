import { floorRecipes, craftingRecipes } from "./globals";
import { Floor, CraftingRequirement } from "../util/classes";
import { craftingItemNames } from "./crafting";

const prizesNames = [ "Galacta", "Cosmic Balloon" ];

const prize1Req = [new CraftingRequirement(craftingRecipes.get(craftingItemNames[2]), 3),
                    new CraftingRequirement(craftingRecipes.get(craftingItemNames[3]), 2),
                ];
const prize1 = new Floor(prizesNames[0], 1, prize1Req);
floorRecipes.set(prize1.name, prize1);