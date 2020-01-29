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
    var userTime = parseInt(userTimeElement.value);
    if(userTime === NaN){
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
                for(var i = 0; i < item.craftingRequirements.length; i++){
                    var craftingItem = item.craftingRequirements[i].craftingItem;
                    var totalItemAmount = item.craftingRequirements[i].quantity * itemAmount;
                    userItemReq.push(new CraftingRequirement(craftingItem, totalItemAmount));
                }
            }

        }
        continue;
    }
    userItem = new CraftingItem("UserItem", 0, 0, userItemReq);
    craftingRecipes.set(userItem.name, userItem);

    var reqs = getCraftingRequirements(userItem, 1);
    
    var totalCost = 0;
    console.log(reqs);
    for (const entry of reqs.entries()) {
        var item = craftingRecipes.get(entry[0]);
        var quantity = entry[1];
        var cost = item.getCost(userTime, quantity);
        createOutput(item, cost, quantity);
        totalCost += cost;
    }
    
    console.log('==============================');
    console.log('userTime: ' + userTime + '\ttotalCost: ' + totalCost);
    currentCraft.clear();

    craftingRecipes.delete(userItem.name);
}

function createOutput(item, cost, quantity){
    if(item.name === "UserItem"){
        return;
    }

    var outputContainerElement = document.getElementById("outputContainer");
    var outputDiv = document.createElement("div");
    outputDiv.classList.add("output-content");

    var imgDiv = document.createElement("img");
    imgDiv.src = "images/game/" + item.name.toLowerCase() + ".png";

    var outputTextDiv = document.createElement("div");
    outputTextDiv.classList.add("output-content-text");
    outputTextDiv.classList.add("rare");// TODO: Can change this depending on the item

    var textOutputItem = document.createElement("p"); // TODO: This should also contain "craft 4x, 10times" information
    textOutputItem.innerText = item.name + ": " + quantity;
    
    var textOutputCost = document.createElement("p");
    textOutputCost.innerText = "Cost: " + cost;

    outputTextDiv.appendChild(textOutputItem);
    outputTextDiv.appendChild(textOutputCost);

    outputDiv.appendChild(imgDiv);
    outputDiv.appendChild(outputTextDiv);

    outputContainerElement.appendChild(outputDiv);
}

function clickUp(arg){
    var element = document.getElementById(arg + "Amount");
    if(element === null){
        return;
    }
    var value = parseInt(element.innerText);
    element.innerText = ++value;
    console.log("clickUp: " + arg);
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

function calculateCraft(item, quantity){
    var reqs = getCraftingRequirements(item, quantity);

    var totalCost = 0;
    console.log(reqs);
    for (const entry of reqs.entries()) {
        var item = craftingRecipes.get(entry[0]);
        
        totalCost += item.getCost(userTime, entry[1]);
        //console.log(item);
    }
    
    console.log('==============================');
    console.log('userTime: ' + userTime + '\ttotalCost: ' + totalCost);
    currentCraft.clear();
}