document.getElementById('right').onclick = sliderRight;
document.getElementById('left').onclick = sliderLeft;
var i = 0
j = 0;

function sliderRight() {
  var content__items = document.getElementById('slider_content');
  i += - 301;
  if (i < -1169) {
    i = 0;
  }
  content__items.style.left = i + 'px';
}

function sliderLeft() {
  var content__items = document.getElementById('slider_content');
  i += 301;
  if (i > 0) {
    i = 0;
  }
  content__items.style.left = i + 'px';
}

// document.getElementsByClassName('.footer-li__title').onclick = showMenu;

// function showMenu() {
//   var footer_menu = document.getElementsByClassName('.footer-menu');
//   footer_menu.className = 'footer-menu-active';
// }