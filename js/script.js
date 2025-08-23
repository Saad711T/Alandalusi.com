// script.js
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('active'));
}

// تمييز الرابط النشط أثناء التمرير (اختياري)
const links = document.querySelectorAll('.nav a[href^="#"]');
const sections = Array.from(links).map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

window.addEventListener('scroll', () => {
  const pos = window.scrollY + 120; // هامش أسفل الهيدر
  let current;
  for (const sec of sections) {
    if (pos >= sec.offsetTop) current = sec.id;
  }
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
});
