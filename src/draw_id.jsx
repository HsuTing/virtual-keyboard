'use strict';

import $ from 'jquery';

import {
  Context as Context
} from './constant';

let list = {
  '1007': 'A',
  '827': 'B',
  '787': 'C',
  '140': 'J',
  '750': 'K',
  '3': 'L',
  '955': 'M',
  '425': 'Q',
  '179': 'R',
  '48': 'T',
  '393': 'V',
  '204': 'X',
  '666': 'Y'
};

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

  for(let num in list) {
    if(!check[num]) {
      $('#info').html(list[num]);
    }
  }
};
