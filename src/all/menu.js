/**
 * Entry point for main js
 */
window.onload = init;
function init(){
    document.getElementById("versionNumber").innerText = "Version: " + __VERSION__;
    registerHamburgerMenu();
}

/**
 * Sets up the hamburgerMenu events
 */
function registerHamburgerMenu(){
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