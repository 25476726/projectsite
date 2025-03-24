document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("nav");
    const navShowButton = document.getElementById("navshow");
    const navHideButton = document.getElementById("navhide");

    function isMobile() {
        return window.matchMedia("(max-aspect-ratio: 1/1)").matches;
    }

    function updateNavVisibility() {
        if (isMobile()) {
            nav.classList.remove("show"); // initially hides nav in mobile view and shows the button
            navShowButton.style.display = "inline-block"; 
        } else {
            nav.classList.add("show"); // nav shows by defauly when desktop view loads and hides button
            navShowButton.style.display = "none"; 
        }
    }

    updateNavVisibility();
    window.addEventListener("resize", updateNavVisibility); //runs every time the screen size changes

    navShowButton.addEventListener("click", function () {
        nav.classList.add("show"); // Shows nav when show button pressed an dhides the button
        navShowButton.style.display = "none"; 
    });

    navHideButton.addEventListener("click", function () {
        nav.classList.remove("show"); // hides the nav when hide button pressed and shows the show button.
        navShowButton.style.display = "inline-block";
    });
});
