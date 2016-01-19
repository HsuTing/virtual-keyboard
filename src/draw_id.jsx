'use strict';

import $ from 'jquery';

import {
  Context as Context,
  List as List
} from './constant';

import Game from './game/game';

export default (markers, count) => {
  Context.strokeStyle = "blue";
  Context.lineWidth = 1;
  let check = {}; 
 
  for (let i in markers){
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
    for(let i in count) {
      count[i] = 0;
    }
    return;
  }

  let html = "";
  for(let num in List) {
    if(!(num in check)) {
      let check_parent = false;

      for(let parent_id in List[num].parent) {
        let parent_num = List[num].parent[parent_id];
        if(!(parent_num in check)) {
          check_parent = true;
        }
      }

      if(!check_parent) {
        let count_id = List[num].label;
        count[count_id] = count[count_id] * 1 + 1;
        if(count[count_id] > 60) {
          Game(count_id);
          count[count_id] = 0;
          html += count_id;
        }
      }
      else {
        count[ List[num].label ] = 0;
      }
    }
    else {
      count[ List[num].label ] = 0;
    }
  }
  $('#info').append(html);
};
