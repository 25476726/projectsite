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
  
    //Initially hide nav on page load
    hideNav();
  
    navShowButton.addEventListener("click", showNav);
  
    navHideButton.addEventListener("click", hideNav);
  });
  