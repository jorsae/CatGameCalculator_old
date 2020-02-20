export var craftingRecipes = new Map(); // Used to store all the different crafting recipes
export var outputRows = 4; // How many crafting items per row in the output
export var currentCraft = new Map(); // Stores the current items the user have selected to calculate
export var lastTimeCalculated = 100; // Stores last time the "calculate" button was pressed
export var calculateDelay = 1 * 1000; // Stores how many ms delay it should be between the user is allowed to click "calculate"