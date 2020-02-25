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
 * Puts the output table to the users clipboard.
 * We can only copy to clipboard things that are on the website itself.
 * We create a invisible div and create a clone of the table, without the first column.
 * We then copy that table and then remove the div so everything is deleted afterwards.
 */
export function copyClipboard(){
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