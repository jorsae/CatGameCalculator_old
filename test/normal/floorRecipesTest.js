var assert = require('assert');
var floorRecipe = require('../../src/js/normal/floorRecipes');

describe('Floor Recipes', () => {
    it('getFloorRecipes: Makes sure size of normal floor recipes is correct', () => {
        var floorRecipes = floorRecipe.getFloorRecipes();
        assert.equal(floorRecipes.size, 64)
    });

    it('getFloorRecipes: Makes sure floor recipes is returned as a Map object', () => {
        var recipes = recipe.getCraftingRecipes();
        assert.ok(recipes instanceof Map);
    });
});