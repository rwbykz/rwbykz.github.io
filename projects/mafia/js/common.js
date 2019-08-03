window.addEventListener('load', function () {
//Tabs start
var pntab = document.getElementById('pn_tab');
var mmctab = document.getElementById('mmc_tab');
var mshtab = document.getElementById('msh_tab');
var pnCard = document.getElementById('pn');
var mmcCard = document.getElementById('mmc');
var mshCard = document.getElementById('msh');

document.getElementById('pn_tab').addEventListener('click', function pnTab() {
  pntab.classList.add('active_tab');
  mmctab.classList.remove('active_tab');
  mshtab.classList.remove('active_tab');
  if (pntab.classList.contains('active_tab')) {
    pnCard.classList.remove('display_none');
    mmcCard.classList.add('display_none');
    mshCard.classList.add('display_none');
  }
})

document.getElementById('mmc_tab').addEventListener('click', function mmcTab() {
  mmctab.classList.add('active_tab');
  pntab.classList.remove('active_tab');
  mshtab.classList.remove('active_tab');
  if (mmctab.classList.contains('active_tab')) {
    mmcCard.classList.remove('display_none');
    pnCard.classList.add('display_none');
    mshCard.classList.add('display_none');
  }
})

document.getElementById('msh_tab').addEventListener('click', function mshTab() {
  mshtab.classList.add('active_tab');
  pntab.classList.remove('active_tab');
  mmctab.classList.remove('active_tab');
  if (mshtab.classList.contains('active_tab')) {
    mshCard.classList.remove('display_none');
    pnCard.classList.add('display_none');
    mmcCard.classList.add('display_none');
  }
})
//Tabs end

//Players Pn start
var pnFirstPage = document.getElementById('pnFirstPage');
var pnSecondPage = document.getElementById('pnSecondPage');

var arrowTable = document.querySelectorAll('div.about_table_arrows');

for( i = 0; i < arrowTable.length; i++ ){
  arrowTable[i].addEventListener('click', function arrowLeftClick() {
    if (pnFirstPage.classList.contains('display_none')) {
      pnFirstPage.classList.remove('display_none');
      pnSecondPage.classList.add('display_none');
    } else {
      pnFirstPage.classList.add('display_none');
      pnSecondPage.classList.remove('display_none');
    }
  })
};


//Accordion
var accordionParent = document.querySelector('.accordion');
var accordionChild = accordionParent.querySelectorAll('.accordion-list__item');
var accordionChildHead = accordionParent.querySelectorAll('.accordion-head');

function toggleAccordion() {
  var accordionItem = this.parentNode;
  accordionChild.forEach(child => {
    if (accordionItem == child) {
      accordionItem.classList.toggle('accordion-list__item_open');
      return;
    }
    child.classList.remove('accordion-list__item_open');
  })
}


accordionChildHead.forEach(item => item.addEventListener('click', toggleAccordion))
})