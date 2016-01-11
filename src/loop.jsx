'use strict';

import {
  Context as Context
} from './constant';

import AR from './../lib/js-aruco/aruco';
import DrawCorners from './draw_corners';
import DrawId from './draw_id';

let detector = new AR.Detector();

let loop = (video) => {
  Context.drawImage(video, 0, 0, 800, 600);

  let imageData = Context.getImageData(0, 0, 800, 600);
  let markers = detector.detect(imageData);

  DrawCorners(markers);
  DrawId(markers);

  setTimeout(() => { loop(video); }, 1);
};

export default loop;
