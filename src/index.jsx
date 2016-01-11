'use strict';


(() => {
  let video = document.getElementById("video");
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");
    
  canvas.width = parseInt(canvas.style.width);
  canvas.height = parseInt(canvas.style.height);
     
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  if(navigator.getUserMedia) {    
    let successCallback = (stream) => {
      if(window.URL) {
        video.src = window.URL.createObjectURL(stream);
      }
      else if(video.mozSrcObject !== undefined) {
        video.mozSrcObject = stream;
      }
      else {
        video.src = stream;
      }
    }
        
    let errorCallback = (error) => {
      alert("Something is error.");
    }
        
    navigator.getUserMedia({video: true}, successCallback, errorCallback);
  }
  else {
    alert("Webcam can not open.");
  }
})();
