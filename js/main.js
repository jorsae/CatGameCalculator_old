var userTime = 60*48*5

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

//calculateCraft(needles, 10);
//calculateCraft(sparkles, 20);
//calculateCraft(necklace, 20);
//calculateCraft(fire, 20);
//calculateCraft(elementstone, 20);
calculateCraft(artifact, 20);