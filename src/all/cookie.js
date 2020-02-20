/* Cookie and cookie consent */
const cookieName = "CatCookie"; // Name of the cookie we set
const cookieValue = "Yes"; // Value of the cookie when set

startCookie();

function startCookie(){
    document.getElementById("cookieAccept").onclick = cookieAccept;
    checkCookie();
}

/**
 * Check if the user have already accepted the cookie policy
*/
function checkCookie(){
    var cookie = getCookie(cookieName);
    if(cookie !== cookieValue){
        var cookieBanner = document.getElementById("cookiePolicyBanner");
        cookieBanner.style.display = "flex";
    }
}

/*
    User accepted our cookie policy
*/
function cookieAccept(){
    setCookie(cookieName, cookieValue, 365);
    var cookieBanner = document.getElementById("cookiePolicyBanner");
    cookieBanner.style.display = "none";
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}
