function burgerNav () {
    const burgerNav = document.getElementById("burger-nav");

    if (burgerNav.className === "nav-links"){
        burgerNav.className += " responsive"; // don't remove the sapce.

    }
    else {
        burgerNav.className = "nav-links";
    }
}