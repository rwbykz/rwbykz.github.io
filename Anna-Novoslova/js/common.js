$(document).ready(function () {
	new WOW().init();
});

$('.js-button-campaign').click(function () {
	$('.js-overlay-campaign').show();
	$('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function () {
	$('.js-overlay-campaign').fadeOut();
});

// закрыть по нажатию на ссылку
$(".scroll-anch").click(function() {
  $(".js-overlay-campaign").fadeOut();
});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaign');
	if (e.target != popup[0] && popup.has(e.target).length === 0) {
		$('.js-overlay-campaign').fadeOut();
	}
});

// плавный скролл
$(document).ready(function () {
	$('.scroll-anch').click(function () {
		var scroll_el = $(this).data('target');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 750);
		}
		return false;
	});
	});


// $(document).ready(function () {
// 	var w = window.innerWidth;
// 	console.log($(window).width());
// 	if (w > 1280) {
// 		$('.pop-projects').find('a').removeClass('scroll-anch');
// 		$('.pop-projects').find('a').removeAttr('data-target');
// 		$('.pop-projects').find('a').attr('href', '#port');
// 	}
// });