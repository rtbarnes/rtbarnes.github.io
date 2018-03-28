$(document).ready(function() {

  $("html").css("height", $(window).height() * 2);
  $(".about").css("top", $(window).height());


  $(".title-text").delay(750).animate({top: "20px", opacity: "1"}, 750);
  $(".navbar").delay(750).animate({top: "145px", opacity: "1"}, 850);

  $(".navbar li a").hover(function() {
    $(this).animate({color: "#000"}, 100);
  },
  function() {
    $(this).animate({color: "#fff"}, 100);
  });

  $("a[href='#about']").click(function(){
    $("html, body").animate({
      scrollTop: $(".about").css("top")
    }, 2000);
  });

  var snapTop = false;
  $(document).scroll(function() {
    if($(document).scrollTop() > 130 && !snapTop) {
        $(".navbar").css({"top":"0","position":"fixed","margin":"15px auto","left":"0","right":"0"});
        snapTop = true;
    }// this should be the same height as first animation
    else if($(document).scrollTop() < 130 && snapTop) {
      $(".navbar").css({"position":"absolute", "top":"145px", "margin":"0 auto"});
      snapTop = false;
    }
  });
});
