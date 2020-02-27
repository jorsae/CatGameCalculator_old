import { populateFloor, addFloor, copyClipboard, clear, calculate } from "../util/ui";
import { registerArrowEvent } from "../util/click";
import { craftingRecipes } from "../util/globals";
import { addFloorRecipes } from "./floors";

/**
 * Setting up all the button events for the calculator
 */
window.onload = init;
function init(){
    document.getElementById("calculate").onclick = calculate;
    document.getElementById("clear").onclick = clear;
    document.getElementById("copyClipboard").onclick = copyClipboard;
    document.getElementById("addFloor").onclick = addFloor;

    populateItems();
    registerArrowEvent(3, craftingRecipes);
    addFloorRecipes(); // Creates and adds all the floor recipes to globals.floorRecipes
    populateFloor();
}

/**
 * Populate DOM elements with the current event names, etc..
 */
function populateItems(){
    const rawMaterials = 3;
    var h3 = document.getElementsByTagName("h3");
    var craftingItemAmount = document.getElementsByClassName("crafting-item-amount");

    if(h3.length !== craftingRecipes.size - rawMaterials){
        console.log("Something went terribly wrong");
        return;
    }
    var index = 0;
    for (const [key, value] of craftingRecipes.entries()) {
        if(rawMaterials > index){
            index += 1;
            continue;
        }
        const i = index - rawMaterials;
        h3[i].innerText = key;
        craftingItemAmount[i].id = key + "Amount";
        index += 1;
    }

}