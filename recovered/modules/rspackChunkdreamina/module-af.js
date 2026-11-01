import { DANode } from "./module-uR.js";
import { DAMediaInfo } from "./module-HV.js";
import { DAVideoResource } from "./module-Wq.js";
import s from "Rd";
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
export class DAMultiFrame extends DANode {
  constructor() {
    super(...arguments);
    this.idx = undefined;
    this.durationMs = undefined;
    this.prompt = undefined;
    this.mediaInfo = undefined;
    this.segmentVideo = undefined;
  }
  childNodes() {
    let e = [];
    let mediaInfo = this.mediaInfo;
    if (mediaInfo != undefined) {
      e.push(mediaInfo);
    }
    return e;
  }
}
o([s.serializable("idx")], DAMultiFrame.prototype, "idx", undefined);
o(
  [s.serializable("duration_ms")],
  DAMultiFrame.prototype,
  "durationMs",
  undefined,
);
o([s.serializable("prompt")], DAMultiFrame.prototype, "prompt", undefined);
o(
  [s.serializable("media_info", () => DAMediaInfo)],
  DAMultiFrame.prototype,
  "mediaInfo",
  undefined,
);
o(
  [s.serializable("segment_video", () => DAVideoResource)],
  DAMultiFrame.prototype,
  "segmentVideo",
  undefined,
);
