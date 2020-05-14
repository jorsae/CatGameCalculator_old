import { populateFloor, addFloor, copyClipboard, clear, calculate, displayHowTo } from "../util/ui";
import { registerCraftingItemEvent, registerArrowEvent } from "../util/click";
import { craftingRecipes } from "../util/globals";
import { addFloorRecipes } from "./floors";
import { addCraftingRecipes, craftingItemNames, rawMaterialNames } from "./crafting";
import { startEventTimer } from "../util/event_timer";

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
    populateItems();
    registerCraftingItemEvent(3, craftingRecipes);
    registerArrowEvent(3, craftingRecipes);

    addFloorRecipes(); // Creates and adds all the floor recipes to globals.floorRecipes
    populateFloor();

    startEventTimer();
    /**
     * BEST WAY TO SOLVE PROBLEM WITH CREATING:
     *  <p class="crafting-item-info display-crafting-item-info" id="metalInfo"></p>
     * for events, because of the id is different depending onthe event name
     * IS TO CREATE THAT P class IN populateItems()
     */
}

/**
 * Starting the calculation
 */
function startCalculate(){
    const boost = parseFloat(document.getElementById("userTimeBoost").value);
    calculate(boost);
}

/**
 * Populate DOM elements with the current event names, etc..
 */
function populateItems(){
    const rawMaterialsCount = 3;

    const craftingItemButton = document.getElementsByClassName("crafting-item-button"); // Button elements for the crafting items
    const rawMaterialHeader = document.getElementsByClassName("crafting-item-header"); // h3 elements for the raw materials
    const craftingItemDiv = document.getElementsByClassName("crafting-item"); // div that contains all info regarding a certain crafting item

    const rawMaterials = document.getElementsByClassName("raw-material"); // Fills raw-material with onclick event for selection
    const craftingItemAmount = document.getElementsByClassName("crafting-item-amount"); // sets id for each crafting item

    var index = 0;
    for (const [key, _] of craftingRecipes.entries()) {
        if(rawMaterialsCount > index){
            const craftingItem = craftingRecipes.get(craftingItemNames[index]);
            rawMaterialHeader[index].innerText = key + ": " + craftingItem.craftingRequirements[0].quantity;
            const selectedIndex = index; // index is passed like this, because if not, it will just pass a reference to index and it will be wrong.
            rawMaterials[index].onclick = function() { setRawMaterial(rawMaterials[selectedIndex], key, craftingItem.name) };
        }
        else{
            const craftingItemIndex = index - rawMaterialsCount;
            craftingItemAmount[craftingItemIndex].id = key + "Amount";
            craftingItemAmount[craftingItemIndex].setAttribute("aria-label", "Amount of " + key + " you want to craft");
            craftingItemButton[craftingItemIndex].innerHTML = key + ' <i class="fa fa-angle-double-down"></i>';
            
            const craftingItem = craftingRecipes.get(craftingItemNames[craftingItemIndex]);

            // Creates paragraph element that contains crafting-item information
            var craftingItemInfoParagraph = document.createElement("p");
            craftingItemInfoParagraph.classList.add("crafting-item-info");
            craftingItemInfoParagraph.id = craftingItem.name.toLowerCase() + "Info";
            craftingItemDiv[index].insertBefore(craftingItemInfoParagraph, craftingItemDiv[index].children[1]);
        }
        index += 1;
    }
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