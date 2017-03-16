$(document).ready(function(){
  $('.menu-small-icon').click(function(){
    $(".menu-small-dropdown").slideDown(300);
  });
  $(".menu-small-dropdown li").click(function(){
    $( ".menu-small-dropdown" ).hide();
  });
});
