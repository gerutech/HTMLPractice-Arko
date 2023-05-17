const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');

const mobileMenu = document.querySelector('.mobile-menu');

const mobileMenuToggle = function () {
  mobileMenu.classList.toggle('active');
  hamburger.classList.toggle('hidden');
  close.classList.toggle('hidden');
};

hamburger.addEventListener('click', () => {
  mobileMenuToggle();
});

close.addEventListener('click', () => {
  mobileMenuToggle();
});

const hearts = document.querySelectorAll('.heart');

hearts.forEach(function (heart) {
  heart.addEventListener('click', function () {
    this.classList.toggle('clicked');
  });
});

//SWIPER
var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
    },
  },
});
