$('a[href^="#"]').click(function(){
  var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top}, 800);
  return false;
  });


window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu__list'),
  menuItem = document.querySelectorAll('.menu__item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu__list_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu__list_active');
      })
  })
})

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu__list_footer'),
  menuItem = document.querySelectorAll('.menu__item_footer'),
  hamburger = document.querySelector('.hamburger_footer');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu__list_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu__list_active');
      })
  })
})

$('.offer__slider').slick({
  dots: true,
  speed: 300,
/*   slidesToShow: 2, */
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  prevArrow: '<button type="button" class="slick-prev"><svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="specialist__shewron" d="M0.571289 6.99998C0.571289 6.78492 0.655322 6.56988 0.823035 6.40591L6.10325 1.24617C6.43914 0.917943 6.98372 0.917943 7.31948 1.24617C7.65523 1.57426 7.65523 2.10632 7.31948 2.43458L2.64725 6.99998L7.31931 11.5654C7.65506 11.8936 7.65506 12.4256 7.31931 12.7537C6.98356 13.0821 6.43898 13.0821 6.10309 12.7537L0.822872 7.59405C0.655132 7.43 0.571289 7.21496 0.571289 6.99998Z" fill="white" stroke="white"/></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.42871 6.99998C8.42871 6.78492 8.34468 6.56988 8.17697 6.40591L2.89675 1.24617C2.56086 0.917943 2.01628 0.917943 1.68052 1.24617C1.34477 1.57426 1.34477 2.10632 1.68052 2.43458L6.35275 6.99998L1.68069 11.5654C1.34494 11.8936 1.34494 12.4256 1.68069 12.7537C2.01644 13.0821 2.56102 13.0821 2.89691 12.7537L8.17713 7.59405C8.34487 7.43 8.42871 7.21496 8.42871 6.99998Z" fill="white" stroke="white"/></svg></button>',
});