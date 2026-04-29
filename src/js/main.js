// Mobile hamburger
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

// Active nav link on scroll
const sections = document.querySelectorAll('section[id], .hero[id]');
const navAs    = document.querySelectorAll('.nav-links > li > a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 80) current = s.id; });
  navAs.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

// Donate amount selector
document.querySelectorAll('.amount-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Contact form
function handleForm(e) {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you shortly.');
  e.target.reset();
}
