'use strict';

import {
  Context as Context
} from './constant';

export default (markers) => {
  Context.lineWidth = 3;
  for (let i = 0; i < markers.length; i++){
    let corners = markers[i].corners;
    Context.strokeStyle = "red";
    Context.beginPath();
        
    for (let j = 0; j < corners.length; j++){
      let corner = corners[j];
      Context.moveTo(corner.x, corner.y);
      corner = corners[(j + 1) % corners.length];
      Context.lineTo(corner.x, corner.y);
    }
    Context.stroke();
    Context.closePath();
        
    Context.strokeStyle = "green";
    Context.strokeRect(corners[0].x - 2, corners[0].y - 2, 4, 4);
  }
}
