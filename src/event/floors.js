import { floorRecipes, craftingRecipes } from "./globals";
import { Floor, CraftingRequirement } from "../util/classes";

const mayhemReq = [new CraftingRequirement(craftingRecipes.get("Wood"), 14),
                    new CraftingRequirement(craftingRecipes.get("String"), 18),
                    new CraftingRequirement(craftingRecipes.get("Ribbon"), 6),
                ];
const mayhem = new Floor("Mayhem", 4, mayhemReq);
floorRecipes.set(mayhem.name, mayhem);

const beachReq = [new CraftingRequirement(craftingRecipes.get("Wood"), 8),
                    new CraftingRequirement(craftingRecipes.get("String"), 18),
                    new CraftingRequirement(craftingRecipes.get("Ribbon"), 17),
                ];
const beach = new Floor("Beach", 5, beachReq);
floorRecipes.set(beach.name, beach);

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

const galacticReq = [new CraftingRequirement(craftingRecipes.get("String"), 19),
                    new CraftingRequirement(craftingRecipes.get("Wood"), 11),
                    new CraftingRequirement(craftingRecipes.get("Ribbon"), 16),
                    new CraftingRequirement(craftingRecipes.get("Needles"), 11),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 8),
                    new CraftingRequirement(craftingRecipes.get("Bronze"), 7),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 5),
                ];
const galactic = new Floor("Galactic", 12, galacticReq);
floorRecipes.set(galactic.name, galactic);

const eightiesReq = [new CraftingRequirement(craftingRecipes.get("Wood"), 18),
                    new CraftingRequirement(craftingRecipes.get("Metal"), 12),
                    new CraftingRequirement(craftingRecipes.get("Ribbon"), 15),
                    new CraftingRequirement(craftingRecipes.get("Needles"), 10),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 9),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 6),
                    new CraftingRequirement(craftingRecipes.get("Gold"), 1),
                ];
const eighties = new Floor("Eighties", 13, eightiesReq);
floorRecipes.set(eighties.name, eighties);

const oasisReq = [new CraftingRequirement(craftingRecipes.get("Needles"), 10),
                    new CraftingRequirement(craftingRecipes.get("Ribbon"), 18),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 10),
                    new CraftingRequirement(craftingRecipes.get("Gold"), 3),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 2),
                ];
const oasis = new Floor("Oasis", 14, oasisReq);
floorRecipes.set(oasis.name, oasis);

const reefReq = [new CraftingRequirement(craftingRecipes.get("Needles"), 19),
                    new CraftingRequirement(craftingRecipes.get("Ribbon"), 3),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 16),
                    new CraftingRequirement(craftingRecipes.get("Gold"), 2),
                    new CraftingRequirement(craftingRecipes.get("Amethyst"), 1),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 2),
                ];
const reef = new Floor("Reef", 15, reefReq);
floorRecipes.set(reef.name, reef);

const gardenReq = [new CraftingRequirement(craftingRecipes.get("Needles"), 15),
                    new CraftingRequirement(craftingRecipes.get("Ribbon"), 5),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 5),
                    new CraftingRequirement(craftingRecipes.get("Gold"), 3),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 5),
                    new CraftingRequirement(craftingRecipes.get("Amethyst"), 10),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 4),
                ];
const garden = new Floor("Garden", 16, gardenReq);
floorRecipes.set(garden.name, garden);