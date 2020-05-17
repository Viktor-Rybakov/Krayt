'use strict'

let feedbackSlider = document.querySelector('.js-feedback-slider');
let feedbackList = feedbackSlider.querySelector('.js-feedback-slider__list');
let direction;
let clickPrev = prev;
let clickNext = next;
let slideWidth = feedbackList.children[1].getBoundingClientRect().left - feedbackList.children[0].getBoundingClientRect().left;

const FEEDBACK_NEXT = feedbackSlider.querySelector('.js-feedback-slider__button--forward');
const FEEDBACK_PREV = feedbackSlider.querySelector('.js-feedback-slider__button--preview');

window.addEventListener('resize', function(){
  slideWidth = feedbackList.children[1].getBoundingClientRect().left - feedbackList.children[0].getBoundingClientRect().left;
});

FEEDBACK_PREV.addEventListener('click', clickPrev);
FEEDBACK_NEXT.addEventListener('click', clickNext);
feedbackList.addEventListener('transitionend', removeSlide);

function prev() {
  direction = 1;
  if (clickPrev == null) {
    return
  } else {
    clickPrev = null;
    feedbackList.style.transition = 'none';
    feedbackList.style.transform = `translateX(-${slideWidth}px)`;

    let nextSlide = feedbackList.lastElementChild.cloneNode(true);

    if (feedbackList.firstElementChild.classList.contains('feedback-slider__list-item--white')) {
      nextSlide.classList.remove('feedback-slider__list-item--white');
    } else {
      nextSlide.classList.add('feedback-slider__list-item--white');
    }
    feedbackList.prepend(nextSlide);

    setTimeout(function() {
      feedbackList.style.transition = '0.2s';
      feedbackList.style.transform = 'translateX(0)';
    }, 50);
    
    feedbackList = feedbackSlider.querySelector('.js-feedback-slider__list');
  }
}
  
function next() {
  direction = -1;
  if (clickNext == null) {
    return
  } else {
    let nextSlide = feedbackList.firstElementChild.cloneNode(true);

    if (feedbackList.lastElementChild.classList.contains('feedback-slider__list-item--white')) {
      nextSlide.classList.remove('feedback-slider__list-item--white');
    } else {
      nextSlide.classList.add('feedback-slider__list-item--white');
    }

    feedbackList.append(nextSlide);
    feedbackList.style.transform = `translateX(-${slideWidth}px)`;
    
    feedbackList = feedbackSlider.querySelector('.js-feedback-slider__list');
    clickNext = null;
  }
}

function removeSlide() {
  if (direction === -1) {
    feedbackList.firstElementChild.remove();

    feedbackList.style.transition = 'none';
    feedbackList.style.transform = 'translateX(0)';
    setTimeout(function(){
      feedbackList.style.transition = '0.2s';
      clickNext = next;
    }, 50);
    
  } else if (direction === 1) {
    feedbackList.lastElementChild.remove();
    clickPrev = prev;
  }
  
  feedbackList = feedbackSlider.querySelector('.js-feedback-slider__list');
}