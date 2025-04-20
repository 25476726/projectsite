document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("nav");
  const navShowButton = document.getElementById("navshow");
  const navHideButton = document.getElementById("navhide");

  function hideNav() {
    nav.classList.remove("show");
    nav.classList.add("hidden");
    navShowButton.style.display = "inline-block";

    // Allow page scroll when the nav is hidden
    document.body.classList.remove("no-scroll");

    // Scroll back to the bottom of the page when nav is hidden
    window.scrollTo(0, document.body.scrollHeight);
  }

  function showNav() {
    nav.classList.add("show");
    nav.classList.remove("hidden");
    navShowButton.style.display = "none";

    // Scroll to top when nav is shown
    window.scrollTo(0, 0);

    // Disable page scrolling when the nav is open
    document.body.classList.add("no-scroll");
  }

  // Initially hide nav on page load
  hideNav();

  navShowButton.addEventListener("click", showNav);
  navHideButton.addEventListener("click", hideNav);
});
