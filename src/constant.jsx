'use strict';

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let list = {
  '0': { 'label': 'A', 'parent': ['Q'] },
/*  '1': { 'label': 'B', 'parent': ['G', 'T'] },
  '2': { 'label': 'C', 'parent': ['D', 'E'] },*/
  '3': { 'label': 'D', 'parent': ['E'] },
/*  '4': { 'label': 'E', 'parent': [] },
  '5': { 'label': 'F', 'parent': ['R'] },
  '6': { 'label': 'G', 'parent': ['T'] },
  '7': { 'label': 'H', 'parent': ['Y'] },
  '8': { 'label': 'I', 'parent': [] },
  '9': { 'label': 'J', 'parent': ['U'] },
  '10': { 'label': 'K', 'parent': ['I'] },
  '11': { 'label': 'L', 'parent': ['O'] },
  '12': { 'label': 'M', 'parent': ['J', 'U'] },
  '13': { 'label': 'N', 'parent': ['H', 'Y'] },
  '14': { 'label': 'O', 'parent': [] },
  '15': { 'label': 'P', 'parent': [] },
  '16': { 'label': 'Q', 'parent': [] },
  '17': { 'label': 'R', 'parent': [] },*/
  '18': { 'label': 'S', 'parent': ['W'] },
/*  '19': { 'label': 'T', 'parent': [] },
  '20': { 'label': 'U', 'parent': [] },
  '21': { 'label': 'V', 'parent': ['F', 'R'] },*/
  '22': { 'label': 'W', 'parent': [] }
/*  '23': { 'label': 'X', 'parent': ['S', 'W'] },
  '24': { 'label': 'Y', 'parent': [] },
  '25': { 'label': 'Z', 'parent': ['A', 'Q'] }
*/
};

export {
  canvas as Canvas,
  context as Context,
  list as List
};
