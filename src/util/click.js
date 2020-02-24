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