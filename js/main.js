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
    
    // Sort and output all the crafting items
    var temporaryCraftingItems = Array.from(reqs);
    var craftingItems = [];
    for(var i = 0; i < temporaryCraftingItems.length; i++){
        var item = craftingRecipes.get(temporaryCraftingItems[i][0]);
        if(item.rarity === rarity.HIDDEN){
            continue;
        }
        var quantity = temporaryCraftingItems[i][1];
        craftingItems.push(new CraftingItemOutput(item.name, item.craftingTime, item.baseCost, item.rarity, quantity));
    }
    
    craftingItems.sort(function(a, b){
        return a.getRarityValue() - b.getRarityValue();
    });
    
    var totalCost = 0;
    for(var i = 0; i < craftingItems.length; i++){
        var item = craftingItems[i];
        var cost = item.getCost(userTime);
        createOutput(item, cost, userTime, spanItems);
        totalCost += cost;
    }

    // Adding paragraph with total cost, time, etc to the spanTotal element
    var totalCostParagraph = document.createElement("p");
    totalCostParagraph.innerText = "Total cost: " + totalCost.toLocaleString();
    spanTotal.appendChild(totalCostParagraph);

    var totalTimeParagraph = document.createElement("p");
    totalTimeParagraph.innerText = "Completion time: " + userTime;
    spanTotal.appendChild(totalTimeParagraph);

    // Scroll down to the results
    document.getElementById("outputContainer").scrollIntoView();

    currentCraft.clear();
    craftingRecipes.delete(userItem.name);
}

function createOutput(item, cost, userTime, spanItems){
    var outputContainerElement = document.getElementById("outputContainer");
    
    // Creating a div to store this output in
    var outputDiv = document.createElement("div");
    outputDiv.classList.add("output-content");
    
    // Image for the item we are outputting
    var imgDiv = document.createElement("img");
    imgDiv.src = "images/game/" + item.name.toLowerCase() + ".png";
    
    // Creating a div to store the text for the item we are outputting
    var outputTextDiv = document.createElement("div");
    outputTextDiv.classList.add("output-content-text");
    outputTextDiv.classList.add(item.rarity);
    
    var itemsPerCraft = item.getItemsPerCraft(userTime);
    var crafts = item.getCrafts(userTime);

    // Text fields for storing item output
    var textOutputItem = document.createElement("p");
    textOutputItem.innerText = item.name + ": " + (itemsPerCraft*crafts).toLocaleString();
    
    var textOutputCost = document.createElement("p");
    textOutputCost.innerText = "Cost: " + cost.toLocaleString();

    // Adding text fields to our div. We have to add these before the potential crafting "guide"
    outputTextDiv.appendChild(textOutputItem);
    outputTextDiv.appendChild(textOutputCost);

    // Raw ingredients, does not need to be crafted, so we don't add that text to them
    if(item.rarity !== rarity.RAW){
        var textOutputCraft = document.createElement("p");
        textOutputCraft.innerText = "Craft: " + itemsPerCraft + "x, " + crafts + " times";
        outputTextDiv.appendChild(textOutputCraft);
    }

    // Adding all DOM elements we created together to the main output container
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