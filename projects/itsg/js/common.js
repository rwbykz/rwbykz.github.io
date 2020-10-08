//Smooth scroll
// console.log('start position = ' + window.pageYOffset);
const smoothScroll = (target, duration) => {
  var target = document.querySelector(target);
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;

  console.log('start position = ' + startPosition);
  console.log('target position = ' + targetPosition);

  const animation = currentTime => {
    if (startTime === null) startTime = currentTime;
    // console.log(startTime);
    let timeElapsed = currentTime - startTime;
    // console.log('elapsed ' + timeElapsed);
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  // Больше плавных функций здесь ---> http://www.gizma.com/easing/
  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  }

  requestAnimationFrame(animation);
}

let heroBtn = document.querySelector('.hero__btn');
let heroToServices = document.querySelector('.hero-services-link');

heroBtn.addEventListener('click', () => {
  smoothScroll('.about', 2350);
});

heroToServices.addEventListener('click', () => {
  smoothScroll('.services', 2350);
});

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

// Scroll with jQuery
// $(document).ready(function () {
//   $('.scroll-anch').click(function () {
//     var scroll_el = $(this).data('target');
//     if ($(scroll_el).length != 0) {
//       $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 750);
//     }
//     return false;
//   });

//   $('.scroll-anch').click(function () {
//     $('html body').animate({
//       scrollTop: $(this).offset().top
//     }, 750)
//   });
// });