/**
 * This file takes care of:
 *  onclick event for all crafting items.
 */
function clickUp(arg){
    var element = document.getElementById(arg + "Amount");
    if(element === null){
        return;
    }
    var value = parseInt(element.value);
    element.value = ++value;
}

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