/**
 * This file takes care of:
 *  Hamburger menu
 *  Cookie for displaying "cookie consent banner"
 */

/* Hamburger menu */
function hamburgerMenu(){
    var x = document.getElementById("topNav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}