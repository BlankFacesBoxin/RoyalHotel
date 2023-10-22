$(function() {
  let $btn = $('#wrap_dining .offers_gnb li')

  $btn.eq(0).on('click', function() {
    $('.wellness_all').removeClass('well_on')
    $('#wellness_main').addClass('well_on')
  })
  $btn.eq(1).on('click', function() {
    $('.wellness_all').removeClass('well_on')
    $('#wellness_gym').addClass('well_on')
  })


  $('.offers_gnb li').on('click', function() {
    let i = $(this).index();
  
    $('.offers_gnb li').removeClass('offers_on')
    $('.offers_gnb li').eq(i).addClass('offers_on')
  })
})

var swiper = new Swiper(".csl_swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});