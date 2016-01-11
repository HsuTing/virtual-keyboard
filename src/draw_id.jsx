'use strict';

import {
  Context as Context
} from './constant';

export default (markers) => {
  Context.strokeStyle = "blue";
  Context.lineWidth = 1;
 
  for (let i = 0; i < markers.length; i++){
    let corners = markers[i].corners;
    let x = Infinity;
    let y = Infinity;

    for (let j = 0; j < corners.length; j++){
      let corner = corners[j];
      x = Math.min(x, corner.x);
      y = Math.min(y, corner.y);
    }

    Context.strokeText(markers[i].id, x, y)
  }
};
