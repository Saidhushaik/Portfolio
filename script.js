// Scroll reveal effect
function revealOnScroll() {
  const sections = document.querySelectorAll("section");
  sections.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

// Active nav highlight
function highlightMenu() {
  const sections = document.querySelectorAll("section");
  const scrollY = window.scrollY;
  sections.forEach((sec) => {
    const id = sec.getAttribute("id");
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const btn = document.querySelector(`button[data-scroll="${id}"]`);
    if (scrollY >= offset && scrollY < offset + height) {
      document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
      if (btn) btn.classList.add('active');
    }
  });
}

// Button click scroll
document.querySelectorAll('button[data-scroll]').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-scroll');
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('scroll', () => {
  revealOnScroll();
  highlightMenu();
});

window.addEventListener('DOMContentLoaded', () => {
  revealOnScroll();
  highlightMenu();
});