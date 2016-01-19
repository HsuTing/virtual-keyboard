'use strict';

import $ from 'jquery';

import Loop from './loop';
import GameInit from './game/init';

let count = {
  'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0, 'F': 0, 'G': 0, 'H': 0, 'I': 0,
  'J': 0, 'K': 0, 'L': 0, 'M': 0, 'N': 0, 'O': 0, 'P': 0, 'Q': 0, 'R': 0,
  'S': 0, 'T': 0, 'U': 0, 'V': 0, 'W': 0, 'X': 0, 'Y': 0, 'Z': 0
};

(() => {
  GameInit();
  $('#clear').click(() => {
    $('#info').html('');
  });

  window.addEventListener("DOMContentLoaded", () => {
    let video = document.getElementById("video");
    let videoObj = { "video": true };
    let errBack = (error) => {
      alert("Can not capture camera.");
    };

    if(navigator.getUserMedia) {
      navigator.getUserMedia(videoObj, (stream) => {
        video.src = stream;
        video.play();
        setTimeout(() => { Loop(video, count); }, 1);
      }, errBack);
    } else if(navigator.webkitGetUserMedia) {
      navigator.webkitGetUserMedia(videoObj, (stream) => {
        video.src = window.URL.createObjectURL(stream);
        video.play();
        setTimeout(() => { Loop(video, count); }, 1);
      }, errBack);
    }
    else if(navigator.mozGetUserMedia) {
      navigator.mozGetUserMedia(videoObj, (stream) => {
        video.src = window.URL.createObjectURL(stream);
        video.play();
        setTimeout(() => { Loop(video, count); }, 1);
      }, errBack);
    }
  }, false);
})();
