import r from "GL";
import a from "Wq";
import n from "uR";
import s from "./module-Rd.js";
const o =
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
export class DAMergeVideoInput extends n.DANode {
  constructor() {
    super(...arguments);
    this.targetWidth = undefined;
    this.targetHeight = undefined;
    this.targetFormat = undefined;
    this.bgmList = undefined;
    this.videoList = undefined;
  }
  childNodes() {
    let e = [];
    let bgmList = this.bgmList;
    if (bgmList != undefined) {
      bgmList.forEach((t) => e.push(t));
    }
    let videoList = this.videoList;
    if (videoList != undefined) {
      videoList.forEach((t) => e.push(t));
    }
    return e;
  }
}
o(
  [s.serializable("target_width", undefined, "int")],
  DAMergeVideoInput.prototype,
  "targetWidth",
  undefined,
);
o(
  [s.serializable("target_height", undefined, "int")],
  DAMergeVideoInput.prototype,
  "targetHeight",
  undefined,
);
o(
  [s.serializable("target_format")],
  DAMergeVideoInput.prototype,
  "targetFormat",
  undefined,
);
o(
  [s.serializable("bgm_list", () => r.DAAudioResource)],
  DAMergeVideoInput.prototype,
  "bgmList",
  undefined,
);
o(
  [s.serializable("video_list", () => a.DAVideoResource)],
  DAMergeVideoInput.prototype,
  "videoList",
  undefined,
);
