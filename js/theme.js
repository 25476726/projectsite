document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');

  const currentTheme = localStorage.getItem('theme'); 

  if (currentTheme) {
      document.body.classList.add(currentTheme);
  }

  toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      
      if (document.body.classList.contains('dark-mode')) { /*saves last theme from previous use and applys it if there is one*/
          localStorage.setItem('theme', 'dark-mode');
      } else {
          localStorage.removeItem('theme');
      }
  });
});
