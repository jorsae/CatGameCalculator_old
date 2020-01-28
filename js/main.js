var userTime = 30;

var reqs = getCraftingRequirements(needles, 10);

var totalCost = 0;
console.log(reqs);
for (const entry of reqs.entries()) {
    var item = craftingRecipes.get(entry[0]);
    
    totalCost += item.getCost(userTime, entry[1]);
    //console.log(item);
}

console.log('==============================');
console.log('userTime: ' + userTime + '\ttotalCost: ' + totalCost);