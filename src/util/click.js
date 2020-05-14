/**
 * Register onclick events for up/down arrows for each item.
 * This will increase/decrease the amount of the selected item.
 */
export function registerArrowEvent(rawMaterials, craftingRecipes){
    var arrows = document.getElementsByClassName("arrow");
    const total = craftingRecipes.size - rawMaterials;
    
    if(arrows.length !== total*2){
        console.log("registerArrowEvent: Something went terribly wrong. " + arrows.length + " | " + total*2);
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

export function registerCraftingItemEvent(rawMaterials, craftingRecipes){
    var craftingItemButton = document.getElementsByClassName("crafting-item-button");
    const total = craftingRecipes.size - rawMaterials;
    
    if(craftingItemButton.length !== total){
        console.log("registerCraftingItemEvent: Something went terribly wrong. " + craftingItemButton.length + " | " + total);
        return;
    }

    var index = 0;
    for (const [key, value] of craftingRecipes.entries()) {
        if(rawMaterials > index){
            index += 1;
            continue;
        }
        const craftingItem = craftingRecipes.get(key);
        fillCraftingItemInfo(craftingItem);

        craftingItemButton[index - rawMaterials].onclick = function() { displayCraftingItemInfo(craftingItem); };
        index += 1;
    }
}

/**
 * Click event, that displays/hides crafting item information
 */
function displayCraftingItemInfo(craftingItem){
    const infoParagraph = document.getElementById(craftingItem.name.toLowerCase() + "Info");
    if(infoParagraph.classList.contains("display-crafting-item-info")){
        infoParagraph.classList.remove("display-crafting-item-info");
    }
    else{
        infoParagraph.classList.add("display-crafting-item-info");
    }
}

/**
 * Fills the crafting item info paragraph with appropriate information
 */
function fillCraftingItemInfo(craftingItem){
    const infoParagraph = document.getElementById(craftingItem.name.toLowerCase() + "Info");
    var textContent = "";
    for(let i = 0; i < craftingItem.craftingRequirements.length; i++){
        textContent += craftingItem.craftingRequirements[i].craftingItem.name + ": " + craftingItem.craftingRequirements[i].quantity + "<br>";
    }


    textContent += "Crafting time: " + convertMinutes(craftingItem.craftingTime);
    console.log(craftingItem.name);

    infoParagraph.innerHTML = textContent;
}

/**
 * Helper function to convert minutes to more readable text
 */
function convertMinutes(num){
    var d = Math.floor(num/1440); // 60*24
    var h = Math.floor((num-(d*1440))/60);
    var m = Math.round(num%60);

    var output = "";
    if(d > 0){
        output += d + " days, ";
    }

    if(h > 0){
        output += h + " hours, ";
    }

    if(m > 0){
        output += m + " min";
    }

    if(output.endsWith(", ")){
        return output.substring(0, output.length - 2);
    }

    return output;
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