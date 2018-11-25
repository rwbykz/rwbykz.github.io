$(document).ready(function() {
$('.scroll-anch').click( function(){
  var scroll_el = $(this).data('target');
  if ($(scroll_el).length != 0) {
    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 750);
  }
  return false;
   });

  $('.scroll-anch').click(function () {
      $('html body').animate({
          scrollTop: $(this).offset().top
      }, 750)
  });
     var moscow_map;

    ymaps.ready(function(){
        moscow_map = new ymaps.Map("first_map", {
            center: [49.807754, 73.088504],
            zoom: 12
        });
    });
});