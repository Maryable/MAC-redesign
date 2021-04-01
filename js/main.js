$(function(){
  //when window width===1198, show mobile header
  $('.nav__menu__mobile').hide();
  $('.hamburger__bar').click(function(){
    $(this).toggleClass("open");
    $('.nav__menu__mobile').stop().animate({width:"toggle"},400);
  });

  // main-menu hover == sub-menu down
  $('.sub-parent2').hover(function(){
    $('.skin-sub-wrap').stop().slideDown(600);
  }, function(){
    $('.skin-sub-wrap').stop().slideUp(300);
  });

  $('.skin-sub-wrap').hover(function(){
    $('.skin-sub-wrap').stop().show();
  }, function(){
    $('.skin-sub-wrap').stop().slideUp(300);
  });

  $('.sub-parent1').hover(function(){
    $('.makeup-sub-wrap').stop().slideDown(600);
  }, function(){
    $('.makeup-sub-wrap').stop().slideUp(300);
  });

  $('.makeup-sub-wrap').hover(function(){
    $('.makeup-sub-wrap').stop().show();
  }, function(){
    $('.makeup-sub-wrap').stop().slideUp(300);
  });


  // when login icon hover, show login pop up
  $('.login-btn').hover(function(){
    $('.login-hover').stop().fadeIn(400);
  }, function(){
    $('.login-hover').stop().fadeOut(250);
  });

  $('.cart-btn').hover(function(){
    $('.cart-hover').stop().fadeIn(400);
  }, function(){
    $('.cart-hover').stop().fadeOut(250);
  });

});