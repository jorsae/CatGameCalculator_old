/**
 * This file takes care of:
 *  onclick event for all crafting items.
 */

/**
 * User increased the value on a CraftingItem (arg)
 */
function clickUp(arg){
    console.log("clickUp: " + arg);
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
    console.log("clickDown: " + arg);
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