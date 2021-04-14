'use strict'

const imgs = {
  "lip" : ["best01.jpg", "best02.jpg","best03.jpg", "best04.jpg", "best05.jpg"],
}

$(function(){
  // 색상 클릭시 해당 색상의 이름으로 변경, 
  //색상 이름으로 텍스트 변경
  $(".glow_color > div").click(function(){
  let swatch = $(this);
  let name = swatch.attr("data-name");
  let hex = swatch.attr("data-color");
  let color = $(".color_name0");
  color.css("color", hex);
  color.text(name);
  
  // 해당 색상의 컬러 이미지로 변경
  let no=$(this).index();
  $(".imgBox0 img").attr("src", "../imgs/bestseller/"+imgs.lip[no]);
  });

  // hover하면 리스트 커지게 
  $('.best-items').hover(function(){
    $(this).stop().addClass('onhover');
  }, function(){
    $(this).stop().removeClass('onhover');
  });


  
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
}); //jQuery end


window.onload = function() {
  const navBtn = document.querySelector('.navigator');
  navBtn.addEventListener('click', function(e){
    const target = e.target
    const link = target.dataset.link;
    //data-link="값" 선언, 찾기
    if (link ===null) {
      return;
      //다른 곳을 클릭해서 링크가 비어있다면 아무것도 하지 않음.
    }
    // console.log(e.target.dataset.link);
    const scrollTo = document.querySelector(link);
    //data-link값을 받아와서 보여지도록 함
    scrollTo.scrollIntoView({behavior:'smooth'});
  });

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
