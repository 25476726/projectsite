window.addEventListener('load', () => { //AUTO START AT BOTTOM OF PAGE
    requestAnimationFrame(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  });
  //SCROLL WARNING CODE
  let warningVisible = false;
  let touchStartY = 0;
  
  // Desktop: Show warning at bottom when scrolling DOWN
  window.addEventListener("wheel", (e) => {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  
    if (scrollTop >= maxScroll - 5 && e.deltaY > 0 && !warningVisible) {
      showScrollWarning();
    }
  });
  
  // Mobile: Touch swipe down at bottom of page
  window.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
  });
  
  window.addEventListener("touchmove", (e) => {
    const touchCurrentY = e.touches[0].clientY;
    const direction = touchStartY - touchCurrentY;
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  
    // If user swipes down (direction < 0) while already at the bottom
    if (scrollTop >= maxScroll - 5 && direction > 0 && !warningVisible) {
      showScrollWarning();
    }
  });
  
  // Reusable function
  function showScrollWarning() {
    const warning = document.querySelector(".scroll-warning");
    if (warning) {
      warning.classList.add("show");
      warningVisible = true;
      setTimeout(() => {
        warning.classList.remove("show");
        warningVisible = false;
      }, 3000);
    }
  }
  
  