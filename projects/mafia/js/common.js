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
    console.log('helo');
  } else {
    console.log('bye');
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
    console.log('helo');
  } else {
    console.log('bye');
  }
})