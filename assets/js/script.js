'use strict';

const $navbar = document.querySelector('[data-navbar]');
const $navToggler = document.querySelector('[data-nav-toggler]');
const $header = document.querySelector('[data-header]');
const $toggleBtns = document.querySelectorAll('[data-toggle-btn]');

//////////////////////////
// Navbar toggle in mobile
$navToggler.addEventListener('click', function () {
  $navbar.classList.toggle('active');
});

//////////////////////////
/// Header scroll state
window.addEventListener('scroll', () => {
  $header.classList[window.scrollY > 50 ? 'add' : 'remove']('active');
});

//////////////////////////
/// Add to favorite button toggle
$toggleBtns.forEach($toggleBtn => {
  $toggleBtn.addEventListener('click', function () {
    $toggleBtn.classList.toggle('active');
  });
});
