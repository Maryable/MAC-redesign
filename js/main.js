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

  let swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // new collcetion button click === move one by one
  let count = 0;
  $("#new-right").on("click", function(){
    if(count<3){
        count++;
        $(".new-collection-imgs").animate({"left":"-=390px"},500);
    } 
});

$("#new-left").on("click", function(){
  if(count>0){
      count--;
      $(".new-collection-imgs").animate({"left":"+=390px"},500);
  } 
});



}); //jQuery end

