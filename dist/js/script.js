const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');

const navTop = document.querySelector('.header__top');
const navBottom = document.querySelector('.header__bottom');

const mobileMenuToggle = function () {
  navTop.classList.toggle('active');
  navBottom.classList.toggle('active');
  hamburger.classList.toggle('hidden');
  close.classList.toggle('hidden');
};

hamburger.addEventListener('click', () => {
  mobileMenuToggle();
});

close.addEventListener('click', () => {
  mobileMenuToggle();
});
