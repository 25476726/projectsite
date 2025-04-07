document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("nav");
    const navShowButton = document.getElementById("navshow");
    const navHideButton = document.getElementById("navhide");
    const blurOverlay = document.getElementById("blur-overlay");

    function isMobile() {
        return window.matchMedia("(max-aspect-ratio: 1/1)").matches;
    }

    function updateNavVisibility() {
        if (isMobile()) {
            nav.classList.remove("show");
            navShowButton.style.display = "inline-block";
            blurOverlay.classList.remove("active");
        } else {
            nav.classList.add("show");
            navShowButton.style.display = "none";
            blurOverlay.classList.remove("active");
        }
    }

    updateNavVisibility();
    window.addEventListener("resize", updateNavVisibility);

    navShowButton.addEventListener("click", function () {
        nav.classList.add("show");
        navShowButton.style.display = "none";
        blurOverlay.classList.add("active");
    });

    navHideButton.addEventListener("click", function () {
        nav.classList.remove("show");
        navShowButton.style.display = "inline-block";
        blurOverlay.classList.remove("active");
    });

    blurOverlay.addEventListener("click", function () {
        nav.classList.remove("show");
        navShowButton.style.display = "inline-block";
        blurOverlay.classList.remove("active");
    });
});
