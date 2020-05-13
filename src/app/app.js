import { populateFloor, addFloor, copyClipboard, clear, calculate, displayHowTo } from "../util/ui";
import { registerCraftingItemEvent, registerArrowEvent } from "../util/click";
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
    document.getElementById("quickCalculate").onclick = startCalculate;
    document.getElementById("clear").onclick = clear;
    document.getElementById("copyClipboard").onclick = copyClipboard;
    document.getElementById("addFloor").onclick = addFloor;
    document.getElementById("howToUse").onclick = displayHowTo;
    
    addCraftingRecipes(); // Creates and adds all the crafting recipes to globals.craftingRecipes
    registerCraftingItemEvent(4, craftingRecipes);
    registerArrowEvent(4, craftingRecipes);
    
    addFloorRecipes(); // Creates and adds all the floor recipes to globals.floorRecipes
    populateFloor();

    startEventTimer();
}

/**
 * Starts the calculation
 */
function startCalculate(){
    var crafting = document.getElementById("crafting");
    swapCraftingTime(crafting.checked);
    calculate(1.00);
}

// TODO: use this as a function to set all crafting items craftingTime to 1 minute
function swapCraftingTime(crafting){
    // 1 minute crafting
    if(crafting){
        // Have to swap crafting times and save the original
        if(craftingTimes.size <= 0){
            for (const [key, _] of craftingRecipes.entries()) {
                var craftingItem = craftingRecipes.get(key);
                craftingTimes.set(key, craftingItem.craftingTime); // Storing the original crafting time
                craftingItem.craftingTime = 1;
                craftingRecipes.set(key, craftingItem);
            }
        }
    }
    else{
        // Have to swap crafting times back to the original
        if(craftingTimes.size > 0){
            for (const [key, time] of craftingTimes.entries()) {
                var craftingItem = craftingRecipes.get(key);
                craftingItem.craftingTime = time;
                craftingRecipes.set(key, craftingItem)
            }
            craftingTimes.clear();
        }
    }

}