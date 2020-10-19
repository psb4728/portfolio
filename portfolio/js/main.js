'use strict';

// navbar 스크롤링시 고정
document.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var navbarHeight = navbar.offsetTop;

  if(window.pageYOffset > navbarHeight) {
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
  if (ability < currentScroll) {
    html.classList.add('on');
    css.classList.add('on');
    jquery.classList.add('on');
    javascript.classList.add('on');
  }
}
window.addEventListener('scroll', showScroll);

// projects
var workBtnContainer = document.querySelector('.work-categories');
var projectContainer = document.querySelector('.work-projects');
var projects = document.querySelectorAll('.project-wrap');
workBtnContainer.addEventListener('click', function (e) {
  var filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

// work-categories button 클릭시 selected 클래스 추가
  var active = document.querySelector('.category-btn.selected');
  active.classList.remove('selected');
  var target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add('ani-out');
  setTimeout(function () {
    var project;
    for(var i = 0; i < projects.length; i++) {
      project = projects[i];
      if (filter === '*' || filter === project.dataset.type) {
            project.classList.remove('invisible');
          } else {
            project.classList.add('invisible');
          }
    }
    projectContainer.classList.remove('ani-out');
  }, 300);
});

// back to top button
var btt = document.getElementById('back-to-top'),
    docElem = document.documentElement,
    offset,
    scrollPos,
    docHeight;

// 문서 높이 계산
docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight); // 둘중 높은 값을 사용
if(docHeight !== 0) {
  offset = docHeight / 4;
}

// 스크롤 이벤트 추가
window.addEventListener('scroll', function() {
  scrollPos = docElem.scrollTop;

  btt.className = (scrollPos > offset) ? 'visible': '';
});

// 클릭 이벤트 추가
btt.addEventListener('click', function(e) {
  e.preventDefault(); // 링크의 본연의 기능을 막는다.
  scrollToTop();
});
function scrollToTop() {
  var scrollInterval = setInterval(function() {
    if(scrollPos !== 0) {
      window.scrollBy(0,-55);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}





