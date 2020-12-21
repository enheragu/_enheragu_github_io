// ----------------------- NAV ----------------------- //
$(function() {
    var win = $(window);
    var head = $("header");
  
    // Links
    // $("nav a").click(function(event) {
    //   event.preventDefault();
    //   var margintop = parseInt($("section").css("marginTop"), 10) - 170;
    //   var position =
    //     $("#detail-" + event.target.id.split("-")[1]).position().top -
    //     margintop -
    //     30;
    //   $("html, body").animate({ scrollTop: position });
    // });
  
    // Header hide/show on scroll
    win.onscroll(function(event) {
      if (win.scrollTop() < 90) {
        head.css("top", -win.scrollTop() + "px");
      } else {
        head.css("top", "-800px");
      }
    });
  });