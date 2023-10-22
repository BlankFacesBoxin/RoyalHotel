$(function(){
  let $header = $('header');
  let $headerTop = $('header').height()


$(window).scroll(function() {  
  let i = Math.floor($(this).scrollTop())
  if ($headerTop < i) {
    $header.addClass('on')
  }
  else {
    $header.removeClass('on')
  }
})
  /* let $wing = $('.wings');
  let $wingTop = $('.wings').innerHeight();
  //console.log($wingTop)

  $(window).scroll(function() {  
    let i = Math.floor($(this).scrollTop())
    if ($wingTop < i) {
      $wing.addClass('wing_on')
    }
    else {
      $wing.removeClass('wing_on')
    }
  }) */
  
  let target = $('.map_area').offset().top;
  console.log(target)

  $('header ul li:first-child').on('click', function() {
    $('html').animate({
      scrollTop : 592.75
    },400)
  })
  $('header ul li:nth-child(2)').on('click', function() {
    $('html').animate({
      scrollTop : 1925.78125
    },400)
  })
  $('header ul li:nth-child(3)').on('click', function() {
    $('html').animate({
      scrollTop : 3304.453125
    },400)
  })
  $('header ul li:nth-child(4)').on('click', function() {
    $('html').animate({
      scrollTop : 5266.921875
    },400)
  })
  $('.wings span').on('click', function() {
    $('html').animate({
      scrollTop : 0
    },400)
  })
  $('#resIn').on('click', function() {
    $('.reserve_back').stop().fadeIn()
  })
  $('.res_com div:last-child').on('click', function() {
    $('.reserve_back').stop().fadeOut()
  })
})