'use strict';

import $ from 'jquery';

import {
  Context as Context,
  List as List
} from './constant';

export default (markers) => {
  Context.strokeStyle = "blue";
  Context.lineWidth = 1;
  let check = {}; 
 
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
    check[markers[i].id] = true;
  }

  if(Object.keys(check).length == 0) {
    $('#info').html('');
    return;
  }

  let html = "";
  for(let num in List) {
    if(num in check) {
      html += List[num].label + " ";
    }
  }
  $('#info').html(html);
};
