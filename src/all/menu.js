registerHamburgeMenu();

function registerHamburgeMenu(){
    document.getElementById("hamburgerMenu").onclick = hamburgerMenu;
}

function hamburgerMenu(){
    var x = document.getElementById("topNav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}