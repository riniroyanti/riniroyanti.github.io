//navbar Fixed 
window.onscroll = function() {
   const header = document.querySelector('header'); //carikan dokumen dengan nama/id header
   const fixedNav = header.offsetTop;

   if(window.pageYOffset > fixedNav) {
      header.classList.add('navbar-fixed');
   } else {
      header.classList.remove('navbar-fixed')
   }
};


//bagian hamburger yaitu garis tiga
const hamburger = document.querySelector('#hamburger'); //javascript memilihkan yang nama kelasnya (id) hamburger
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){ //click ->ketika hamburger fdi klik
   hamburger.classList.toggle('hamburger-active') //toogle itu remove dan munculin
   navMenu.classList.toggle('hidden'); //hiiden kalau ada, kalau gaada hilangin class hidden
})