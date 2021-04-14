$(function(){

  // 스킨케어 main-menu hover == sub-menu down
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
  
  // 메이크업 main-menu hover == sub-menu down
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

  let swiper = new Swiper('.main-slide', {
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
  $('.nextBtn').on("click", function(){
    if(count < 3){
        count++;
        $('.tab-menu-list').animate({'left':'-=380px'},500);
      } 
  });

  $('.prevBtn').on("click", function(){
    if(count > 0){
        count--;
        $('.tab-menu-list').animate({'left':'+=390px'},500);
    } 
  });

// New Collction wide slide 
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


}); //jQuery end


window.onload = function(){
  // show "arrow-up" button when scrolling down
  const homeHeight = window.innerHeight;
  const arrowUp = document.querySelector('.arrow-up');
  document.addEventListener('scroll', function(){
    if(window.scrollY > homeHeight / 2) {
      arrowUp.classList.add('visible');
    } else {
      arrowUp.classList.remove('visible');
    }
  });

  arrowUp.addEventListener('click', function(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  });

}

