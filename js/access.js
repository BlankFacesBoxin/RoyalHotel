$(function() {
  $('.gnb li').on('mouseover', function() {
  $(this).children('ul').fadeIn(100);
  $(this).siblings().children('ul').stop().fadeOut(100);
})
  $('.gnb li').on('mouseleave', function() {
  $(this).children('ul').stop().fadeOut(100);
})
//gnb 메뉴바
  $('.main_lang').on('click', function() {
  $(this).siblings('.under_lang').stop().slideToggle();
})
//언어변경
  $('.menu_area').on('click', function() {
    $('.menu').stop().fadeIn();
  })
  $('.menu_exit').on('click', function() {
    $('.menu').stop().fadeOut()
  })
//gnb 메뉴
let $header = $('header')
let headerTop = Math.floor($header.offset().top);

$(window).scroll(function() {
  let i = Math.floor($(this).scrollTop())
  if (headerTop < i) { //headerTop 200보다 i(스크롤양)가 더 크면
    $header.addClass('on')
  }
  else {
    $header.removeClass('on')
  }
})
$('.offers_gnb li').on('click', function() {
  let i = $(this).index();

  $('.offers_gnb li').removeClass('offers_on')
  $('.offers_gnb li').eq(i).addClass('offers_on')

  $('.offersReal').removeClass('offers_display')
  $('.offersReal').eq(i).addClass('offers_display')
})
$('.offers_gnb li:first-child').on('click', function() {
  $('.loca_attraction').css({
    display : 'none'
  })
  $('.acc_loca').css({
    display : 'block'
  })
})
$('.offers_gnb li:last-child').on('click', function() {
  $('.loca_attraction').css({
    display : 'block'
  })
  $('.acc_loca').css({
    display : 'none'
  })
})
})
