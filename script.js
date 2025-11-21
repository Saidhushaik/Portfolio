// Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Fade-in animation for cards
const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
  card.style.opacity = 0;
  card.style.transform = "translateY(30px)";
  setTimeout(() => {
    card.style.transition = "0.8s ease";
    card.style.opacity = 1;
    card.style.transform = "translateY(0)";
  }, index * 180);
});
