import { floorRecipes, craftingRecipes } from "./globals";
import { Floor, CraftingRequirement } from "./classes";

const basicReq = [new CraftingRequirement(craftingRecipes.get("String"), 3)];
const basic = new Floor("Basic", 1, basicReq);
floorRecipes.set(basic.name, basic);

/**
 * Floors added:
 * 6, 7, 8, 9, 10, 11
 */

const farmReq = [new CraftingRequirement(craftingRecipes.get("String"), 5),
                    new CraftingRequirement(craftingRecipes.get("Wood"), 11),
                    new CraftingRequirement(craftingRecipes.get("Needles"), 4),
                    new CraftingRequirement(craftingRecipes.get("Metal"), 23),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 1),
                    new CraftingRequirement(craftingRecipes.get("Ribbon"), 1),
                ];
const farm = new Floor("Farm", 6, farmReq);
floorRecipes.set(farm.name, farm);

const plantReq = [new CraftingRequirement(craftingRecipes.get("Ribbon"), 6),
                    new CraftingRequirement(craftingRecipes.get("String"), 6),
                    new CraftingRequirement(craftingRecipes.get("Wood"), 14),
                    new CraftingRequirement(craftingRecipes.get("Metal"), 15),
                    new CraftingRequirement(craftingRecipes.get("Needles"), 6),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 1),
                ];
const plant = new Floor("Plant", 7, plantReq);
floorRecipes.set(plant.name, plant);

const forestReq = [new CraftingRequirement(craftingRecipes.get("Wood"), 7),
                    new CraftingRequirement(craftingRecipes.get("String"), 7),
                    new CraftingRequirement(craftingRecipes.get("Needles"), 5),
                    new CraftingRequirement(craftingRecipes.get("Ribbon"), 8),
                    new CraftingRequirement(craftingRecipes.get("Metal"), 9),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 2),
                ];
const forest = new Floor("Forest", 8, forestReq);
floorRecipes.set(forest.name, forest);

const dessertReq = [new CraftingRequirement(craftingRecipes.get("Ribbon"), 14),
                    new CraftingRequirement(craftingRecipes.get("Metal"), 20),
                    new CraftingRequirement(craftingRecipes.get("Needles"), 7),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 4),
                ];
const dessert = new Floor("Dessert", 9, dessertReq);
floorRecipes.set(dessert.name, dessert);

const dreamReq = [new CraftingRequirement(craftingRecipes.get("Wood"), 2),
                    new CraftingRequirement(craftingRecipes.get("Needles"), 11),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 5),
                    new CraftingRequirement(craftingRecipes.get("Metal"), 3),
                    new CraftingRequirement(craftingRecipes.get("Ribbon"), 6),
                    new CraftingRequirement(craftingRecipes.get("Bronze"), 8),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 1),
                ];
const dream = new Floor("Dream", 10, dreamReq);
floorRecipes.set(dream.name, dream);

const woodsReq = [new CraftingRequirement(craftingRecipes.get("Wood"), 6),
                    new CraftingRequirement(craftingRecipes.get("Needles"), 7),
                    new CraftingRequirement(craftingRecipes.get("Bronze"), 9),
                    new CraftingRequirement(craftingRecipes.get("Metal"), 5),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 4),
                    new CraftingRequirement(craftingRecipes.get("Ribbon"), 4),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 3),
                    new CraftingRequirement(craftingRecipes.get("Gold"), 1),
                ];
const woods = new Floor("Woods", 11, woodsReq);
floorRecipes.set(woods.name, woods);
