$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 30){
      $("body").addClass("sticky-header");
    }else{
      $("body").removeClass("sticky-header");
    }
  })
})
$(function(){
        $("#Home").click(function(){
          $("#section_01").show(100);
          $("#section_02").hide();
          $("#section_03").hide();
        });
        $("#About").click(function(){
          $("#section_01").hide();
          $("#section_02").show();
          $("#section_03").hide();
        });
        $("#Sign").click(function(){
          $("#section_01").hide();
          $("#section_02").hide();
          $("#section_03").show();
        });
})