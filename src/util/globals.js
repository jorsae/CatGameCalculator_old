/**
 * Holds all global variables used in the app
 */
export var craftingRecipes = new Map(); // Stores all the different crafting recipes
export var currentCraft = new Map(); // Stores the current items the user have selected to calculate
export var floorRecipes = new Map(); // Stores all the crafting items needed for each floor.
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

//SMALL : {value: 0, name: "Small", code: "S"}, 
export const event30Min = {
    CRAFTING: {value: 0, name: '1min crafting'},
    BASKET: {value: 1, name: '5min basket'},
    STORE: {value: 2, name: '5min shop re-stock'}
}

/**
 * 18:00:00 UTC == 05am aest
 * 12:00:00 UTC == 11pm aest
 * 06:00:00 UTC == 17pm aest
 * 00:00:00 UTC == 11am aest
 */
export const startTime = new Date('Mar 11 2020 12:00:00 UTC')
export const startEvent = event30Min.BASKET;
export const endTime = new Date('Mar 15 2020 23:00:00 UTC');