/**
 * Adds all the crafting items required for the selected floor.
 */
export function addFloor(floorRecipes, craftingRecipes){
    var floors = document.getElementById("floors");
    var floorValue = floors.options[floors.selectedIndex].value;
    const floor = floorRecipes.get(floorValue);
    if(floor === undefined){
        console.log("undefined floor");
        return;
    }

    if(craftingItemInputted(craftingRecipes)){
        if(!confirm("You already have crafting items inputted.\nPress 'Ok' if you want to add 'floor " + floor + "' on top")){
            return;
        }
    }

    var floorReq = floor.requirements;
    console.log(floorReq);
    for(var i = 0; i < floorReq.length; i++){
        var itemName = floorReq[i][0];
        var quantity = floorReq[i][1];
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
function craftingItemInputted(craftingRecipes){
    for (const entry of craftingRecipes.entries()) {
        var item = craftingRecipes.get(entry[0]);
        var itemAmountElement = document.getElementById(item.name + 'Amount');
        
        if(itemAmountElement !== null){
            if(parseInt(itemAmountElement.value) > 0){
                return true;
            }
        }
    }
    return false;
}

/**
 * Populates the select floors html with all floors available.
 */
export function populateFloor(floorRecipes){
    var select = document.getElementById("floors");
    for (const [key, value] of floorRecipes.entries()) {
        var option = document.createElement("option");
        option.value = value.name;
        option.innerHTML = value;
        select.appendChild(option);
      }
}

/**
 * Register onclick events for up/down arrows for each item.
 * This will increase/decrease the amount of the selected item.
 */
export function registerArrowEvent(rawMaterials, craftingRecipes){
    var arrows = document.getElementsByClassName("arrow");
    const total = craftingRecipes.size - rawMaterials;
    
    if(arrows.length !== total*2){
        console.log("Something went terribly wrong");
        return;
    }

    var index = 0;
    for (const [key, value] of craftingRecipes.entries()) {
        if(rawMaterials > index){
            index += 1;
            continue;
        }
        const i = (index - rawMaterials)*2;

        arrows[i].onclick = function() { clickUp(key)};
        arrows[i + 1].onclick = function() { clickDown(key)};
        index += 1;
    }
}

/**
 * User increased the value on a CraftingItem (arg)
 */
function clickUp(arg){
    var element = document.getElementById(arg + "Amount");
    if(element === null){
        return;
    }
    var value = parseInt(element.value);
    element.value = ++value;
}
/**
 * User decreased the value on a CraftingItem (arg)
 */
function clickDown(arg){
    var element = document.getElementById(arg + "Amount");
    if(element === null){
        return;
    }
    var value = parseInt(element.value);
    element.value = --value;
    if(value <= 0){
        element.value = 0;
    }
}