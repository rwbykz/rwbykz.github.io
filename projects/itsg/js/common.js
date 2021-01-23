//swiper slider

const slider = document.querySelector('.swiper-container')

let mySwiper = new Swiper(slider, {
 slidesPerView: 1,
 spaceBetween: 50,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  // lazy: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    900: {
      slidesPerView: 3,
    }
  }
})

$(document).ready(function () {
  // Scroll with jQuery
  $('.scroll-anch').click(function () {
    var scroll_el = $(this).data('target');
    if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1750);
    }
    return false;
  });

  $('.scroll-anch').click(function () {
    $('html body').animate({
      scrollTop: $(this).offset().top
    }, 1750)
  });

  // Form script
  $('.form').submit(function () {
    $.ajax({
      type: "POST",
      url: "telegram.php",
      data: $(this).serialize()
    }).done(function () {
      // $('.form__note').removeClass('display-none');
      $(this).find('input').val('');
      $('.form').trigger('reset');
      // setTimeout(function() {
        // $('.form__note').addClass('display-none');
      // }, 1000);
    });
    return false;
  });

  // Form validation
  const formValidation = () => {
    const form = document.querySelector('.feedback__form');

    if (form) {
      const inputs = form.querySelectorAll('input'),
            button = form.querySelector('button');
      
      button.addEventListener('click', () => {
        if (inputs[0].value !== '' && inputs[1].value !== '') {
          button.classList.add('feedback__btn_success');
          inputs.forEach(input => {
            input.value === '' ? input.classList.add('feedback__text-field_error') : input.classList.remove('feedback__text-field_error');
          });
        } else {
          inputs.forEach(input => {
            input.value === '' ? input.classList.add('feedback__text-field_error') : input.classList.remove('feedback__text-field_error');
          });
        }
      });
    }
  }
  formValidation();
});