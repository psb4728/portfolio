'use strict';

// navbar 스크롤링시 고정
document.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var navbarHeight = navbar.getBoundingClientRect().height;

  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar-dark');
  } else {
    navbar.classList.remove('navbar-dark');
  }
});

// toggle btn
var menuIcon = document.querySelector('.toggle-btn');

menuIcon.addEventListener('click', function() {
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('change');
});


// ability scroll animation
var html = document.querySelector('.graph-html > div');
var css = document.querySelector('.graph-css > div');
var jquery = document.querySelector('.graph-jquery > div');
var javascript = document.querySelector('.graph-javascript > div');
var ability = document.querySelector('.ability').offsetTop - 300;

function showScroll() {
  var currentScroll = window.pageYOffset;
  if(ability < currentScroll) {
    html.classList.add('on');
    css.classList.add('on');
    jquery.classList.add('on');
    javascript.classList.add('on');
  }
}
window.addEventListener('scroll', showScroll);

// navbar menu 클릭시 원하는 섹션으로 이동
const navbarMenu = document.querySelector('.nav-menu');
navbarMenu.addEventListener('click', function(event) {
  
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

  console.log(event.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
});

