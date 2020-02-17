/**
 * This file takes care of:
 *  Global variables (Globals)
 *  Creating classes used for calculations (Classes)
 *  Function for fetching crafting requirements (Crafting Function)
 *  Generating all crafting items (Crafting)
 *  Outputting the results to the website (Output)
 */

/* Globals */
var craftingRecipes = new Map(); // Used to store all the different crafting recipes
var outputRows = 4; // How many crafting items per row in the output
var currentCraft = new Map(); // Stores the current items the user have selected to calculate
var lastTimeCalculated = 100; // Stores last time the "calculate" button was pressed
var calculateDelay = 1 * 1000; // Stores how many ms delay it should be between the user is allowed to click "calculate"

var rarity = {
    HIDDEN: 'hidden',
    RAW: 'raw',
    COMMON: 'common',
    RARE: 'rare',
    EPIC: 'epic',
    LEGENDARY: 'legendary'
}

/* Classes */
class CraftingMethod{
    constructor(itemQuantity, crafts){
        this.itemQuantity = itemQuantity;
        this.crafts = crafts;
    }
}

class CraftingRequirement{
    constructor(craftingItem, quantity){
        this.craftingItem = craftingItem;
        this.quantity = quantity;
    }

    toString(){
        this.craftingItem.name + ' : ' + this.quantity;
    }
}

class CraftingItem{
    constructor(name, craftingTime, baseCost, rarity, sortingOrder, craftingRequirements = null){
        this.name = name;
        this.craftingTime = craftingTime;
        this.baseCost = baseCost;
        this.rarity = rarity;
        this.sortingOrder = sortingOrder

        this.craftingRequirements = craftingRequirements;
    }

    toString(){
        var craftReq = "";
        for(var i = 0; i < this.craftingRequirements.length; i++){
            craftReq += this.craftingRequirements[i].craftingItem.name + ' : ' + this.craftingRequirements[i].quantity + " ";
        }
        return this.name + ", " + this.craftingTime + "minutes, " + this.baseCost + "coins. Crafting Requirement: " + craftReq;
    }
}

class CraftingItemOutput{
    constructor(name, craftingTime, baseCost, rarity, quantity, sortingOrder){
        this.name = name;
        this.craftingTime = craftingTime;
        this.baseCost = baseCost;
        this.rarity = rarity;
        this.quantity = quantity;
        this.sortingOrder = sortingOrder
    }

    getRarityValue(){
        switch(this.rarity){
            case rarity.HIDDEN:
                return 0;
            case rarity.RAW:
                return 1;
            default:
            case rarity.COMMON:
                return 2;
            case rarity.RARE:
                return 3;
            case rarity.EPIC:
                return 4;
            case rarity.LEGENDARY:
                return 5;
        }
    }

    getCraftingMethod(time){
        var crafts = 1; // How many crafts you can do in the time given. Rounded down. Minimum 1
        if(this.craftingTime < time){
            crafts = Math.floor(time / this.craftingTime);
        }

        // You can do more crafts, than items needed. Ergo: 1 item, per craft
        if(crafts > this.quantity){
            crafts = this.quantity;
            return [new CraftingMethod(1, this.quantity)];
        }
        // You can only do 1 craft. Ergo: x items, 1 craft
        if(crafts === 1){
            return [new CraftingMethod(this.quantity, 1)];
        }

        var maxQuantity = Math.ceil(this.quantity / crafts);
        var minQuantity = maxQuantity - 1;

        for(var i = 1; i <= crafts; i++){
            var max = maxQuantity * i;
            var min = minQuantity * (crafts - i);
            if((max+min) === this.quantity){
                return [new CraftingMethod(maxQuantity, i), new CraftingMethod(minQuantity, (crafts-i))];
            }
        }

        return [];
    }

    getCost(craftingMethods){
        var totalCost = 0;
        for(var i = 0; i < craftingMethods.length; i++){
            totalCost += (this.baseCost / 4) * (Math.pow(craftingMethods[i].itemQuantity, 2) + 3 * craftingMethods[i].itemQuantity) * craftingMethods[i].crafts;
        }
        return totalCost;
    }
}

/* Crafting Function */
function getCraftingRequirements(item, parentQuantity = 1){
    if(item.craftingRequirements === null){
        return;
    }

    // Adds all the requirements
    for(var i = 0; i < item.craftingRequirements.length; i++){
        var name = item.craftingRequirements[i].craftingItem.name;
        var quantity = item.craftingRequirements[i].quantity * parentQuantity;
        
        var nameMap = currentCraft.get(name);
        if(nameMap === undefined){
            var craftingItem = craftingRecipes.get(name);
            getCraftingRequirements(craftingItem, quantity);
            currentCraft.set(name, quantity);
        }
        else{
            var craftingItem = craftingRecipes.get(name);
            getCraftingRequirements(craftingItem, quantity);
            var oldQuantity = currentCraft.get(name);
            currentCraft.set(name, oldQuantity + quantity);
        }
    }
    return currentCraft;
}

/* Crafting */
// Base
cotton = new CraftingItem("Cotton", 0, 0, rarity.RAW, 1);
log = new CraftingItem("Log", 0, 0, rarity.RAW, 2);
rock = new CraftingItem("Rock", 0, 0, rarity.RAW, 3);
quartz = new CraftingItem("Quartz", 0, 0, rarity.RAW, 4);
craftingRecipes.set(cotton.name, cotton);
craftingRecipes.set(log.name, log);
craftingRecipes.set(rock.name, rock);
craftingRecipes.set(quartz.name, quartz);

// Basic Crafting
var stringReq = [new CraftingRequirement(cotton, 3)];
string = new CraftingItem("String", 5, 50, rarity.COMMON, 5, stringReq);
craftingRecipes.set(string.name, string);

var woodReq = [new CraftingRequirement(log, 3)];
wood = new CraftingItem("Wood", 5, 50, rarity.COMMON, 6, woodReq);
craftingRecipes.set(wood.name, wood);

var ribbonReq = [new CraftingRequirement(string, 2), new CraftingRequirement(wood, 2)];
ribbon = new CraftingItem("Ribbon", 15, 100, rarity.RARE, 7, ribbonReq);
craftingRecipes.set(ribbon.name, ribbon);

// Shiny Crafting
var metalReq = [new CraftingRequirement(rock, 3)];
metal = new CraftingItem("Metal", 15, 100, rarity.COMMON, 8, metalReq);
craftingRecipes.set(metal.name, metal);

var needlesReq = [new CraftingRequirement(metal, 4), new CraftingRequirement(ribbon, 1)];
needles = new CraftingItem("Needles", 30, 200, rarity.RARE, 9, needlesReq);
craftingRecipes.set(needles.name, needles);

var sparklesReq = [new CraftingRequirement(needles, 2), new CraftingRequirement(ribbon, 2)];
sparkles = new CraftingItem("Sparkles", 60, 300, rarity.EPIC, 10, sparklesReq);
craftingRecipes.set(sparkles.name, sparkles);

// Precious Crafting
var bronzeReq = [new CraftingRequirement(rock, 4)];
bronze = new CraftingItem("Bronze", 30, 200, rarity.COMMON, 11, bronzeReq);
craftingRecipes.set(bronze.name, bronze);

var silverReq = [new CraftingRequirement(bronze, 3), new CraftingRequirement(sparkles, 1)];
silver = new CraftingItem("Silver", 120, 300, rarity.RARE, 12, silverReq);
craftingRecipes.set(silver.name, silver);

var goldReq = [new CraftingRequirement(silver, 2), new CraftingRequirement(sparkles, 2)];
gold = new CraftingItem("Gold", 360, 500, rarity.EPIC, 13, goldReq);
craftingRecipes.set(gold.name, gold);

// Jewel Crafting
var amethystReq = [new CraftingRequirement(quartz, 10)];
amethyst = new CraftingItem("Amethyst", 60, 300, rarity.COMMON, 14, amethystReq);
craftingRecipes.set(amethyst.name, amethyst);

var pendantReq = [new CraftingRequirement(amethyst, 7), new CraftingRequirement(silver, 2)];
pendant = new CraftingItem("Pendant", 180, 500, rarity.RARE, 15, pendantReq);
craftingRecipes.set(pendant.name, pendant);

var necklaceReq = [new CraftingRequirement(pendant, 3), new CraftingRequirement(gold, 2)];
necklace = new CraftingItem("Necklace", 760, 500, rarity.EPIC, 16, necklaceReq);
craftingRecipes.set(necklace.name, necklace);

// Magic Crafting
var orbReq = [new CraftingRequirement(quartz, 20)];
orb = new CraftingItem("Orb", 60, 300, rarity.COMMON, 17, orbReq);
craftingRecipes.set(orb.name, orb);

var waterReq = [new CraftingRequirement(orb, 2), new CraftingRequirement(silver, 1)];
water = new CraftingItem("Water", 360, 800, rarity.RARE, 18, waterReq);
craftingRecipes.set(water.name, water);

var fireReq = [new CraftingRequirement(orb, 6), new CraftingRequirement(gold, 1)];
fire = new CraftingItem("Fire", 720, 1000, rarity.EPIC, 19, fireReq);
craftingRecipes.set(fire.name, fire);

// Ancient Crafting
var waterstoneReq = [new CraftingRequirement(water, 2), new CraftingRequirement(ribbon, 10)];
waterstone = new CraftingItem("Waterstone", 720, 1500, rarity.RARE, 20, waterstoneReq);
craftingRecipes.set(waterstone.name, waterstone);

var firestoneReq = [new CraftingRequirement(fire, 1), new CraftingRequirement(sparkles, 2)];
firestone = new CraftingItem("Firestone", 720, 1500, rarity.EPIC, 21, firestoneReq);
craftingRecipes.set(firestone.name, firestone);

var elementstoneReq = [new CraftingRequirement(firestone, 1), new CraftingRequirement(waterstone, 1)];
elementstone = new CraftingItem("Elementstone", 1440, 5000, rarity.LEGENDARY, 22, elementstoneReq);
craftingRecipes.set(elementstone.name, elementstone);

// Ruin Crafting
var artifactReq = [new CraftingRequirement(elementstone, 1), new CraftingRequirement(necklace, 1)];
artifact = new CraftingItem("Artifact", 4320, 10000, rarity.LEGENDARY, 23, artifactReq);
craftingRecipes.set(artifact.name, artifact);

/* Output */
window.onload = init;

function init(){
    document.getElementById("calculate").onclick = calculate;
    document.getElementById("clear").onclick = clear;
    document.getElementById("copyClipboard").onclick = copyClipboard;
}

/*
    Puts the output table to the users clipboard.
    We can only copy to clipboard things that are on the website itself.
    We create a invisible div and create a clone of the table, without the first column.
    We then copy that table and then remove the div so everything is deleted afterwards.
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

/*
    Clear all user input
*/
function clear(){
    for (const entry of craftingRecipes.entries()) {
        var item = craftingRecipes.get(entry[0]);
        var itemAmountElement = document.getElementById(item.name.toLowerCase() + 'Amount');
        if(itemAmountElement !== null){
            itemAmountElement.value = 0;
        }
        continue;
    }
}

/*
    iterates through all the craftingItem text fields and adds all the values > 0 in the userItemReq list.
    it then creates a new CraftingItem called "UseItem", with the new requirements and calculates everything.
    Afterwards the CraftingItem "UseItem" is then deleted from the craftingRecipes.
*/
function calculate(){
    if(new Date().getTime() < (lastTimeCalculated + calculateDelay)){
        console.log("Calculate is on cooldown");
        return;
    }
    lastTimeCalculated = new Date().getTime();

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
        var itemAmountElement = document.getElementById(item.name.toLowerCase() + 'Amount');
        
        if(itemAmountElement !== null){
            var itemAmount = parseInt(itemAmountElement.value);
            if(itemAmount > 0){
                userItemReq.push(new CraftingRequirement(item, itemAmount));
            }
        }
        continue;
    }

    userItem = new CraftingItem("UserItem", 0, 0, rarity.HIDDEN, 1000, userItemReq);
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

/* Converts int to abbreviated number. 1,005,123 => 1m, etc. */
function intToString (value) {
    var suffixes = ["", "k", "m", "b","t"];
    var suffixNum = Math.floor((""+value).length/3);
    var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(2));
    if (shortValue % 1 != 0) {
        shortValue = shortValue.toFixed(1);
    }
    return shortValue+suffixes[suffixNum];
}

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

function getOutputRow(itemNumber){
    var itemNumberModulo = itemNumber % outputRows;
    if(itemNumberModulo === 0){
        var outputRowElement = document.createElement("div");
        outputRowElement.classList.add("output-content-row");
        outputRowElement.id = itemNumber - itemNumberModulo;
        return outputRowElement;
    }
    return document.getElementById(itemNumber - itemNumberModulo);
}