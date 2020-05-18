'use strict'

const HEADER = document.querySelector('.js-header');
const MENU = document.querySelector('.js-menu');
const MAIN = document.querySelector('.js-main');
const OPEN = document.querySelector('.js-menu-open');
const CLOSE = document.querySelector('.js-menu-close');
let headerHeight;

if (window.innerWidth <= 768) {
  addMarginMain();
}

window.addEventListener('resize', function(){
  if (window.innerWidth <= 768) {
    addMarginMain();
  } else {
    removeMarginMain();
  }
  closeMenu();
});

window.addEventListener('click', function(event) {
  let target = event.target;

  if ( OPEN.contains(target) ) {
    openMenu();
  }
  if ( CLOSE.contains(target) ) {
    closeMenu();
  }
  if ( target.closest('.menu__link') ) {
    closeMenu();
  } 
  if ( target.closest('.menu__button') ) {
    closeMenu();
  }
  if ( !MENU.contains(target) && !HEADER.contains(target) && MENU.classList.contains('menu--open') ) {
    closeMenu();
  }
});

function openMenu() {
  headerHeight = HEADER.getBoundingClientRect().height;
  MENU.classList.add('menu--open');
  MENU.style.top = headerHeight + 'px';
  OPEN.classList.add('header__button--disabled');
  CLOSE.classList.remove('header__button--disabled');
}

function closeMenu() {
  MENU.classList.remove('menu--open');
  MENU.removeAttribute('style');
  OPEN.classList.remove('header__button--disabled');
  CLOSE.classList.add('header__button--disabled');
}

function addMarginMain() {
  headerHeight = HEADER.getBoundingClientRect().height;
  MAIN.style.marginTop = headerHeight + 'px';
}

function removeMarginMain() {
  MAIN.removeAttribute('style');
}