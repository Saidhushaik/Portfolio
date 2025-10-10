// Initialize AOS animations
AOS.init({
  duration: 800, // Set animation duration
  easing: 'ease-in-out', // Set animation easing type
  once: true, // Trigger animation once when it comes into view
});

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    
    // Smoothly scroll to the targeted section
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Optional: Add an event listener for resize if you want to handle specific changes dynamically (for example, handling sticky navbars).
window.addEventListener('resize', function() {
  // Handle window resize actions here (if needed)
});