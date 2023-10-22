$(function() {
  let $btn = $('#wrap_dining .offers_gnb li')

  $btn.eq(0).on('click', function() {
    $('.dining_all').removeClass('dining_on')
    $('#dining-main').addClass('dining_on')
  })
  $btn.eq(1).on('click', function() {
    $('.dining_all').removeClass('dining_on')
    $('#dining-garden').addClass('dining_on')
  })
  $btn.eq(2).on('click', function() {
    $('.dining_all').removeClass('dining_on')
    $('#dining-csl').addClass('dining_on')
  })
})

var swiper = new Swiper(".room_swiper .swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".csl_swiper .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});