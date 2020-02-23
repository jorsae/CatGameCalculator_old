import { floorRecipes, craftingRecipes } from "./globals";
import { Floor, CraftingRequirement } from "../util/classes";
import { craftingItemNames } from "./crafting";

const prizeNames = [ "Galacta", "Cosmic Balloon", "Nightshade",
                    "Purple Planet", "BreezeBow", "Cloudy Rainbow",
                "Rainbow Wash", "Rainbow Porthole", "Cosmic Rainbow",
                "Rainbow Rocket" ];

const prize1Req = [new CraftingRequirement(craftingRecipes.get(craftingItemNames[2]), 3),
                    new CraftingRequirement(craftingRecipes.get(craftingItemNames[3]), 2),
                ];
const prize1 = new Floor(prizeNames[0], 1, prize1Req);
floorRecipes.set(prize1.name, prize1);

const prize2Req = [new CraftingRequirement(craftingRecipes.get(craftingItemNames[3]), 1)];
const prize2 = new Floor(prizeNames[1], 2, prize2Req);
floorRecipes.set(prize2.name, prize2);

const prize3Req = [new CraftingRequirement(craftingRecipes.get(craftingItemNames[0]), 5),
                    new CraftingRequirement(craftingRecipes.get(craftingItemNames[3]), 3),
                    new CraftingRequirement(craftingRecipes.get(craftingItemNames[4]), 2),
                ];
const prize3 = new Floor(prizeNames[2], 3, prize3Req);
floorRecipes.set(prize3.name, prize3);

const prize4Req = [new CraftingRequirement(craftingRecipes.get(craftingItemNames[1]), 2),
                    new CraftingRequirement(craftingRecipes.get(craftingItemNames[3]), 2),
                    new CraftingRequirement(craftingRecipes.get(craftingItemNames[4]), 1),
                ];
const prize4 = new Floor(prizeNames[3], 4, prize4Req);
floorRecipes.set(prize4.name, prize4);

const prize5Req = [new CraftingRequirement(craftingRecipes.get(craftingItemNames[1]), 6),
                    new CraftingRequirement(craftingRecipes.get(craftingItemNames[3]), 6),
                    new CraftingRequirement(craftingRecipes.get(craftingItemNames[4]), 4),
                ];
const prize5 = new Floor(prizeNames[4], 5, prize5Req);
floorRecipes.set(prize5.name, prize5);

const prize6Req = [new CraftingRequirement(craftingRecipes.get(craftingItemNames[2]), 4),
                    new CraftingRequirement(craftingRecipes.get(craftingItemNames[3]), 4),
                    new CraftingRequirement(craftingRecipes.get(craftingItemNames[4]), 3),
                ];
const prize6 = new Floor(prizeNames[5], 6, prize6Req);
floorRecipes.set(prize6.name, prize6);

const prize7Req = [new CraftingRequirement(craftingRecipes.get(craftingItemNames[3]), 4),
                    new CraftingRequirement(craftingRecipes.get(craftingItemNames[4]), 3),
                    new CraftingRequirement(craftingRecipes.get(craftingItemNames[5]), 2),
                ];
const prize7 = new Floor(prizeNames[6], 7, prize7Req);
floorRecipes.set(prize7.name, prize7);

const prize8Req = [new CraftingRequirement(craftingRecipes.get(craftingItemNames[3]), 1),
                    new CraftingRequirement(craftingRecipes.get(craftingItemNames[4]), 2),
                    new CraftingRequirement(craftingRecipes.get(craftingItemNames[5]), 2),
                ];
const prize8 = new Floor(prizeNames[7], 8, prize8Req);
floorRecipes.set(prize8.name, prize8);

const prize9Req = [new CraftingRequirement(craftingRecipes.get(craftingItemNames[3]), 4),
                    new CraftingRequirement(craftingRecipes.get(craftingItemNames[4]), 3),
                    new CraftingRequirement(craftingRecipes.get(craftingItemNames[5]), 3),
                ];
const prize9 = new Floor(prizeNames[8], 9, prize9Req);
floorRecipes.set(prize9.name, prize9);

const prize10Req = [new CraftingRequirement(craftingRecipes.get(craftingItemNames[3]), 5),
                    new CraftingRequirement(craftingRecipes.get(craftingItemNames[4]), 3),
                    new CraftingRequirement(craftingRecipes.get(craftingItemNames[5]), 4),
                ];
const prize10 = new Floor(prizeNames[9], 10, prize10Req);
floorRecipes.set(prize10.name, prize10);