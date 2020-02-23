import { CraftingRequirement } from "../util/classes";
import { CraftingItem } from "../util/classes";
import { CraftingItemOutput } from "../util/classes";

import { craftingRecipes, floorRecipes } from "./globals";
import { currentCraft } from "./globals";
import { rarity } from "./globals";

import { getCraftingRequirements } from "./crafting_requirement";

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
    populateFloor();
}

function populateItems(){
    const rawMaterials = 3;
    var h3 = document.getElementsByTagName("h3");
    var craftingItemAmount = document.getElementsByClassName("crafting-item-amount");
    var arrows = document.getElementsByClassName("arrow");

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
        const arrowIndex = i*2;

        arrows[arrowIndex].onclick = function() { clickUp(key)};
        arrows[arrowIndex + 1].onclick = "clickDown(" + key + ")";
        arrows[arrowIndex + 1].onclick = function() { clickDown(key)};
        h3[i].innerText = key;
        craftingItemAmount[i].id = key + "Amount";
        index += 1;
    }

}

/**
 * Populates the select floors html with all floors available.
 */
function populateFloor(){
    var select = document.getElementById("floors");
    for (const [key, value] of floorRecipes.entries()) {
        var option = document.createElement("option");
        option.value = value.name;
        option.innerHTML = value;
        select.appendChild(option);
      }
}

/**
 * Adds all the crafting items required for the selected floor.
 */
function addFloor(){
    var floors = document.getElementById("floors");
    var floorValue = floors.options[floors.selectedIndex].value;
    const floor = floorRecipes.get(floorValue);
    if(floor === undefined){
        console.log("undefined floor");
        return;
    }

    if(craftingItemInputted()){
        if(!confirm("You already have crafting items inputted.\nPress 'Ok' if you want to add 'floor " + floor + "' on top")){
            return;
        }
    }

    var floorReq = floor.requirements;
    for(var i = 0; i < floorReq.length; i++){
        var itemName = floorReq[i].craftingItem.name;
        var quantity = floorReq[i].quantity;
        var count = document.getElementById(itemName + "Amount");
        if(count === null){
            continue;
        }
        var value = parseInt(count.value);
        count.value = value + quantity;
    }
}

/**
 * Helper function, checks if any crafting items have input in them
 * return true or false
 */
function craftingItemInputted(){
    for (const entry of craftingRecipes.entries()) {
        var item = craftingRecipes.get(entry[0]);
        var itemAmountElement = document.getElementById(item.name.toLowerCase() + 'Amount');
        
        if(itemAmountElement !== null){
            if(parseInt(itemAmountElement.value) > 0){
                return true;
            }
        }
    }
    return false;
}

/**
 * Puts the output table to the users clipboard.
 * We can only copy to clipboard things that are on the website itself.
 * We create a invisible div and create a clone of the table, without the first column.
 * We then copy that table and then remove the div so everything is deleted afterwards.
 */
function copyClipboard(){
    var table = document.createElement("table");

    // Add table header
    var tableHeader = document.querySelectorAll("#outputTable tr th:not(:first-child)");
    var thead = document.createElement("thead");
    table.appendChild(thead);

    var tableRow = document.createElement("tr");
    thead.appendChild(tableRow);
    for(var i = 0; i < tableHeader.length; i++){
        var clone = tableHeader[i].cloneNode(true);
        tableRow.appendChild(clone);
    }
    thead.appendChild(tableRow);

    // Add table data
    var tableData = document.querySelectorAll("#outputTable tr td:not(:first-child)");
    var tbody = document.createElement("tbody");
    var tableRow = document.createElement("tr");
    for(var i = 0; i < tableData.length; i++){
        var clone = tableData[i].cloneNode(true);
        tableRow.appendChild(tableData[i].cloneNode(true));
        if((i % 4) === 3 && i !== 0){
            tbody.appendChild(tableRow);
            tableRow = document.createElement("tr");
        }
    }
    table.appendChild(tbody);

    // "Invisible" div to store the table we created
    var tableDiv = document.createElement("div");
    tableDiv.style = "position: absolute; top: -9999999px; opacity: 0;";
    tableDiv.appendChild(table);
    document.body.appendChild(tableDiv);

    // Puts the table in the users clipboard
    var range = document.createRange();  
    range.selectNode(table);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    
    document.body.removeChild(tableDiv);
}

/**
 * Clear all user input (crafting items)
 */
function clear(){
    for (const entry of craftingRecipes.entries()) {
        var item = craftingRecipes.get(entry[0]);
        var itemAmountElement = document.getElementById(item.name + 'Amount');
        if(itemAmountElement !== null){
            itemAmountElement.value = 0;
        }
        continue;
    }
}

/**
 * iterates through all the craftingItem text fields and adds all the values > 0 in the userItemReq list
 * it then creates a new CraftingItem called "UseItem", with the new requirements and calculates everything.
 * Afterwards the CraftingItem "UseItem" is then deleted from the craftingRecipes.
 */
function calculate(){
    if(new Date().getTime() < (window.lastTimeCalculated + window.calculateDelay)){
        console.log("Calculate is on cooldown");
        return;
    }
    window.lastTimeCalculated = new Date().getTime();

    var userHours = parseInt(document.getElementById("userTimeHours").value);
    var userMinutes = parseInt(document.getElementById("userTimeMinutes").value);
    
    var userTime = 0;
    if(!isNaN(userHours)) {
        userTime += userHours * 60;
    }
    if(!isNaN(userMinutes)){
        userTime += userMinutes;
    }
    if(userTime <= 0){
        return;
    }
    
    var userItemReq = [];
    for (const entry of craftingRecipes.entries()) {
        var item = craftingRecipes.get(entry[0]);
        var itemAmountElement = document.getElementById(item.name + 'Amount');
        if(itemAmountElement !== null){
            var itemAmount = parseInt(itemAmountElement.value);
            if(itemAmount > 0){
                userItemReq.push(new CraftingRequirement(item, itemAmount));
            }
        }
        continue;
    }

    const userItem = new CraftingItem("UserItem", 0, 0, rarity.HIDDEN, 1000, userItemReq);
    craftingRecipes.set(userItem.name, userItem);
    var reqs = getCraftingRequirements(userItem, 1);
    
    // Sort and output all the crafting items
    var temporaryCraftingItems = Array.from(reqs);
    var craftingItems = [];
    for(var i = 0; i < temporaryCraftingItems.length; i++){
        var item = craftingRecipes.get(temporaryCraftingItems[i][0]);
        if(item.rarity === rarity.HIDDEN){
            continue;
        }
        var quantity = temporaryCraftingItems[i][1];
        craftingItems.push(new CraftingItemOutput(item.name, item.craftingTime, item.baseCost, item.rarity, quantity, item.sortingOrder));
    }
    
    craftingItems.sort(function(a, b){
        return a.sortingOrder - b.sortingOrder;
    });

    document.getElementById('outputTable').getElementsByTagName('tbody')[0].innerHTML = "";
    var totalCost = 0;
    for(var i = 0; i < craftingItems.length; i++){
        var tableRow = document.createElement("tr");

        var item = craftingItems[i];
        var craftingMethods = item.getCraftingMethod(userTime);
        var cost = item.getCost(craftingMethods);
        createOutput(item, cost, craftingMethods, userTime);
        totalCost += cost;
    }

    // Adding paragraph with total cost, time, etc to the outputTotal element
    var outputTotalCost = document.getElementById("outputTotalCost");
    outputTotalCost.innerHTML = "";
    
    // Adding total Cost
    var totalCostParagraph = document.createElement("p");
    totalCostParagraph.innerText = "Total cost: " + totalCost.toLocaleString();
    outputTotalCost.appendChild(totalCostParagraph);

    // Adding paragraph with total cost, time, etc to the outputTotal element
    var outputTotalTime = document.getElementById("outputTotalTime");
    outputTotalTime.innerHTML = "";
    var hours = Math.floor(userTime / 60);
    hours = (hours.toString().length == 1) ? '0' + hours : hours;
    var minutes = userTime % 60;
    minutes = (minutes.toString().length == 1) ? '0' + minutes : minutes;
    
    outputTotalTime.innerText = "Time to craft: " + hours + ":" + minutes;

    // Scroll down to the results
    document.getElementById("outputContainer").scrollIntoView();
    
    currentCraft.clear();
    craftingRecipes.delete(userItem.name);
}

/**
 * Converts int to abbreviated number. 1,005,123 => 1m, etc.
 */
function intToString (value) {
    var suffixes = ["", "k", "m", "b","t"];
    var suffixNum = Math.floor((""+value).length/3);
    var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(2));
    if (shortValue % 1 != 0) {
        shortValue = shortValue.toFixed(1);
    }
    return shortValue+suffixes[suffixNum];
}

/**
 * Creates a full table row for the selected item
 * This will have: crafting item image, quantity, cost and how to craft the item(s)
 * The full table row will be appended to the outputTable
 */
function createOutput(item, cost, craftingMethods, userTime){
    var outputTable = document.getElementById('outputTable').getElementsByTagName('tbody')[0];
    var tableRow = outputTable.insertRow();

    // Add image cell
    var cellImage = tableRow.insertCell(0);
    var cellNodeImage = document.createElement("img");
    cellNodeImage.src = "images/game/" + item.name.toLowerCase() + ".jpg";
    cellImage.appendChild(cellNodeImage);

    // Add item name cell
    var cellItem = tableRow.insertCell(1);
    var cellNodeItem = document.createTextNode(item.name);
    cellItem.appendChild(cellNodeItem);

    // Add quantity cell
    var cellQuantity = tableRow.insertCell(2);
    var cellNodeQuantity = document.createTextNode(item.quantity);
    cellQuantity.appendChild(cellNodeQuantity);

    // Add cost cell
    var cellCost = tableRow.insertCell(3);
    var cellNodeCost = document.createTextNode(intToString(cost));
    cellCost.appendChild(cellNodeCost);

    // Raw ingredients, does not need to be crafted, so we don't add that text to them
    var craftingText = "";
    if(item.rarity !== rarity.RAW){
        for(var i = 0; i < craftingMethods.length; i++){
            if(craftingMethods[i].crafts === 0){
                continue;
            }
            craftingText += "Craft: " + craftingMethods[i].itemQuantity + "x, " + craftingMethods[i].crafts + " times & ";
        }
        craftingText = craftingText.substring(0, craftingText.length-3);
    }
    else{
        craftingText = "None";
    }
    // Add crafting method cell
    var cellCrafting = tableRow.insertCell(4);
    var cellNodeCrafting = document.createTextNode(craftingText);
    cellCrafting.appendChild(cellNodeCrafting);
}