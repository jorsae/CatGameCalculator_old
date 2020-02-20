import { CraftingItem } from "./classes";
import { CraftingRequirement } from "./classes";

import { craftingRecipes } from "./globals";
import { rarity } from "./globals";

/**
 * This class constructs and stores all the Crafting Items in the game
 */

// Base
const cotton = new CraftingItem("Cotton", 0, 0, rarity.RAW, 1);
const log = new CraftingItem("Log", 0, 0, rarity.RAW, 2);
const rock = new CraftingItem("Rock", 0, 0, rarity.RAW, 3);
const quartz = new CraftingItem("Quartz", 0, 0, rarity.RAW, 4);
craftingRecipes.set(cotton.name, cotton);
craftingRecipes.set(log.name, log);
craftingRecipes.set(rock.name, rock);
craftingRecipes.set(quartz.name, quartz);

// Basic Crafting
var stringReq = [new CraftingRequirement(cotton, 3)];
const string = new CraftingItem("String", 5, 50, rarity.COMMON, 5, stringReq);
craftingRecipes.set(string.name, string);

var woodReq = [new CraftingRequirement(log, 3)];
const wood = new CraftingItem("Wood", 5, 50, rarity.COMMON, 6, woodReq);
craftingRecipes.set(wood.name, wood);

var ribbonReq = [new CraftingRequirement(string, 2), new CraftingRequirement(wood, 2)];
const ribbon = new CraftingItem("Ribbon", 15, 100, rarity.RARE, 7, ribbonReq);
craftingRecipes.set(ribbon.name, ribbon);

// Shiny Crafting
var metalReq = [new CraftingRequirement(rock, 3)];
const metal = new CraftingItem("Metal", 15, 100, rarity.COMMON, 8, metalReq);
craftingRecipes.set(metal.name, metal);

var needlesReq = [new CraftingRequirement(metal, 4), new CraftingRequirement(ribbon, 1)];
const needles = new CraftingItem("Needles", 30, 200, rarity.RARE, 9, needlesReq);
craftingRecipes.set(needles.name, needles);

var sparklesReq = [new CraftingRequirement(needles, 2), new CraftingRequirement(ribbon, 2)];
const sparkles = new CraftingItem("Sparkles", 60, 300, rarity.EPIC, 10, sparklesReq);
craftingRecipes.set(sparkles.name, sparkles);

// Precious Crafting
var bronzeReq = [new CraftingRequirement(rock, 4)];
const bronze = new CraftingItem("Bronze", 30, 200, rarity.COMMON, 11, bronzeReq);
craftingRecipes.set(bronze.name, bronze);

var silverReq = [new CraftingRequirement(bronze, 3), new CraftingRequirement(sparkles, 1)];
const silver = new CraftingItem("Silver", 120, 300, rarity.RARE, 12, silverReq);
craftingRecipes.set(silver.name, silver);

var goldReq = [new CraftingRequirement(silver, 2), new CraftingRequirement(sparkles, 2)];
const gold = new CraftingItem("Gold", 360, 500, rarity.EPIC, 13, goldReq);
craftingRecipes.set(gold.name, gold);

// Jewel Crafting
var amethystReq = [new CraftingRequirement(quartz, 10)];
const amethyst = new CraftingItem("Amethyst", 60, 300, rarity.COMMON, 14, amethystReq);
craftingRecipes.set(amethyst.name, amethyst);

var pendantReq = [new CraftingRequirement(amethyst, 7), new CraftingRequirement(silver, 2)];
const pendant = new CraftingItem("Pendant", 180, 500, rarity.RARE, 15, pendantReq);
craftingRecipes.set(pendant.name, pendant);

var necklaceReq = [new CraftingRequirement(pendant, 3), new CraftingRequirement(gold, 2)];
const necklace = new CraftingItem("Necklace", 760, 500, rarity.EPIC, 16, necklaceReq);
craftingRecipes.set(necklace.name, necklace);

// Magic Crafting
var orbReq = [new CraftingRequirement(quartz, 20)];
const orb = new CraftingItem("Orb", 60, 300, rarity.COMMON, 17, orbReq);
craftingRecipes.set(orb.name, orb);

var waterReq = [new CraftingRequirement(orb, 2), new CraftingRequirement(silver, 1)];
const water = new CraftingItem("Water", 360, 800, rarity.RARE, 18, waterReq);
craftingRecipes.set(water.name, water);

var fireReq = [new CraftingRequirement(orb, 6), new CraftingRequirement(gold, 1)];
const fire = new CraftingItem("Fire", 720, 1000, rarity.EPIC, 19, fireReq);
craftingRecipes.set(fire.name, fire);

// Ancient Crafting
var waterstoneReq = [new CraftingRequirement(water, 2), new CraftingRequirement(ribbon, 10)];
const waterstone = new CraftingItem("Waterstone", 720, 1500, rarity.RARE, 20, waterstoneReq);
craftingRecipes.set(waterstone.name, waterstone);

var firestoneReq = [new CraftingRequirement(fire, 1), new CraftingRequirement(sparkles, 2)];
const firestone = new CraftingItem("Firestone", 720, 1500, rarity.EPIC, 21, firestoneReq);
craftingRecipes.set(firestone.name, firestone);

var elementstoneReq = [new CraftingRequirement(firestone, 1), new CraftingRequirement(waterstone, 1)];
const elementstone = new CraftingItem("Elementstone", 1440, 5000, rarity.LEGENDARY, 22, elementstoneReq);
craftingRecipes.set(elementstone.name, elementstone);

// Ruin Crafting
var artifactReq = [new CraftingRequirement(elementstone, 1), new CraftingRequirement(necklace, 1)];
const artifact = new CraftingItem("Artifact", 4320, 10000, rarity.LEGENDARY, 23, artifactReq);
craftingRecipes.set(artifact.name, artifact);
