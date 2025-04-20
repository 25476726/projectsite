window.addEventListener('load', () => {
    requestAnimationFrame(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  });