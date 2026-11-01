import { DANode } from "./module-uR.js";
import { DAImageResource } from "./module-HS.js";
import { DAVideoResource } from "./module-Wq.js";
import l from "Rd";
let o;
export var DAMediaType;
const a =
  (this && this.__decorate) ||
  function (e, t, i, o) {
    let r;
    const arguments_length = arguments.length;
    let n =
      arguments_length < 3
        ? t
        : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, i))
          : o;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
      n = Reflect.decorate(e, t, i, o);
    } else {
      for (let s = e.length - 1; s >= 0; s--) {
        if ((r = e[s])) {
          n =
            (arguments_length < 3
              ? r(n)
              : arguments_length > 3
                ? r(t, i, n)
                : r(t, i)) || n;
        }
      }
    }
    if (arguments_length > 3 && n) {
      Object.defineProperty(t, i, n);
    }
    return n;
  };
o = DAMediaType || (DAMediaType = {});
o[(o.None = 0)] = "None";
o[(o.Image = 1)] = "Image";
o[(o.Video = 2)] = "Video";
export class DAMediaInfo extends DANode {
  constructor() {
    super(...arguments);
    this.mediaType = DAMediaType.Image;
    this.imageInfo = undefined;
    this.videoInfo = undefined;
  }
  childNodes() {
    let e = [];
    let imageInfo = this.imageInfo;
    if (imageInfo != undefined) {
      e.push(imageInfo);
    }
    let videoInfo = this.videoInfo;
    if (videoInfo != undefined) {
      e.push(videoInfo);
    }
    return e;
  }
}
a(
  [l.serializable("media_type")],
  DAMediaInfo.prototype,
  "mediaType",
  undefined,
);
a(
  [l.serializable("image_info", () => DAImageResource)],
  DAMediaInfo.prototype,
  "imageInfo",
  undefined,
);
a(
  [l.serializable("video_info", () => DAVideoResource)],
  DAMediaInfo.prototype,
  "videoInfo",
  undefined,
);
