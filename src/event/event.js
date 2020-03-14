import { populateFloor, addFloor, copyClipboard, clear, calculate, displayHowTo } from "../util/ui";
import { registerArrowEvent } from "../util/click";
import { craftingRecipes } from "../util/globals";
import { addFloorRecipes } from "./floors";
import { addCraftingRecipes, craftingItemNames, rawMaterialNames } from "./crafting";
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
    populateItems();
    registerArrowEvent(3, craftingRecipes);

    addFloorRecipes(); // Creates and adds all the floor recipes to globals.floorRecipes
    populateFloor();

    startEventTimer();
}

/**
 * Populate DOM elements with the current event names, etc..
 */
function populateItems(){
    const rawMaterialsCount = 3;

    const h3 = document.getElementsByClassName("crafting-item-header"); // Fills h3 with the crafting name
    const rawMaterials = document.getElementsByClassName("raw-material"); // Fills raw-material with onclick event for selection
    const craftingItemAmount = document.getElementsByClassName("crafting-item-amount"); // sets id for each crafting item
    const craftingItemInfo = document.getElementsByClassName("crafting-item-info"); // sets tooltip text for each crafting item

    var index = 0;
    for (const [key, _] of craftingRecipes.entries()) {
        if(rawMaterialsCount > index){
            const craftingItem = craftingRecipes.get(craftingItemNames[index]);
            h3[index].innerText = key + ": " + craftingItem.craftingRequirements[0].quantity;
            const selectedIndex = index; // index is passed like this, because if not, it will just pass a reference to index and it will be wrong.
            rawMaterials[index].onclick = function() { setRawMaterial(rawMaterials[selectedIndex], key, craftingItem.name) };
        }
        else{
            const craftingItemIndex = index - rawMaterialsCount;
            craftingItemAmount[craftingItemIndex].id = key + "Amount";
            craftingItemAmount[craftingItemIndex].setAttribute("aria-label", "Amount of " + key + " you want to craft");
            h3[index].innerText = key;
            
            const craftingItem = craftingRecipes.get(craftingItemNames[craftingItemIndex]);
            var craftingItemReq = craftingItem.craftingRequirements;

            var craftingItemInfoText = craftingRequirementToString(craftingItemReq, craftingItem.craftingTime);
            craftingItemInfo[craftingItemIndex].title = craftingItemInfoText;
        }
        index += 1;
    }
}

function craftingRequirementToString(craftingRequirements, craftingTime){
    var output = "Need: ";
    for(var i = 0; i < craftingRequirements.length; i++){
        var item = craftingRequirements[i].craftingItem;
        output += item.name + ": " + craftingRequirements[i].quantity + ", ";
    }
    output += craftingTime + " min";
    return output;
}

/**
 * Set the cost of 1 of the first 3 items to 8.
 * As one of them will have the cost of 8, while the other 4 by random
 * (different for all players.)
 */
function setRawMaterial(element, key, selectedItemName){
    const rawMaterials = document.getElementsByClassName("raw-material");

    // Sets the cost of all 3 to the 4 (default)
    // Also removes the class "selected-raw-material"
    for(let i = 0; i < 3; i++){
        const craftingItem = craftingRecipes.get(craftingItemNames[i]);
        craftingItem.craftingRequirements[0].quantity = 4;
        
        rawMaterials[i].classList.remove("selected-raw-material");
        const h3 = rawMaterials[i].getElementsByTagName("h3")[0];
        h3.innerText = rawMaterialNames[i] + ": 4";
    }
    
    // Set the cost of the selected one to 8
    const selectedItem = craftingRecipes.get(selectedItemName);
    selectedItem.craftingRequirements[0].quantity = 8;
    
    element.classList.add("selected-raw-material");
    var h3 = element.getElementsByTagName("h3")[0];
    h3.innerText = key + ": 8";
}