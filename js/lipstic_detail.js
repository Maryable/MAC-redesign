const color_chart = {
  "lip_text" : ["드라마라마", "블룸박스","무디블룸"],
  "lip_color" : ["#F41D49", "#F64A47","#B11F22"],
  "lip_thumb1" :["black_cherry1.jpg", "black_cherry11.jpg", "black_cherry_thumb3.jpg"],
  "lip_thumb2" :["black_cherry2.jpg", "black_cherry22.jpg", "black_cherry_thumb3.jpg",],
  "lip_thumb3" :["black_cherry3.jpg", "black_cherry33.jpg", "black_cherry_thumb3.jpg",],
  "lipstic_img" :["black_cherry_big1.jpg","black_cherry_big2.jpg","black_cherry_big3.jpg"]
}

$(function(){
  // 옵션 선택
  $(".default_option").click(function(){
    $(this).parent().toggleClass("active");
  })
  
  $(".select_ul li").click(function(){
    let currentelem = $(this).html();
    $(".default_option li").html(currentelem);
    $(this).parents(".select_wrap").removeClass("active");
  });

  $('.color__pallet > div:nth-child(1)').on('click', function(){
    for(let i=0; i<color_chart.lip_thumb1.length; i++) {
      $(".thumbnails > li:eq("+i+")").css("background","url(./imgs/"+color_chart.lip_thumb1[i]+") no-repeat")
      .css("backgroundSize", "100% 100%");
      $("#big_img").css("background", "url(./imgs/black_cherry1.jpg) center/cover no-repeat");
    }
  });

  $('.color__pallet > div:nth-child(2)').on('click', function(){
    for(let i=0; i<color_chart.lip_thumb2.length; i++) {
      $(".thumbnails > li:eq("+i+")").css("background","url(./imgs/"+color_chart.lip_thumb2[i]+") no-repeat")
      .css("backgroundSize", "100% 100%");
      $("#big_img").css("background","url(./imgs/black_cherry2.jpg) center/cover no-repeat");
    }
  });

  $('.color__pallet > div:nth-child(3)').on('click', function(){
    for(let i=0; i<color_chart.lip_thumb3.length; i++) {
      $(".thumbnails > li:eq("+i+")").css("background","url(./imgs/"+color_chart.lip_thumb3[i]+") no-repeat")
      .css("backgroundSize", "100% 100%");
      $("#big_img").css("background", "url(./imgs/black_cherry3.jpg) center/cover no-repeat");
    }
  });
  
    //썸네일을 누르면 큰 이미지에 보여짐
  $('.thumbnails > li').on('click', function(){
    no=$(this).index();
    $(".big_img>img").attr("src", "../imgs"+color_chart.lip_thumb1[no]);
  });

  //컬러 박스를 클릭하면 텍스트와 해당 색상으로 변경
  $('.color__pallet > div').on('click', function(){
    no=$(this).index();
    $(".option-name").html(color_chart.lip_text[no]).css("color",color_chart.lip_color[no] );
  });

  $('.add-cart-btn').on('click', function(){
    alert('장바구니에 담았습니다.')
  });

   //비디오 팝업 클릭이벤트
   $('.play-btn').click(function () {
    $('.video-overlay').show();

    setTimeout(function () {
      $('.video-overlay').find('.loader').hide();
      $('.video-overlay').find('.video-box').show();
    }, 2000);
  });//video-bg click event end

  $('.video-box i').click(function () {
    $('.video-overlay').fadeOut();
  });

  // 상품 상세정보 탭
  $(".description > .showing").show();
  let $desc_tab = $(".desc-tap li");
  $desc_tab.on('click', function(){
    let idx = $(this).index();
    $(".desc-tap li").removeClass("showing");
    $(".desc-tap li").eq(idx).addClass("showing");
    $(".description > div").hide();
    $(".description > div").eq(idx).show();
  });

});

