const itemList= {
  "lip_text":["유어 버긴', 레이디 ","카인다 쏘어-타","웍, 웍, 웍","테디 2.0","브릭쓰루", 
  "듀보넷 버즈","턴 투 더 레프트","쉬어 아웃트레지", "마라케쉬-미어", "디보티드 투 칠리", 
  "스테이 큐리어스","어 리틀 템드","래스팅 패션", "만다린 오","스타일 쇼크드!",
  "쇼킹 레블레이션","폴 인 러브", "벨벳 펀치","멀 잇 오버", "설트리 무브", "마이 트위디", 
  "서트리니스","버닝 러브", "임펄시브","스캐터드 페탈", "섹시, 벗 스위트","라이픈드",
  "피 포 포텐트", "레버런스"
  ],

  "lip_pallet":["#C61314","#975054","#BA0B08","#AC6259","#B65451", 
  "#953831","#5C362B","#DA5751", "#A2402C", "#AF3832", 
  "#BA3A39","#C13D4A","#CD0C27", "#E43D45","#E02F05",
  "#B51E3F","#FB236A", "#CD3669","#C76864", "#BC554E", "#EAA181", 
  "#D87C89","#833744", "#B26F54","#F78C82", "#F55F8C","#C78797",
  "#823B5B", "#D8716A"
  ],

  "best_img":[
    "best_seller_page1.jpg","best_seller_page2.jpg","best_seller_page3.jpg",
    "best_seller_page4.jpg","best_seller_page5.jpg","best_seller_page6.jpg"
  ],  
}

$(function(){
  let no=0;
  $(".next").on("click",function(){
    if(no<3){
        no++;
        $(".color-chart-list").animate({"left":"-=40px"},200);
      }
  });

  $(".prev").on("click",function(){
      if(no+1>0){
          no--;
          $(".color-chart-list").animate({"left":"+=40px"},200);
      }
  });

  for(let i=0; i<itemList.best_img.length; i++) {
      no=$(this).index();
      $(".imgBox > img:eq("+i+")").attr("src", "../imgs"+itemList.best_img[no]);
  };

  $(".color-chart-list li").on("click", function(){
    // 색상을 클릭하면 해당 색상의 이름으로 변경
      no=$(this).index();
      $(".ColorName").html(itemList.lip_text[no]);
      // $(".ColorName").css("color", itemList.lip_pallet[i]);
  });



}); //jQuery end