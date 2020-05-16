'use strict'

const VIDEO = document.querySelector('.js-video');
const PLAY = document.querySelector('.js-play');
const PAUSE = document.querySelector('.js-pause');

PLAY.addEventListener('click', function(){
  VIDEO.play();
  PLAY.classList.toggle('video-section__button--active');
  PAUSE.classList.toggle('video-section__button--active');
  VIDEO.classList.add('video-section__video--playing');
});

PAUSE.addEventListener('click', function(){
  VIDEO.pause();
  PLAY.classList.toggle('video-section__button--active');
  PAUSE.classList.toggle('video-section__button--active');
  VIDEO.classList.remove('video-section__video--playing');
});

