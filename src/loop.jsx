'use strict';

import {
  Context as Context
} from './constant';

import AR from './../lib/js-aruco/aruco';
import DrawCorners from './draw_corners';
import DrawId from './draw_id';

let detector = new AR.Detector();

let loop = (video, count) => {
  Context.drawImage(video, 0, 0, 400, 300);

  let imageData = Context.getImageData(0, 0, 400, 300);
  let markers = detector.detect(imageData);

  DrawCorners(markers);
  DrawId(markers, count);

  setTimeout(() => { loop(video, count); }, 1);
};

export default loop;
