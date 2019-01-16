//SCROLL START
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
  //SCROLL END
  //MAIN MENU
  $('.main-menu.grid').after('<div class="mobile-menu d-lg-none"></div>');
  $('.menu').clone().appendTo('.mobile-menu');
  $('.mobile-menu-button').click(function() {
  $('.menu').stop().slideToggle();
  });
  //PRODUCTS-MENU
  $('.mobile-products-button').after('<div class="mobile-products-menu d-lg-none"></div>');
  $('.products-mobile').clone().appendTo('.mobile-products-menu');
  $('.mobile-products-button').click(function() {
  $('.products-mobile').stop().slideToggle();
  });
});
