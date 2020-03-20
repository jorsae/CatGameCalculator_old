import { populateFloor, addFloor, copyClipboard, clear, calculate, displayHowTo } from "../util/ui";
import { registerArrowEvent } from "../util/click";
import { craftingRecipes } from "../util/globals";
import { addFloorRecipes } from "./floors";
import { addCraftingRecipes } from "./crafting";
import { startEventTimer } from "../util/event_timer";

var craftingTimes = new Map();

/**
 * Setting up all the button events for the calculator
 */
window.onload = init;
function init(){
    document.getElementById("calculate").onclick = startCalculate;
    document.getElementById("clear").onclick = clear;
    document.getElementById("copyClipboard").onclick = copyClipboard;
    document.getElementById("addFloor").onclick = addFloor;
    document.getElementById("howToUse").onclick = displayHowTo;
    
    addCraftingRecipes(); // Creates and adds all the crafting recipes to globals.craftingRecipes
    registerArrowEvent(4, craftingRecipes);
    
    addFloorRecipes(); // Creates and adds all the floor recipes to globals.floorRecipes
    populateFloor();

    startEventTimer();
}

/**
 * Starts the calculation
 */
function startCalculate(){
    //var crafting = document.getElementById("crafting");
    calculate(1.00, false);
}

// TODO: use this as a function to set all crafting items craftingTime to 1 minute
function min1(){
    console.log(craftingRecipes);
    for (const [key, _] of craftingRecipes.entries()) {
        var craftingItem = craftingRecipes.get(key);
        craftingItem.craftingTime = 1;
        craftingRecipes.set(key, craftingItem);
    }
    console.log(craftingRecipes);
}