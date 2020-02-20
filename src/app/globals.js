/**
 * Holds all global variables used in the app
 */
export var craftingRecipes = new Map(); // Used to store all the different crafting recipes
export var currentCraft = new Map(); // Stores the current items the user have selected to calculate
window.lastTimeCalculated = 100; // Stores last time the "calculate" button was pressed
window.calculateDelay = 1 * 1000; // Stores how many ms delay it should be between the user is allowed to click "calculate"

/**
 * Crafting Items rarity. Some are customy made to hide them from output.
 */
export const rarity = {
    HIDDEN: 'hidden',
    RAW: 'raw',
    COMMON: 'common',
    RARE: 'rare',
    EPIC: 'epic',
    LEGENDARY: 'legendary'
}