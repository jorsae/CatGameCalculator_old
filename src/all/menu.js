/**
 * Sets up the hamburgerMenu events
 */
registerHamburgeMenu();
function registerHamburgeMenu(){
    document.getElementById("hamburgerMenu").onclick = hamburgerMenu;
}

/**
 * Show or hides the hamburger menu, depending on the current state
 */
function hamburgerMenu(){
    var x = document.getElementById("topNav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}