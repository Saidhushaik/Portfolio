function revealOnScroll() {
  const animatedItems = document.querySelectorAll('.animate');
  let delay = 0;

  animatedItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60 && !item.classList.contains('visible')) {
      setTimeout(() => {
        item.classList.add('visible');
      }, delay);
      delay += 150;
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for your message!");
  this.reset();
});