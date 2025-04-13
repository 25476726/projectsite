document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("nav");
    const navShowButton = document.getElementById("navshow");
    const navHideButton = document.getElementById("navhide");
  
    function hideNav() {
      nav.classList.remove("show");
      nav.classList.add("hidden");
      navShowButton.style.display = "inline-block";
    }
  
    function showNav() {
      nav.classList.add("show");
      navShowButton.style.display = "none";
    }
  
    // Always start hidden
    hideNav();
  
    // Show nav on button click
    navShowButton.addEventListener("click", showNav);
  
    // Hide nav on button click
    navHideButton.addEventListener("click", hideNav);
  });
  