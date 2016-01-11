'use strict';

(() => {
  window.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let video = document.getElementById("video");
    let videoObj = { "video": true };
    let errBack = (error) => {
      alert("Can not capture camera.");
    };

    if(navigator.getUserMedia) {
      navigator.getUserMedia(videoObj, (stream) => {
        video.src = stream;
        video.play();
      }, errBack);
    } else if(navigator.webkitGetUserMedia) {
      navigator.webkitGetUserMedia(videoObj, (stream) => {
        video.src = window.URL.createObjectURL(stream);
        video.play();
      }, errBack);
    }
    else if(navigator.mozGetUserMedia) {
      navigator.mozGetUserMedia(videoObj, (stream) => {
        video.src = window.URL.createObjectURL(stream);
        video.play();
      }, errBack);
    }
  }, false);
})();
