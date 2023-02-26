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

   760: {
     loop:true,
     slidesPerView: 2,

   },

   1250: {
     loop:true,
     slidesPerView: 3,

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
     loop:true,
     slidesPerView: 2,
     spaceBetween: 40
   },

   760: {
     loop:true,
     slidesPerView: 4,

   },

   1024: {
     loop:true,
     slidesPerView: 5,

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
     loop:true,
     slidesPerView: 1,
     spaceBetween: 140,
   },

   760: {
     loop:true,
     slidesPerView: 2,

   },

   1250: {
     slidesPerView: 3,
     spaceBetween: 40,
     loop:true,
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
       dynamicBullets: true,
     },

   },
 },

  navigation: {
    nextEl: '.review_arrow_r',
    prevEl: '.review_arrow_l',
  },

});
