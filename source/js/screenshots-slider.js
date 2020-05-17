'use strict'

const SCREENSHOTS_SLIDER = document.querySelector('.js-screenshots-slider');
const SCREENSHOTS_LIST = SCREENSHOTS_SLIDER.querySelectorAll('.js-screenshots-slider__list-item');
const SCREENSHOTS_NUMBER = SCREENSHOTS_LIST.length;
const SCREENSHOTS_NEXT = SCREENSHOTS_SLIDER.querySelector('.js-screenshots-slider__button--forward');
const SCREENSHOTS_PREV = SCREENSHOTS_SLIDER.querySelector('.js-screenshots-slider__button--preview');

SCREENSHOTS_NEXT.addEventListener('click', function(){
  for (let i = 0; i < SCREENSHOTS_NUMBER; ++i) {
    let newSlideNumber;
    let currentSlideNumber = +(SCREENSHOTS_LIST[i].dataset.slideNumber);

    if (currentSlideNumber === SCREENSHOTS_NUMBER) {
      newSlideNumber = 1;
    } else {
      newSlideNumber = +(SCREENSHOTS_LIST[i].dataset.slideNumber) + 1;
    }
    SCREENSHOTS_LIST[i].dataset.slideNumber = newSlideNumber;
  }
});

SCREENSHOTS_PREV.addEventListener('click', function(){
  for (let i = 0; i < SCREENSHOTS_NUMBER; ++i) {
    let newSlideNumber;
    let currentSlideNumber = +(SCREENSHOTS_LIST[i].dataset.slideNumber);

    if (currentSlideNumber === 1) {
      newSlideNumber = 7;
    } else {
      newSlideNumber = +(SCREENSHOTS_LIST[i].dataset.slideNumber) - 1;
    }
    SCREENSHOTS_LIST[i].dataset.slideNumber = newSlideNumber;
  }
});