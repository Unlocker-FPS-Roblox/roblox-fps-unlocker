
// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // FAQ functionality
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle the current FAQ item
      item.classList.toggle('active');
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Mobile navigation toggle
  const mobileBreakpoint = 768;
  
  function checkScreenSize() {
    if (window.innerWidth <= mobileBreakpoint) {
      const nav = document.querySelector('nav');
      const header = document.querySelector('header');
      
      if (!document.querySelector('.mobile-menu-toggle')) {
        // Create mobile menu toggle button
        const toggleButton = document.createElement('button');
        toggleButton.className = 'mobile-menu-toggle';
        toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
        header.querySelector('.container').insertBefore(toggleButton, nav);
        
        // Add event listener to toggle button
        toggleButton.addEventListener('click', () => {
          nav.classList.toggle('active');
          toggleButton.classList.toggle('active');
          
          if (toggleButton.classList.contains('active')) {
            toggleButton.innerHTML = '<i class="fas fa-times"></i>';
          } else {
            toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
          }
        });
      }
    }
  }
  
  // Check screen size on load and resize
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
  
  // Add animation to features section
  const featureCards = document.querySelectorAll('.feature-card');
  
  function checkScroll() {
    featureCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.8;
      
      if (cardTop < triggerPoint) {
        card.classList.add('revealed');
      }
    });
  }
  
  // Initial check and add scroll event listener
  checkScroll();
  window.addEventListener('scroll', checkScroll);
});
