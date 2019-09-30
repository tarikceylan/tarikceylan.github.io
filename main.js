function burgerNav () {
    var burgerNav = document.getElementById("burger-nav");

    if (burgerNav.className === "nav-links"){
        burgerNav.className += " responsive";

    }
    else {
        burgerNav.className = "nav-links";
    }
}