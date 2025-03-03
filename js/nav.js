document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("nav");
    const toggleButton = document.getElementById("navshow");

    toggleButton.addEventListener("click", function () {
        nav.classList.toggle("hidden");
    });
});