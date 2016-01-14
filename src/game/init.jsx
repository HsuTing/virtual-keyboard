'use strict';

export default () => {
  let canvas = document.getElementById("gameArea");
  canvas.width = 500;
  canvas.height = 300;
  let objx = 20;
  let objy = 20;

  //set background
  let ctx = canvas.getContext("2d");
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "red";
  ctx.fill();

  //set object
  ctx.fillStyle = "green";
  ctx.fillRect(objx, objy, 150, 100);
}
