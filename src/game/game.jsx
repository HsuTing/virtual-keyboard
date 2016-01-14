'use strict';

let canvas = document.getElementById("gameArea");
let ctx = canvas.getContext("2d");

let objx = 20;
let objy = 20;

export default (keycode) => {
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "red";
  ctx.fill();
  
  switch(keycode) {
    case "W":
      if(objy - 20 > 0)
        objy = objy - 20;  
      break;
    case "D":
      if(objx + 20 < canvas.width)
        objx = objx + 20;
      break;
    case "S":
      if(objy + 20 < canvas.height)
        objy = objy+20;
      break;
    case "A":
      if(objx - 20 > 0)
        objx = objx - 20;
      break;
  }

  ctx.fillStyle = "green";
  ctx.fillRect(objx, objy, 150, 100);
}
