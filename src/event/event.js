import { populateFloor, addFloor, copyClipboard, clear, calculate } from "../util/ui";
import { registerArrowEvent } from "../util/click";
import { craftingRecipes } from "../util/globals";
import { addFloorRecipes } from "./floors";
import { addCraftingRecipes, craftingItemNames, rawMaterialNames } from "./crafting";

/**
 * Setting up all the button events for the calculator
 */
window.onload = init;
function init(){
    document.getElementById("calculate").onclick = calculate;
    document.getElementById("clear").onclick = clear;
    document.getElementById("copyClipboard").onclick = copyClipboard;
    document.getElementById("addFloor").onclick = addFloor;

    addCraftingRecipes(); // Creates and adds all the crafting recipes to globals.craftingRecipes
    populateItems();
    registerArrowEvent(3, craftingRecipes);

    addFloorRecipes(); // Creates and adds all the floor recipes to globals.floorRecipes
    populateFloor();
}

/**
 * Populate DOM elements with the current event names, etc..
 */
function populateItems(){
    const rawMaterialsCount = 3;
    var h3 = document.getElementsByTagName("h3");
    var craftingItemAmount = document.getElementsByClassName("crafting-item-amount");
    var rawMaterials = document.getElementsByClassName("raw-material");

    if(h3.length !== craftingRecipes.size){
        console.log("populateItems: Something went terribly wrong");
        return;
    }
    var index = 0;
    for (const [key, _] of craftingRecipes.entries()) {
        if(rawMaterialsCount > index){
            const craftingItem = craftingRecipes.get(craftingItemNames[index]);
            h3[index].innerText = key + ": " + craftingItem.craftingRequirements[0].quantity;
            
            // index is passed like this, because if not, it will jsut pass a reference to index and it will be wrong.
            const selectedIndex = index;
            rawMaterials[index].onclick = function() { setRawMaterial(rawMaterials[selectedIndex], key, craftingItem.name) };
            index += 1;
            continue;
        }
        h3[index].innerText = key;
        const i = index - rawMaterialsCount;
        craftingItemAmount[i].id = key + "Amount";
        craftingItemAmount[i].setAttribute("aria-label", "Amount of " + key + " you want to craft");
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
    
    console.log(element);
    element.classList.add("selected-raw-material");
    var h3 = element.getElementsByTagName("h3")[0];
    h3.innerText = key + ": 8";
}