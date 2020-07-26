$( document ).ready(function() {

  function checkScroll(){
    var startY = $('.background').height() * 1/3;

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
        $('.navbar-toggle').addClass("scrolled");
        $('.nav-links').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
        $('.navbar-toggle').removeClass("scrolled");
        $('.nav-links').removeClass("scrolled");
    }
  }
 
  if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
      checkScroll();
  });
  }

  $('#js-navbar-toggle').on('click', function() {
    if($('#js-navbar-toggle')){
      $('#js-menu').slideToggle(500);
    }
  });

});

$(document).ready(function() {
  var arrow = $("#arrow");
  function doAnimation()
  {
           arrow.effect( "bounce", {times:2}, 2500, doAnimation);
  }
  
  doAnimation();

  arrow.on('click',function() {
    $('html,body').animate({
        scrollTop: $(".main").offset().top},
        'slow');

  });
});
