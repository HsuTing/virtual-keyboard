var canvas;

// Get canvas
canvas = document.getElementById("gameArea");
canvas.width = 500;
canvas.height = 300;
var objx = 20;
var objy = 20;

//set background
var ctx=canvas.getContext("2d");
ctx.rect(0,0,canvas.width,canvas.height);
ctx.fillStyle="red";
ctx.fill();

//set object
ctx.fillStyle="green";
ctx.fillRect(objx,objy,150,100);

document.onkeydown = function(){
  var keycode = event.which || event.keyCode;
  moveFunc(keycode);
}

function moveFunc(keycode)
{
  ctx.rect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="red";
  ctx.fill();

  
  switch(keycode)
  {
    case 38:
      if(objy - 20 > 0)
      {
        objy = objy - 20;  
      }
      break;
    case 39:
      if(objx + 20 < canvas.width)
      {
        objx = objx + 20;
      }
      break;
    case 40:
      if(objy+20 < canvas.height)
      {
        objy = objy+20;
      }
      break;
    case 37:
      if(objx - 20 > 0)
      {
        objx = objx - 20;
      }
      break;
  }
  ctx.fillStyle="green";
  ctx.fillRect(objx,objy,150,100);
}
