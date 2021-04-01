$(function(){
  //when window width===1198, show mobile header
  $('.nav__menu__mobile').hide();
  $('.hamburger__bar').click(function(){
    $(this).toggleClass("open");
    $('.nav__menu__mobile').stop().animate({width:"toggle"},400);
  });

  // main-menu hover == sub-menu down
  $('.sub-parent2').hover(function(){
    $('.skin-sub-wrap').stop().slideDown();
  }, function(){
    $('.skin-sub-wrap').stop().slideUp();
  });

  $('.sub-parent1').hover(function(){
    $('.makeup-sub-wrap').stop().slideDown();
  }, function(){
    $('.makeup-sub-wrap').stop().slideUp();
  });

  // when login icon hover, show login pop up
  $('.login-btn').hover(function(){
    $('.login-hover').stop().show(400);
  }, function(){
    $('.login-hover').stop().hide(400);
  });


});