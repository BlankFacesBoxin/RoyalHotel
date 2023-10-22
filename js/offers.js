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
//gnb 스크롤
/* let $reserve = $('.reserve')
let reserveTop = Math.floor($reserve.offset().top);

$(window).scroll(function() {
  let i = Math.floor($(this).scrollTop())
  if (reserveTop < i) { //headerTop 200보다 i(스크롤양)가 더 크면
    $reserve.addClass('on2')
  }
  else {
    $reserve.removeClass('on2')
  }
}) */
//예약 버튼 클릭
/* $('#wing_btn .last_wing').on('click', function() {
  $('.reserve.on2').slideToggle(400)
  $("#wing_btn .last_wing p").fadeOut(function (){
    $("#wing_btn .last_wing p").text(($("#wing_btn .last_wing p").text() == "예약") ? "숨기기" : "예약").fadeIn();
  })
  $(this).toggleClass('down')
}) */
//달력 스크롤
$("#startDay, #endDay").datepicker({
  changeMonth: true,
  changeYear: true,
  showMonthAfterYear: true,
  dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
  dateFormat:'yy-mm-dd',
})

$('#startDay').datepicker("option", "maxDate", $("#endDay").val());
$('#startDay').datepicker("option", "onClose", function (selectedDate){
  $("#endDay").datepicker( "option", "minDate", selectedDate);
});

$('#endDay').datepicker();
$('#endDay').datepicker("option", "minDate", $("#startDay").val());
$('#endDay').datepicker("option", "onClose", function (selectedDate){
  $("#startDay").datepicker("option", "maxDate", selectedDate );
}); 
$('#startDay').datepicker('setDate', 'today');
$('#endDay').datepicker('setDate', '+1D');
//달력

//swiper
var swiper = new Swiper(".mainSwiper .swiper-container", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".middleSwiper .swiper-container", {
  spaceBetween: 30,
  effect: "fade",
  /* navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }, */
});
//offers JS 
/*  let $liBtn = $('.offers_gnb li') */


$('.offers_gnb li').on('click', function() {
  let i = $(this).index();

  $('.offers_gnb li').removeClass('offers_on')
  $('.offers_gnb li').eq(i).addClass('offers_on')

  $('.offersReal').removeClass('offers_display')
  $('.offersReal').eq(i).addClass('offers_display')
})

//let $btn = ('.offers_1 .main_clickBtn a')


$('.offers_1 .main_clickBtn a:nth-child(3)').on('click', function() {
  $('.offers_1').css({
    display : 'none'
  })
  $('.offers_1-1').css({
    display : 'block'
  })
})
$('.offers_1-1 .main_clickBtn a:nth-child(2)').on('click', function() {
  $('.offers_1').css({
    display : 'block'
  })
  $('.offers_1-1').css({
    display : 'none'
  })
})
$('.offers_2 .main_clickBtn a:nth-child(3)').on('click', function() {
  $('.offers_2').css({
    display : 'none'
  })
  $('.offers_2-1').css({
    display : 'block'
  })
})
$('.offers_2-1 .main_clickBtn a:nth-child(2)').on('click', function() {
  $('.offers_2').css({
    display : 'block'
  })
  $('.offers_2-1').css({
    display : 'none'
  })
})
});