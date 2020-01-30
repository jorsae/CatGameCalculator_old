var craftingRecipes = new Map(); // Used to store all the different crafting recipes
const outputRows = 4; // How many crafting items per row in the output
var currentCraft = new Map(); // Stores the current items the user have selected to calculate

const rarity = {
    HIDDEN: 'hidden',
    RAW: 'raw',
    COMMON: 'common',
    RARE: 'rare',
    EPIC: 'epic',
    LEGENDARY: 'legendary'
}