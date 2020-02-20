import { floorRecipes, craftingRecipes } from "./globals";
import { Floor, CraftingRequirement } from "./classes";

const basicReq = [new CraftingRequirement(craftingRecipes.get("String"), 3)];
const basic = new Floor("Basic", 1, basicReq);
floorRecipes.set(basic.name, basic);

/**
 * Floors added:
 * 7, 8, 9, 10
 */

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

