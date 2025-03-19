document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("nav");
    const navShowButton = document.getElementById("navshow");
    const navHideButton = document.getElementById("navhide");

    function isMobile() {
        return window.matchMedia("(max-aspect-ratio: 1/1)").matches;
    }

    function updateNavVisibility() {
        if (isMobile()) {
            nav.classList.remove("show"); // Keep nav hidden initially
            navShowButton.style.display = "inline-block"; // Show button
        } else {
            nav.classList.add("show"); // Always show nav on desktop
            navShowButton.style.display = "none"; // Hide button
        }
    }

    // Run on load and when window resizes
    updateNavVisibility();
    window.addEventListener("resize", updateNavVisibility);

    // Show nav on button click (Mobile only)
    navShowButton.addEventListener("click", function () {
        nav.classList.add("show"); // Slide nav into view
        navShowButton.style.display = "none"; // Hide button
    });

    // Hide nav when clicking hide button
    navHideButton.addEventListener("click", function () {
        nav.classList.remove("show"); // Hide nav
        navShowButton.style.display = "inline-block"; // Show button again
    });
});
