window.addEventListener('load', () => { //AUTO START AT BOTTOM OF PAGE
    requestAnimationFrame(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  });
  //SCROLL WARNING CODE
  let warningVisible = false;
  let touchStartY = 0;
  //for scrolling on mouse
  window.addEventListener("wheel", (e) => {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  
    if (scrollTop >= maxScroll - 5 && e.deltaY > 0 && !warningVisible) {
      showScrollWarning();
    }
  });
//foir swiping on touch screens
  window.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
  });
  
  window.addEventListener("touchmove", (e) => {
    const touchCurrentY = e.touches[0].clientY;
    const direction = touchStartY - touchCurrentY;
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  
    if (scrollTop >= maxScroll - 5 && direction > 0 && !warningVisible) {
      showScrollWarning();
    }
  });
  
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
  
  