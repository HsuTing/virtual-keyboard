'use strict';

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let list = {
  '0': { 'label': 'A', 'parent': ['16'] },
  '1': { 'label': 'B', 'parent': ['6', '19'] },
  '2': { 'label': 'C', 'parent': ['3', '4'] },
  '3': { 'label': 'D', 'parent': ['4'] },
  '4': { 'label': 'E', 'parent': [] },
  '5': { 'label': 'F', 'parent': ['17'] },
  '6': { 'label': 'G', 'parent': ['19'] },
  '7': { 'label': 'H', 'parent': ['24'] },
  '8': { 'label': 'I', 'parent': [] },
  '9': { 'label': 'J', 'parent': ['20'] },
  '10': { 'label': 'K', 'parent': ['8'] },
  '11': { 'label': 'L', 'parent': ['14'] },
  '12': { 'label': 'M', 'parent': ['9', '20'] },
  '13': { 'label': 'N', 'parent': ['7', '24'] },
  '14': { 'label': 'O', 'parent': [] },
  '15': { 'label': 'P', 'parent': [] },
  '16': { 'label': 'Q', 'parent': [] },
  '17': { 'label': 'R', 'parent': [] },
  '18': { 'label': 'S', 'parent': ['22'] },
  '19': { 'label': 'T', 'parent': [] },
  '20': { 'label': 'U', 'parent': [] },
  '21': { 'label': 'V', 'parent': ['5', '17'] },
  '22': { 'label': 'W', 'parent': [] },
  '23': { 'label': 'X', 'parent': ['18', '22'] },
  '24': { 'label': 'Y', 'parent': [] },
  '25': { 'label': 'Z', 'parent': ['0', '16'] }
};

export {
  canvas as Canvas,
  context as Context,
  list as List
};
