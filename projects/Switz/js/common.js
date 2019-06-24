//Drop menu
const links = document.querySelectorAll('.select__link');
const select = document.querySelector('.select__label');

links.forEach(el => {
  el.addEventListener('click', function () {
    select.textContent = this.textContent;
  });
});

// First Slider
document.getElementById('right').onclick = sliderRight;
document.getElementById('left').onclick = sliderLeft;
var i = 0
    j = 0;

function sliderRight(){
  var content__items = document.getElementById('slider-content');
  i += - 426;
  if (i < -1704) {
    i = 0;
  }
  content__items.style.left = i +'px';
}

function sliderLeft() {
  var content__items = document.getElementById('slider-content');
  i += 426;
  if (i > 0) {
    i = 0;
  }
  content__items.style.left = i + 'px';
}

//Last slider
document.getElementById('rightl').onclick = sliderRightl;
document.getElementById('leftl').onclick = sliderLeftl;
var i = 0
j = 0;

function sliderRightl() {
  var content__items = document.getElementById('slider-contentl');
  i += - 426;
  if (i < -1704) {
    i = 0;
  }
  content__items.style.left = i + 'px';
}

function sliderLeftl() {
  var content__items = document.getElementById('slider-contentl');
  i += 426;
  if (i > 0) {
    i = 0;
  }
  content__items.style.left = i + 'px';
}
