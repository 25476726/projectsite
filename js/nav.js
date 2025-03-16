document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("nav");
    const navShowButton = document.getElementById("navshow");
    const navHideButton = document.getElementById("navhide");

    // Initially, ensure the button is showing if nav is hidden
    if (!nav.classList.contains("hidden")) {
        navShowButton.style.display = "none";  // Hide button when nav is visible
    }

    // Toggle the nav visibility when Show Nav button is clicked
    navShowButton.addEventListener("click", function () {
        nav.classList.toggle("hidden");  // Toggle the hidden class on nav

        // Show or hide the button based on the nav state
        if (nav.classList.contains("hidden")) {
            navShowButton.style.display = "inline-block";  // Show button when nav is hidden
        } else {
            navShowButton.style.display = "none";  // Hide button when nav is visible
        }
    });

    // Hide the nav when Hide Nav button is clicked (inside the nav)
    navHideButton.addEventListener("click", function () {
        nav.classList.add("hidden");  // Add the 'hidden' class to hide the nav
        navShowButton.style.display = "inline-block";  // Show the Show Nav button
    });
});
