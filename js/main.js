var userTime = 30;

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

calculateCraft(needles, 10);
calculateCraft(ribbon, 20);