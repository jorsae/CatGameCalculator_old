var craftingRecipes = new Map(); // Used to store all the different crafting recipes
const outputRows = 4; // How many crafting items per row in the output
var currentCraft = new Map(); // Stores the current items the user have selected to calculate
var lastTimeCalculated = 100; // Stores last time the "calculate" button was pressed
const calculateDelay = 1 * 1000; // Stores how many ms delay it should be between the user is allowed to click "calculate"
const cookieName = "CatCookie"; // Name of the cookie we set
const cookieValue = "Yes"; // Value of the cookie when set

const rarity = {
    HIDDEN: 'hidden',
    RAW: 'raw',
    COMMON: 'common',
    RARE: 'rare',
    EPIC: 'epic',
    LEGENDARY: 'legendary'
}