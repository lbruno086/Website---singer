// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Fade-up on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 90);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Music card play button
document.querySelectorAll('.music-card').forEach(card => {
  card.addEventListener('click', function () {
    const title = this.querySelector('h3')?.textContent || 'Album';
    const btn = this.querySelector('.btn');
    if (btn && !btn.classList.contains('streaming')) {
      btn.classList.add('streaming');
      const orig = btn.textContent;
      btn.textContent = '▶ Playing';
      btn.style.background = '#C8A96E';
      btn.style.color = '#000';
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.style.color = '';
        btn.classList.remove('streaming');
      }, 2500);
    }
  });
});

// Email newsletter form
const form = document.querySelector('.cta-form');
if (form) {
  form.addEventListener('submit', e => e.preventDefault());
  const joinBtn = form.querySelector('.btn');
  const input = form.querySelector('.email-input');
  if (joinBtn && input) {
    joinBtn.addEventListener('click', () => {
      if (!input.value.includes('@')) return;
      joinBtn.textContent = '✓ Joined';
      joinBtn.style.background = '#C8A96E';
      joinBtn.style.color = '#000';
      input.value = '';
      input.placeholder = 'You\'re in. Watch your inbox.';
      setTimeout(() => {
        joinBtn.textContent = 'Join';
        joinBtn.style.background = '';
        joinBtn.style.color = '';
        input.placeholder = 'your@email.com';
      }, 3500);
    });
  }
}

// Parallax hero
window.addEventListener('scroll', () => {
  const heroBg = document.querySelector('.hero-bg img');
  if (heroBg && window.scrollY < window.innerHeight) {
    heroBg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  }
}, { passive: true });
