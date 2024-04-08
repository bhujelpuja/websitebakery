// Smooth scroll functionality for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const sectionId = this.getAttribute('href');
      const targetSection = document.querySelector(sectionId);
      
      window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjust offset as needed
        behavior: 'smooth'
      });
    });
  });