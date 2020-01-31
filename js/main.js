window.onload = init;

function init(){
    document.getElementById("calculate").onclick = calculate;
}

/*
    iterates through all the craftingItem text fields and adds all the values > 0 in the userItemReq list.
    it then creates a new CraftingItem called "UseItem", with the new requirements and calculates everything.
    Afterwards the CraftingItem "UseItem" is then deleted from the craftingRecipes.
*/
function calculate(){
    var userTimeElement = document.getElementById("userTime");
    var userTime = parseInt(userTimeElement.valueAsNumber);
    if(userTime === NaN) {
        console.log("NaN");
        return;
    }
    userTime *= 60000; // convert from ms to minutes

    var userItemReq = [];
    for (const entry of craftingRecipes.entries()) {
        var item = craftingRecipes.get(entry[0]);
        var itemAmountElement = document.getElementById(item.name.toLowerCase() + 'Amount');
        
        if(itemAmountElement !== null){
            var itemAmount = parseInt(itemAmountElement.innerText);
            itemAmountElement.innerText = "0";
            if(itemAmount > 0){
                userItemReq.push(new CraftingRequirement(item, itemAmount));
                for(var i = 0; i < item.craftingRequirements.length; i++){
                    var craftingItem = item.craftingRequirements[i].craftingItem;
                    var totalItemAmount = item.craftingRequirements[i].quantity * itemAmount;
                    userItemReq.push(new CraftingRequirement(craftingItem, totalItemAmount));
                }
            }

        }
        continue;
    }
    userItem = new CraftingItem("UserItem", 0, 0, rarity.HIDDEN, userItemReq);
    craftingRecipes.set(userItem.name, userItem);
    var reqs = getCraftingRequirements(userItem, 1);
    
    // Make sure everything is cleared
    var outputContainerElement = document.getElementById("outputContainer")
    outputContainerElement.innerHTML = "";
    
    // Create span for storing "total" information, cost, time, etc
    var spanTotal = document.createElement("span");
    spanTotal.id = "spanTotal";
    spanTotal.classList.add("output-container-total");
    spanTotal.classList.add("output-total");
    outputContainerElement.appendChild(spanTotal);
    
    // Create span for storing all crafting items needed
    var spanItems = document.createElement("span");
    spanItems.classList.add("output-container-items");
    
    var totalCost = 0;
    for (const entry of reqs.entries()) {
        var item = craftingRecipes.get(entry[0]);
        if(item.name === "UserItem") {
            continue;
        }
        var quantity = entry[1];
        var itemCost = item.getCost(userTime, quantity);
        var cost = itemCost[0];
        var itemsPerCraft = itemCost[1];
        var crafts = itemCost[2];
        createOutput(item, cost, itemsPerCraft, crafts, spanItems);
        totalCost += cost;
    }

    // Adding paragraph with total cost, time, etc to the spanTotal element
    var totalCostParagraph = document.createElement("p");
    totalCostParagraph.innerText = "Total cost: " + totalCost
    spanTotal.appendChild(totalCostParagraph);

    var totalTimeParagraph = document.createElement("p");
    totalTimeParagraph.innerText = "Completion time: " + userTimeElement.value;
    spanTotal.appendChild(totalTimeParagraph);

    currentCraft.clear();
    craftingRecipes.delete(userItem.name);
}

function createOutput(item, cost, itemsPerCraft, crafts, spanItems){
    var outputContainerElement = document.getElementById("outputContainer");

    var outputDiv = document.createElement("div");
    outputDiv.classList.add("output-content");

    var imgDiv = document.createElement("img");
    imgDiv.src = "images/game/" + item.name.toLowerCase() + ".png";

    var outputTextDiv = document.createElement("div");
    outputTextDiv.classList.add("output-content-text");
    outputTextDiv.classList.add(item.rarity);

    var textOutputItem = document.createElement("p");
    textOutputItem.innerText = item.name + ": " + (itemsPerCraft*crafts);
    
    var textOutputCost = document.createElement("p");
    textOutputCost.innerText = "Cost: " + cost;

    var textOutputCraft = document.createElement("p");
    textOutputCraft.innerText = "Craft: " + itemsPerCraft + "x, " + crafts + " times";

    outputTextDiv.appendChild(textOutputItem);
    outputTextDiv.appendChild(textOutputCost);
    outputTextDiv.appendChild(textOutputCraft);

    outputDiv.appendChild(imgDiv);
    outputDiv.appendChild(outputTextDiv);
    spanItems.appendChild(outputDiv);

    outputContainerElement.appendChild(spanItems);
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

function clickUp(arg){
    var element = document.getElementById(arg + "Amount");
    if(element === null){
        return;
    }
    var value = parseInt(element.innerText);
    element.innerText = ++value;
}

function clickDown(arg){
    var element = document.getElementById(arg + "Amount");
    if(element === null){
        return;
    }
    var value = parseInt(element.innerText);
    element.innerText = --value;
    if(value <= 0){
        element.innerText = 0;
    }
}