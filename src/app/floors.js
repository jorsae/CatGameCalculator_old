import { floorRecipes, craftingRecipes } from "./globals";
import { Floor, CraftingRequirement } from "../util/classes";

/**
 * Floors added:
 *  1-3 is not added, because all the requirements are basic items, nothing crafted.
 *  I do not have a way of adding to just basic items, that are not craftable.
 * 1-45
 * 
 * Floor 1 requirement:
 *  18 logs
 *  17 cotton
 * Floor 2 requirement:
 *  24 logs
 *  30 cotton
 * Floor 3 requirement:
 *  63 logs
 *  60 cotton
 */

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

const nightmareReq = [new CraftingRequirement(craftingRecipes.get("Needles"), 1),
                    new CraftingRequirement(craftingRecipes.get("Ribbon"), 3),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 14),
                    new CraftingRequirement(craftingRecipes.get("Gold"), 3),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 4),
                    new CraftingRequirement(craftingRecipes.get("Amethyst"), 5),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 4),
                ];
const nightmare = new Floor("Nightmare", 17, nightmareReq);
floorRecipes.set(nightmare.name, nightmare);

const oceanReq = [new CraftingRequirement(craftingRecipes.get("Needles"), 7),
                    new CraftingRequirement(craftingRecipes.get("Ribbon"), 4),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 11),
                    new CraftingRequirement(craftingRecipes.get("Gold"), 6),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 6),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 2),
                ];
const ocean = new Floor("Ocean", 18, oceanReq);
floorRecipes.set(ocean.name, ocean);

const pyramidReq = [new CraftingRequirement(craftingRecipes.get("Needles"), 19),
                    new CraftingRequirement(craftingRecipes.get("Bronze"), 20),
                    new CraftingRequirement(craftingRecipes.get("Gold"), 4),
                    new CraftingRequirement(craftingRecipes.get("Amethyst"), 18),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 4),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 7),
                ];
const pyramid = new Floor("Pyramid", 19, pyramidReq);
floorRecipes.set(pyramid.name, pyramid);

const cakeReq = [new CraftingRequirement(craftingRecipes.get("Needles"), 7),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 5),
                    new CraftingRequirement(craftingRecipes.get("Gold"), 1),
                    new CraftingRequirement(craftingRecipes.get("Orb"), 8),
                    new CraftingRequirement(craftingRecipes.get("Amethyst"), 1),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 3),
                    new CraftingRequirement(craftingRecipes.get("Water"), 7),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 4),
                ];
const cake = new Floor("Cake", 20, cakeReq);
floorRecipes.set(cake.name, cake);

const interstellarReq = [new CraftingRequirement(craftingRecipes.get("Needles"), 3),
                    new CraftingRequirement(craftingRecipes.get("Orb"), 5),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 8),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 8),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 4),
                    new CraftingRequirement(craftingRecipes.get("Water"), 4),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 4),
                ];
const interstellar = new Floor("Interstellar", 21, interstellarReq);
floorRecipes.set(interstellar.name, interstellar);

const punkReq = [new CraftingRequirement(craftingRecipes.get("Needles"), 3),
                    new CraftingRequirement(craftingRecipes.get("Ribbon"), 3),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 4),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 7),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 2),
                    new CraftingRequirement(craftingRecipes.get("Water"), 10),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 2),
                    new CraftingRequirement(craftingRecipes.get("Necklace"), 1),
                ];
const punk = new Floor("Punk", 22, punkReq);
floorRecipes.set(punk.name, punk);

const africanReq = [new CraftingRequirement(craftingRecipes.get("Water"), 10),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 9),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 7),
                    new CraftingRequirement(craftingRecipes.get("Amethyst"), 10),
                    new CraftingRequirement(craftingRecipes.get("Gold"), 7),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 1),
                ];
const african = new Floor("African", 23, africanReq);
floorRecipes.set(african.name, african);


const professionReq = [new CraftingRequirement(craftingRecipes.get("Ribbon"), 5),
                    new CraftingRequirement(craftingRecipes.get("Amethyst"), 6),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 3),
                    new CraftingRequirement(craftingRecipes.get("Gold"), 1),
                    new CraftingRequirement(craftingRecipes.get("Water"), 8),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 3),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 6),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 1),
                ];
const profession = new Floor("Profession", 24, professionReq);
floorRecipes.set(profession.name, profession);

const bugsReq = [new CraftingRequirement(craftingRecipes.get("Ribbon"), 9),
                    new CraftingRequirement(craftingRecipes.get("Amethyst"), 18),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 4),
                    new CraftingRequirement(craftingRecipes.get("Needles"), 12),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 4),
                    new CraftingRequirement(craftingRecipes.get("Gold"), 2),
                    new CraftingRequirement(craftingRecipes.get("Water"), 4),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 2),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 1),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 4),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 1),
                ];
const bugs = new Floor("Bugs", 25, bugsReq);
floorRecipes.set(bugs.name, bugs);

const winterReq = [new CraftingRequirement(craftingRecipes.get("Ribbon"), 7),
                    new CraftingRequirement(craftingRecipes.get("Amethyst"), 9),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 6),
                    new CraftingRequirement(craftingRecipes.get("Needles"), 11),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 6),
                    new CraftingRequirement(craftingRecipes.get("Water"), 5),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 3),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 3),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 5),
                    new CraftingRequirement(craftingRecipes.get("Orb"), 8),
                ];
const winter = new Floor("Winter", 26, winterReq);
floorRecipes.set(winter.name, winter);

const springReq = [new CraftingRequirement(craftingRecipes.get("Orb"), 8),
                    new CraftingRequirement(craftingRecipes.get("Amethyst"), 10),
                    new CraftingRequirement(craftingRecipes.get("Water"), 8),
                    new CraftingRequirement(craftingRecipes.get("Needles"), 3),
                    new CraftingRequirement(craftingRecipes.get("Gold"), 4),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 1),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 4),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 2),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 1),
                    new CraftingRequirement(craftingRecipes.get("Elementstone"), 1),
                ];
const spring = new Floor("Spring", 27, springReq);
floorRecipes.set(spring.name, spring);

const autumnReq = [new CraftingRequirement(craftingRecipes.get("Sparkles"), 10),
                    new CraftingRequirement(craftingRecipes.get("Amethyst"), 7),
                    new CraftingRequirement(craftingRecipes.get("Water"), 3),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 2),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 5),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 4),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 3),
                    new CraftingRequirement(craftingRecipes.get("Elementstone"), 1),
                ];
const autumn = new Floor("Autumn", 28, autumnReq);
floorRecipes.set(autumn.name, autumn);

const schoolReq = [new CraftingRequirement(craftingRecipes.get("Needles"), 14),
                    new CraftingRequirement(craftingRecipes.get("Orb"), 13),
                    new CraftingRequirement(craftingRecipes.get("Water"), 4),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 1),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 4),
                    new CraftingRequirement(craftingRecipes.get("Elementstone"), 2),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 1),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 7),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 2),
                ];
const school = new Floor("School", 29, schoolReq);
floorRecipes.set(school.name, school);

const dogsReq = [new CraftingRequirement(craftingRecipes.get("Water"), 6),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 3),
                    new CraftingRequirement(craftingRecipes.get("Orb"), 7),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 3),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 1),
                    new CraftingRequirement(craftingRecipes.get("Needles"), 10),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 2),
                    new CraftingRequirement(craftingRecipes.get("Elementstone"), 1),
                    new CraftingRequirement(craftingRecipes.get("Necklace"), 1),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 3),
                ];
const dogs = new Floor("Dogs", 30, dogsReq);
floorRecipes.set(dogs.name, dogs);

const dinerReq = [new CraftingRequirement(craftingRecipes.get("Water"), 4),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 4),
                    new CraftingRequirement(craftingRecipes.get("Needles"), 2),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 3),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 4),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 3),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 3),
                    new CraftingRequirement(craftingRecipes.get("Elementstone"), 2),
                ];
const diner = new Floor("Diner", 31, dinerReq);
floorRecipes.set(diner.name, diner);

const sportsReq = [new CraftingRequirement(craftingRecipes.get("Water"), 7),
                    new CraftingRequirement(craftingRecipes.get("Needles"), 5),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 12),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 1),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 1),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 4),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 2),
                    new CraftingRequirement(craftingRecipes.get("Elementstone"), 1),
                    new CraftingRequirement(craftingRecipes.get("Necklace"), 1),
                ];
const sports = new Floor("Sports", 32, sportsReq);
floorRecipes.set(sports.name, sports);

const desertReq = [new CraftingRequirement(craftingRecipes.get("Water"), 8),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 9),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 2),
                    new CraftingRequirement(craftingRecipes.get("Orb"), 8),
                    new CraftingRequirement(craftingRecipes.get("Needles"), 6),
                    new CraftingRequirement(craftingRecipes.get("Gold"), 2),
                    new CraftingRequirement(craftingRecipes.get("Elementstone"), 2),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 4),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 2),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 2),
                ];
const desert = new Floor("Desert", 33, desertReq);
floorRecipes.set(desert.name, desert);

const dinosaursReq = [new CraftingRequirement(craftingRecipes.get("Water"), 4),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 12),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 8),
                    new CraftingRequirement(craftingRecipes.get("Orb"), 1),
                    new CraftingRequirement(craftingRecipes.get("Needles"), 5),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 1),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 5),
                    new CraftingRequirement(craftingRecipes.get("Elementstone"), 1),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 3),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 2),
                ];
const dinosaurs = new Floor("Dinosaurs", 34, dinosaursReq);
floorRecipes.set(dinosaurs.name, dinosaurs);

const hairSalonReq = [new CraftingRequirement(craftingRecipes.get("Water"), 16),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 8),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 7),
                    new CraftingRequirement(craftingRecipes.get("Orb"), 10),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 6),
                    new CraftingRequirement(craftingRecipes.get("Ribbon"), 8),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 2),
                    new CraftingRequirement(craftingRecipes.get("Elementstone"), 1),
                    new CraftingRequirement(craftingRecipes.get("Necklace"), 1),
                ];
const hairSalon = new Floor("Hair Salon", 35, hairSalonReq);
floorRecipes.set(hairSalon.name, hairSalon);

const heavyMetalReq = [new CraftingRequirement(craftingRecipes.get("Orb"), 14),
                    new CraftingRequirement(craftingRecipes.get("Water"), 6),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 4),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 4),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 4),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 1),
                    new CraftingRequirement(craftingRecipes.get("Elementstone"), 2),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 4),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 3),
                ];
const heavyMetal = new Floor("Heavy Metal", 36, heavyMetalReq);
floorRecipes.set(heavyMetal.name, heavyMetal);

const westernReq = [new CraftingRequirement(craftingRecipes.get("Needles"), 4),
                    new CraftingRequirement(craftingRecipes.get("Water"), 11),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 2),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 2),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 3),
                    new CraftingRequirement(craftingRecipes.get("Elementstone"), 1),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 5),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 4),
                ];
const western = new Floor("Western", 37, westernReq);
floorRecipes.set(western.name, western);

const racingReq = [new CraftingRequirement(craftingRecipes.get("Ribbon"), 8),
                    new CraftingRequirement(craftingRecipes.get("Water"), 1),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 15),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 16),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 2),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 1),
                    new CraftingRequirement(craftingRecipes.get("Elementstone"), 2),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 2),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 6),
                ];
const racing = new Floor("Racing", 38, racingReq);
floorRecipes.set(racing.name, racing);

const mysteryMansionReq = [new CraftingRequirement(craftingRecipes.get("Orb"), 7),
                    new CraftingRequirement(craftingRecipes.get("Water"), 2),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 7),
                    new CraftingRequirement(craftingRecipes.get("Gold"), 6),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 6),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 4),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 4),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 3),
                ];
const mysteryMansion = new Floor("Mystery Mansion", 39, mysteryMansionReq);
floorRecipes.set(mysteryMansion.name, mysteryMansion);

const stationeryReq = [new CraftingRequirement(craftingRecipes.get("Gold"), 6),
                    new CraftingRequirement(craftingRecipes.get("Water"), 6),
                    new CraftingRequirement(craftingRecipes.get("Sparkles"), 3),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 2),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 2),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 5),
                    new CraftingRequirement(craftingRecipes.get("Elementstone"), 1),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 3),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 4),
                ];
const stationery = new Floor("Stationery", 40, stationeryReq);
floorRecipes.set(stationery.name, stationery);

const magicShowReq = [new CraftingRequirement(craftingRecipes.get("Orb"), 18),
                    new CraftingRequirement(craftingRecipes.get("Needles"), 16),
                    new CraftingRequirement(craftingRecipes.get("Water"), 4),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 7),
                    new CraftingRequirement(craftingRecipes.get("Necklace"), 1),
                    new CraftingRequirement(craftingRecipes.get("Elementstone"), 1),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 4),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 4),
                ];
const magicShow = new Floor("Magic Show", 41, magicShowReq);
floorRecipes.set(magicShow.name, magicShow);

const campingReq = [new CraftingRequirement(craftingRecipes.get("Sparkles"), 3),
                    new CraftingRequirement(craftingRecipes.get("Orb"), 8),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 1),
                    new CraftingRequirement(craftingRecipes.get("Needles"), 3),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 10),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 2),
                    new CraftingRequirement(craftingRecipes.get("Elementstone"), 2),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 6),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 5),
                ];
const camping = new Floor("Camping", 42, campingReq);
floorRecipes.set(camping.name, camping);

const plushReq = [new CraftingRequirement(craftingRecipes.get("Gold"), 2),
                    new CraftingRequirement(craftingRecipes.get("Orb"), 15),
                    new CraftingRequirement(craftingRecipes.get("Needles"), 9),
                    new CraftingRequirement(craftingRecipes.get("Water"), 10),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 4),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 12),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 5),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 6),
                ];
const plush = new Floor("Plush", 43, plushReq);
floorRecipes.set(plush.name, plush);

const roleplayReq = [new CraftingRequirement(craftingRecipes.get("Gold"), 2),
                    new CraftingRequirement(craftingRecipes.get("Orb"), 12),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 4),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 5),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 2),
                    new CraftingRequirement(craftingRecipes.get("Water"), 4),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 3),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 2),
                    new CraftingRequirement(craftingRecipes.get("Elementstone"), 4),
                ];
const roleplay = new Floor("Roleplay", 44, roleplayReq);
floorRecipes.set(roleplay.name, roleplay);

const bathroomReq = [new CraftingRequirement(craftingRecipes.get("Pendant"), 1),
                    new CraftingRequirement(craftingRecipes.get("Orb"), 14),
                    new CraftingRequirement(craftingRecipes.get("Water"), 8),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 4),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 8),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 4),
                    new CraftingRequirement(craftingRecipes.get("Necklace"), 2),
                ];
const bathroom = new Floor("Bathroom", 45, bathroomReq);
floorRecipes.set(bathroom.name, bathroom);

const jungleReq = [new CraftingRequirement(craftingRecipes.get("Pendant"), 2),
                    new CraftingRequirement(craftingRecipes.get("Gold"), 2),
                    new CraftingRequirement(craftingRecipes.get("Water"), 4),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 7),
                    new CraftingRequirement(craftingRecipes.get("Elementstone"), 1),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 7),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 7),
                ];
const jungle = new Floor("Jungle", 46, jungleReq);
floorRecipes.set(jungle.name, jungle);

const skateParkReq = [new CraftingRequirement(craftingRecipes.get("Pendant"), 2),
                    new CraftingRequirement(craftingRecipes.get("Orb"), 16),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 2),
                    new CraftingRequirement(craftingRecipes.get("Elementstone"), 3),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 9),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 6),
                ];
const skatePark = new Floor("Skate Park", 47, skateParkReq);
floorRecipes.set(skatePark.name, skatePark);

const arcticReq = [new CraftingRequirement(craftingRecipes.get("Pendant"), 4),
                    new CraftingRequirement(craftingRecipes.get("Orb"), 16),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 4),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 4),
                    new CraftingRequirement(craftingRecipes.get("Elementstone"), 1),
                    new CraftingRequirement(craftingRecipes.get("Necklace"), 2),
                    new CraftingRequirement(craftingRecipes.get("Water"), 3),
                    new CraftingRequirement(craftingRecipes.get("Artifact"), 1),
                ];
const arctic = new Floor("Arctic", 48, arcticReq);
floorRecipes.set(arctic.name, arctic);

const detectiveReq = [new CraftingRequirement(craftingRecipes.get("Pendant"), 10),
                    new CraftingRequirement(craftingRecipes.get("Gold"), 5),
                    new CraftingRequirement(craftingRecipes.get("Silver"), 2),
                    new CraftingRequirement(craftingRecipes.get("Water"), 6),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 6),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 4),
                    new CraftingRequirement(craftingRecipes.get("Necklace"), 2),
                ];
const detective = new Floor("Detective", 49, detectiveReq);
floorRecipes.set(detective.name, detective);

const catGameDevReq = [new CraftingRequirement(craftingRecipes.get("Pendant"), 4),
                    new CraftingRequirement(craftingRecipes.get("Orb"), 18),
                    new CraftingRequirement(craftingRecipes.get("Necklace"), 1),
                    new CraftingRequirement(craftingRecipes.get("Water"), 5),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 5),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 7),
                    new CraftingRequirement(craftingRecipes.get("Elementstone"), 2),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 3),
                ];
const catGameDev = new Floor("Cat Game Dev", 50, catGameDevReq);
floorRecipes.set(catGameDev.name, catGameDev);

const cruiseReq = [new CraftingRequirement(craftingRecipes.get("Pendant"), 2),
                new CraftingRequirement(craftingRecipes.get("Water"), 18),
                new CraftingRequirement(craftingRecipes.get("Fire"), 12),
                new CraftingRequirement(craftingRecipes.get("Waterstone"), 8),
                new CraftingRequirement(craftingRecipes.get("Firestone"), 3),
                new CraftingRequirement(craftingRecipes.get("Necklace"), 1),
                ];
const cruise = new Floor("Cruise", 51, cruiseReq);
floorRecipes.set(cruise.name, cruise);

const birthdayReq = [new CraftingRequirement(craftingRecipes.get("Pendant"), 14),
                new CraftingRequirement(craftingRecipes.get("Water"), 14),
                new CraftingRequirement(craftingRecipes.get("Fire"), 7),
                new CraftingRequirement(craftingRecipes.get("Gold"), 4),
                new CraftingRequirement(craftingRecipes.get("Necklace"), 3),
                ];
const birthday = new Floor("Birthday", 52, birthdayReq);
floorRecipes.set(birthday.name, birthday);

const arcadeReq = [new CraftingRequirement(craftingRecipes.get("Pendant"), 23),
                new CraftingRequirement(craftingRecipes.get("Sparkles"), 8),
                new CraftingRequirement(craftingRecipes.get("Silver"), 6),
                new CraftingRequirement(craftingRecipes.get("Gold"), 11),
                new CraftingRequirement(craftingRecipes.get("Necklace"), 3),
                ];
const arcade = new Floor("Arcade", 53, arcadeReq);
floorRecipes.set(arcade.name, arcade);

const tattooReq = [new CraftingRequirement(craftingRecipes.get("Artifact"), 1),
                new CraftingRequirement(craftingRecipes.get("Sparkles"), 10),
                new CraftingRequirement(craftingRecipes.get("Needles"), 14),
                new CraftingRequirement(craftingRecipes.get("Gold"), 6),
                new CraftingRequirement(craftingRecipes.get("Silver"), 12),
                new CraftingRequirement(craftingRecipes.get("Water"), 9),
                new CraftingRequirement(craftingRecipes.get("Necklace"), 1),
                new CraftingRequirement(craftingRecipes.get("Waterstone"), 4),
                new CraftingRequirement(craftingRecipes.get("Firestone"), 5),
                new CraftingRequirement(craftingRecipes.get("Elementstone"), 1),
                ];
const tattoo = new Floor("Tattoo", 54, tattooReq);
floorRecipes.set(tattoo.name, tattoo);

const airportReq = [new CraftingRequirement(craftingRecipes.get("Water"), 11),
                new CraftingRequirement(craftingRecipes.get("Fire"), 6),
                new CraftingRequirement(craftingRecipes.get("Gold"), 6),
                new CraftingRequirement(craftingRecipes.get("Silver"), 7),
                new CraftingRequirement(craftingRecipes.get("Waterstone"), 10),
                new CraftingRequirement(craftingRecipes.get("Firestone"), 5),
                new CraftingRequirement(craftingRecipes.get("Necklace"), 1),
                ];
const airport = new Floor("Airport", 55, airportReq);
floorRecipes.set(airport.name, airport);

const smallPetsReq = [new CraftingRequirement(craftingRecipes.get("Water"), 10),
                new CraftingRequirement(craftingRecipes.get("Gold"), 2),
                new CraftingRequirement(craftingRecipes.get("Silver"), 6),
                new CraftingRequirement(craftingRecipes.get("Pendant"), 2),
                new CraftingRequirement(craftingRecipes.get("Necklace"), 3),
                new CraftingRequirement(craftingRecipes.get("Fire"), 4),
                new CraftingRequirement(craftingRecipes.get("Waterstone"), 8),
                new CraftingRequirement(craftingRecipes.get("Firestone"), 6),
                ];
const smallPets = new Floor("Small Pets", 56, smallPetsReq);
floorRecipes.set(smallPets.name, smallPets);

const hippieReq = [new CraftingRequirement(craftingRecipes.get("Artifact"), 1),
                new CraftingRequirement(craftingRecipes.get("Gold"), 2),
                new CraftingRequirement(craftingRecipes.get("Silver"), 6),
                new CraftingRequirement(craftingRecipes.get("Necklace"), 2),
                new CraftingRequirement(craftingRecipes.get("Water"), 9),
                new CraftingRequirement(craftingRecipes.get("Fire"), 5),
                new CraftingRequirement(craftingRecipes.get("Elementstone"), 2),
                new CraftingRequirement(craftingRecipes.get("Firestone"), 6),
                ];
const hippie = new Floor("Hippie", 57, hippieReq);
floorRecipes.set(hippie.name, hippie);

const piratesReq = [new CraftingRequirement(craftingRecipes.get("Pendant"), 12),
                new CraftingRequirement(craftingRecipes.get("Gold"), 4),
                new CraftingRequirement(craftingRecipes.get("Waterstone"), 6),
                new CraftingRequirement(craftingRecipes.get("Fire"), 5),
                new CraftingRequirement(craftingRecipes.get("Firestone"), 2),
                new CraftingRequirement(craftingRecipes.get("Elementstone"), 2),
                new CraftingRequirement(craftingRecipes.get("Necklace"), 3),
                ];
const pirates = new Floor("Pirates", 58, piratesReq);
floorRecipes.set(pirates.name, pirates);

const hospitalReq = [new CraftingRequirement(craftingRecipes.get("Sparkles"), 12),
                new CraftingRequirement(craftingRecipes.get("Needles"), 12),
                new CraftingRequirement(craftingRecipes.get("Gold"), 8),
                new CraftingRequirement(craftingRecipes.get("Silver"), 8),
                new CraftingRequirement(craftingRecipes.get("Water"), 6),
                new CraftingRequirement(craftingRecipes.get("Fire"), 5),
                new CraftingRequirement(craftingRecipes.get("Waterstone"), 8),
                new CraftingRequirement(craftingRecipes.get("Firestone"), 6),
                new CraftingRequirement(craftingRecipes.get("Elementstone"), 2),
                ];
const hospital = new Floor("Hospital", 59, hospitalReq);
floorRecipes.set(hospital.name, hospital);

const playgroundReq = [new CraftingRequirement(craftingRecipes.get("Necklace"), 2),
                new CraftingRequirement(craftingRecipes.get("Water"), 10),
                new CraftingRequirement(craftingRecipes.get("Fire"), 14),
                new CraftingRequirement(craftingRecipes.get("Waterstone"), 10),
                new CraftingRequirement(craftingRecipes.get("Firestone"), 2),
                new CraftingRequirement(craftingRecipes.get("Elementstone"), 2),
                ];
const playground = new Floor("Playground", 60, playgroundReq);
floorRecipes.set(playground.name, playground);

const shipwreckReq = [new CraftingRequirement(craftingRecipes.get("Artifact"), 2),
                new CraftingRequirement(craftingRecipes.get("Gold"), 2),
                new CraftingRequirement(craftingRecipes.get("Silver"), 6),
                new CraftingRequirement(craftingRecipes.get("Pendant"), 4),
                new CraftingRequirement(craftingRecipes.get("Necklace"), 2),
                new CraftingRequirement(craftingRecipes.get("Waterstone"), 3),
                new CraftingRequirement(craftingRecipes.get("Firestone"), 5),
                new CraftingRequirement(craftingRecipes.get("Elementstone"), 3),
                ];
const shipwreck = new Floor("Shipwreck", 61, shipwreckReq);
floorRecipes.set(shipwreck.name, shipwreck);

/**
 * Floor: 62-64 all require the same material, in the same order.
 *  Increase performance, by just using the same CraftingRequirement list
 */
const identical62_64 = [new CraftingRequirement(craftingRecipes.get("Necklace"), 1),
                    new CraftingRequirement(craftingRecipes.get("Fire"), 10),
                    new CraftingRequirement(craftingRecipes.get("Pendant"), 6),
                    new CraftingRequirement(craftingRecipes.get("Waterstone"), 11),
                    new CraftingRequirement(craftingRecipes.get("Firestone"), 6),
                    new CraftingRequirement(craftingRecipes.get("Elementstone"), 2),
];

const gnomes = new Floor("Gnomes", 62, identical62_64);
floorRecipes.set(gnomes.name, gnomes);

const deconstructivism = new Floor("Deconstructivism", 63, identical62_64);
floorRecipes.set(deconstructivism.name, deconstructivism);

const caveman = new Floor("Caveman", 64, identical62_64);
floorRecipes.set(caveman.name, caveman);

const miniature = new Floor("Miniature", 65, identical62_64);
floorRecipes.set(miniature.name, miniature);

const wrestling = new Floor("Wrestling", 66, identical62_64);
floorRecipes.set(wrestling.name, wrestling);