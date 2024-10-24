
// navbar script
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('animate-slide-down');
});

//animated types
var typed = new Typed('.animasi', {
    strings: ['Student', 'Programmer Newbie'],
    typeSpeed: 100,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
  });