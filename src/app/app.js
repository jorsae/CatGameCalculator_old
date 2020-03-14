import { populateFloor, addFloor, copyClipboard, clear, calculate, displayHowTo } from "../util/ui";
import { registerArrowEvent } from "../util/click";
import { craftingRecipes } from "../util/globals";
import { addFloorRecipes } from "./floors";
import { addCraftingRecipes } from "./crafting";
import { startEventTimer } from "../util/event_timer";

/**
 * Setting up all the button events for the calculator
 */
window.onload = init;
function init(){
    document.getElementById("calculate").onclick = calculate;
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