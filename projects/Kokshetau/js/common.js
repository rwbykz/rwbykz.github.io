$(document).ready(function () {
  //Scroll
  $('.scroll-anch').click(function () {
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
  // Animation
  new WOW().init();

  //Map
  
  ymaps.ready(function () {
    let kokshetau_map;
    kokshetau_map = new ymaps.Map("yandex_map", {
      center: [54.900073, 69.142294],
      zoom: 17
    });

    let myPlacemark = new ymaps.Placemark([54.900135, 69.142201], {}, {
      iconLayout: 'default#image',
      iconImageHref: '/img/icons/map-pin.svg',
      iconImageSize: [32, 32],
      iconImageOffset: [-3, -42]
    });

    kokshetau_map.geoObjects
      .add(myPlacemark)
  });
});