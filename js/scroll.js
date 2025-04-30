window.addEventListener('load', () => { //AUTO START AT BOTTOM OF PAGE
    requestAnimationFrame(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  });
  //SCROLL WARNING CODE
  let warningVisible = false;
let touchStartY = 0;

// --- Desktop: Show warning when scrolling DOWN at the visual bottom ---
window.addEventListener("wheel", (e) => {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  // If user is at the visual bottom (max scroll) and tries to scroll DOWN
  if (scrollTop >= maxScroll - 5 && e.deltaY > 0 && !warningVisible) {
    showScrollWarning();
  }
});

// --- Mobile: Touch swipe down at the visual bottom ---
window.addEventListener("touchstart", (e) => {
  touchStartY = e.touches[0].clientY; // Get the initial touch position
});

window.addEventListener("touchmove", (e) => {
  const touchCurrentY = e.touches[0].clientY;
  const direction = touchStartY - touchCurrentY; // Check swipe direction
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  // If user is at the bottom and swipes down (direction < 0)
  if (scrollTop >= maxScroll - 5 && direction < -10 && !warningVisible) {
    showScrollWarning();
  }
});

// Reusable function to show the scroll-up warning
function showScrollWarning() {
  const warning = document.querySelector(".scroll-warning");
  if (warning) {
    warning.classList.add("show");
    warningVisible = true;
    setTimeout(() => {
      warning.classList.remove("show");
      warningVisible = false;
    }, 3000); // Show the message for 3 seconds
  }
}
