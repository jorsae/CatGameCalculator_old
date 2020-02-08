window.onload = init;

function init(){
    document.getElementById("calculate").onclick = calculate;
    document.getElementById("clear").onclick = clear;
}

function clear(){
    for (const entry of craftingRecipes.entries()) {
        var item = craftingRecipes.get(entry[0]);
        var itemAmountElement = document.getElementById(item.name.toLowerCase() + 'Amount');
        if(itemAmountElement !== null){
            itemAmountElement.innerText = "0";
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
            var itemAmount = parseInt(itemAmountElement.innerText);
            if(itemAmount > 0){
                userItemReq.push(new CraftingRequirement(item, itemAmount));
            }
        }
        continue;
    }

    userItem = new CraftingItem("UserItem", 0, 0, rarity.HIDDEN, userItemReq);
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
        craftingItems.push(new CraftingItemOutput(item.name, item.craftingTime, item.baseCost, item.rarity, quantity));
    }
    
    craftingItems.sort(function(a, b){
        return a.getRarityValue() - b.getRarityValue();
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
    var outputTotal = document.getElementById("outputTotal");
    outputTotal.innerHTML = "";
    
    // Adding total Cost
    var totalCostParagraph = document.createElement("p");
    totalCostParagraph.innerText = "Total cost: " + totalCost.toLocaleString();
    outputTotal.appendChild(totalCostParagraph);

    // Adding crafting time
    var hours = Math.floor(userTime / 60);
    hours = (hours.toString().length == 1) ? '0' + hours : hours;
    var minutes = userTime % 60;
    minutes = (minutes.toString().length == 1) ? '0' + minutes : minutes;
    
    var totalTimeParagraph = document.createElement("p");
    totalTimeParagraph.innerText = "Time to craft: " + hours + ":" + minutes;
    outputTotal.appendChild(totalTimeParagraph);

    // Scroll down to the results
    document.getElementById("outputContainer").scrollIntoView();
    
    currentCraft.clear();
    craftingRecipes.delete(userItem.name);
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
    var cellNodeCost = document.createTextNode(cost.toLocaleString());
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