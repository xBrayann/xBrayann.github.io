// Smooth scroll to first section
function scrollToSection() {
  document.getElementById('openspec').scrollIntoView({ behavior: 'smooth' });
}

// Scroll progress bar
const progressBar = document.getElementById('progress-bar');
function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = progress + '%';
}

// Navbar shrink on scroll
const nav = document.querySelector('nav');
function updateNav() {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}

// Back to top button
const backToTop = document.getElementById('back-to-top');
function updateBackToTop() {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Unified scroll handler
window.addEventListener('scroll', () => {
  updateProgress();
  updateNav();
  updateBackToTop();
}, { passive: true });

// Intersection observer for reveal animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.hidden').forEach((el) => {
  observer.observe(el);
});

// Stagger card animations inside sections
document.querySelectorAll('.card, .step, .compare-card, .info-box').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 80 + 'ms';
});
