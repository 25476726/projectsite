document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');

  const currentTheme = localStorage.getItem('theme'); 

  if (currentTheme) {
      document.body.classList.add(currentTheme);
  }

  toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      
      if (document.body.classList.contains('light-mode')) { /*saves last theme from previous use and applys it if there is one*/
          localStorage.setItem('theme', 'light-mode');
      } else {
          localStorage.removeItem('theme');
      }
  });
});
