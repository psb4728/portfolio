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


// navbar menu 클릭시 원하는 섹션으로 이동
var navbarMenu = document.querySelector('.nav-menu');
navbarMenu.addEventListener('click', function(event) {
  // 모바일 화면에서 nav-menu를 클릭시 active 클래스를 remove하기 위한 변수
  var navWrap = document.querySelector('.nav-wrap');
  var navbar = document.querySelector('.navbar');
  
  var target = event.target;
  var link = target.dataset.link;
  if (link == null) {
    return;
  }
  
  navbar.classList.remove('active');
  navWrap.classList.remove('active');
  navbarMenu.classList.remove('active');
  scrollIntoView(link);
});

function scrollIntoView(selector) {
  var scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

// toggle btn
var menuIcon = document.querySelector('.toggle-btn');

menuIcon.addEventListener('click', function() {
  var navbar = document.querySelector('.navbar');
  var navWrap = document.querySelector('.nav-wrap');
  navWrap.classList.toggle('active');
  navbar.classList.toggle('active');
});


// main scroll opacity
var main = document.querySelector('.main');
var mainHeight = main.getBoundingClientRect().height;
document.addEventListener('scroll', function() {
  main.style.opacity = (1 - window.scrollY / mainHeight);
});

// ability scroll animation
var html = document.querySelector('.graph-html > div');
var css = document.querySelector('.graph-css > div');
var jquery = document.querySelector('.graph-jquery > div');
var javascript = document.querySelector('.graph-javascript > div');
var ability = document.querySelector('.ability').offsetTop - 350;

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




