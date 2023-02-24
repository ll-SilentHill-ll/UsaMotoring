const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 55,
  loop:true,
  navigation: {
    nextEl: '.slider_arrow_right',
    prevEl: '.slider_arrow_left',
  },

  breakpoints: {
   // when window width is >= 320px
   320: {
     loop:true,
     slidesPerView: 1,
     spaceBetween: 140
   },
 },

});

new Swiper('.partnersslider', {
  slidesPerView: 5,
  spaceBetween: 55,
  loop:true,
  autoplay: {
    delay: 1400,
    disableOnInteracrion: true,
  },

  breakpoints: {
   // when window width is >= 320px
   320: {
     slidesPerView: 2,
     spaceBetween: 40
   },
 },

});

new Swiper('.reviews__slider', {
  slidesPerView: 3,
  spaceBetween: 40,
  loop:true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
   // when window width is >= 320px
   320: {
     slidesPerView: 1,
     spaceBetween: 140
   },
 },

  navigation: {
    nextEl: '.review_arrow_r',
    prevEl: '.review_arrow_l',
  },

});
