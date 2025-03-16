// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get the button element
  const toggleButton = document.getElementById('theme-toggle');

  // Check if there's a stored theme in localStorage
  const currentTheme = localStorage.getItem('theme');

  // If a theme is stored, apply it
  if (currentTheme) {
      document.body.classList.add(currentTheme);
  }

  // Function to toggle dark/light mode
  toggleButton.addEventListener('click', () => {
      // Toggle the class on the body
      document.body.classList.toggle('light-mode');
      
      // Save the current theme to localStorage (so it persists on page reload)
      if (document.body.classList.contains('light-mode')) {
          localStorage.setItem('theme', 'light-mode');
      } else {
          localStorage.removeItem('theme');
      }
  });
});
