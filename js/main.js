
// show "arrow-up" button when scrolling down
const home = document.querySelector('.main-sldie-container');
const homeHeight = home.getBoundingClientRect().height;
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if(window.scrollY> homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});


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

  let swiper1 = new Swiper('.main-slide', {
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
        $('.new-collection-imgs').animate({'left':'-=370px'},500);
    } 
  });

  $("#new-left").on("click", function(){
    if(count>0){
        count--;
        $('.new-collection-imgs').animate({'left':'+=370px'},500);
    } 
  });

  // best seller slide
  $('#best-right').on("click", function(){
    if(count < 4){
        count++;
        $('.best-seller-imgs').animate({'left':'-=390px'},500);
      } 
  });

  $('#best-left').on("click", function(){
    if(count > 0){
        count--;
        $('.best-seller-imgs').animate({'left':'+=390px'},500);
    } 
  });

    // must have slide
    $('.must-right').on("click", function(){
      if(count < 4){
          count++;
          $('.must-have-imgs').animate({'left':'-=390px'},500);
        } 
    });
  
    $('.must-left').on("click", function(){
      if(count > 0){
          count--;
          $('.must-have-imgs').animate({'left':'+=390px'},500);
      } 
    });

  $('.best-seller-btn').on('click', function(){
    $('.best-seller-imgs').animate({'left':'0px'});
    $('.best-seller-btn').addClass('active');
    $('.must-have-btn').removeClass('active');
    $('.must-have-imgs').css('opacity','0');
    $('.best-seller-imgs').css('opacity','1');
  });

  $('.must-have-btn').on('click', function(){
    $('.tab-menu-list').animate({'left':'0px'});
    $('.must-have-btn').addClass('active');
    $('.best-seller-btn').removeClass('active');
    $('.must-have-imgs').css("opacity","1");
    $('.best-seller-imgs').css("opacity","0");
  });

  $('#full-slide').slick({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay:true,
  });

  $('.slick-arrow').hide();

  // 클릭 시 페이지 변경
  let no = 0;
  $('.sub').on("click", function(){
    no=$(this).attr("id").substr(3, 1);
    alert(no)
    $(".page").hide();
    // $(".at1_bg").show();
    $(".page"+no).show();

});



}); //jQuery end
