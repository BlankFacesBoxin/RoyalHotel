$(function() {
  $('.offers_gnb li:first-child').on('click', function() {
    $('.room_all > div').removeClass('room_on')
    $('.room_all > div:first-child').addClass('room_on')
    $('#room_csl .room_firstArea').removeClass('room_on')
    $('#room_csl').css({
      display : 'none'
    })
  })
  $('.offers_gnb li:nth-child(2)').on('click', function() {
    $('.room_all > div').removeClass('room_on')
    $('#room_premier').addClass('room_on')
    $('#room_csl .room_firstArea').removeClass('room_on')
    $('#room_csl').css({
      display : 'none'
    })
  })
  $('.offers_gnb li:nth-child(3)').on('click', function() {
    $('.room_all > div').removeClass('room_on')
    $('#room_suite').addClass('room_on')
    $('#room_csl .room_firstArea').removeClass('room_on')
    $('#room_csl').css({
      display : 'none'
    })
  })
  $('.offers_gnb li:nth-child(4)').on('click', function() {
    $('.room_all > div').removeClass('room_on')
    $('#room_csl .room_firstArea').addClass('room_on')
    $('#room_csl').css({
      display : 'block'
    })
  })
})

var swiper = new Swiper(".room_swiper", {
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