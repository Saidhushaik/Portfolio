function revealOnScroll() {
  const sections = document.querySelectorAll("section");
  sections.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

function highlightMenu() {
  const sections = document.querySelectorAll("section");
  const scrollY = window.scrollY;
  let activeSet = false;

  sections.forEach((sec) => {
    const id = sec.getAttribute("id");
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const btn = document.querySelector(`button[data-scroll="${id}"]`);
    if (scrollY >= offset && scrollY < offset + height) {
      document.querySelectorAll('header nav button').forEach(btn => btn.classList.remove('active'));
      if (btn) {
        btn.classList.add('active');
        activeSet = true;
      }
    }
  });

  if (!activeSet) {
    document.querySelectorAll('header nav button').forEach(btn => btn.classList.remove('active'));
  }
}

// Smooth scroll on button click
document.querySelectorAll('button[data-scroll]').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-scroll');
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
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