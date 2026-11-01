import { DANode } from "./module-uR.js";
import { DAAIGCVideo } from "./module-Au.js";
import { DAResourceSourceFrom } from "./module-Pb.js";
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
export class DAVideoResource extends DANode {
  constructor() {
    super(...arguments);
    this.sourceFrom = DAResourceSourceFrom.none;
    this.name = "";
    this.vid = "";
    this.fps = 0;
    this.width = 0;
    this.height = 0;
    this.duration = 0;
    this.aigcVideo = undefined;
    this.coverImage = "";
    this.sourceStartMs = undefined;
    this.sourceDurationMs = undefined;
  }
  afterInit() {
    super.afterInit();
    this.type = "video";
  }
  getDurationSecond() {
    return s.Int.toFloat64(this.duration) / 1000;
  }
  setDurationSecond(e) {
    this.duration = s.Float64.toInt(1000 * e);
  }
  getDurationMilliSecond() {
    return this.duration;
  }
  setDurationMilliSecond(e) {
    this.duration = e;
  }
  childNodes() {
    let e = [];
    let aigcVideo = this.aigcVideo;
    if (aigcVideo != undefined) {
      e.push(aigcVideo);
    }
    return e;
  }
}
o(
  [s.serializable("source_from")],
  DAVideoResource.prototype,
  "sourceFrom",
  undefined,
);
o([s.serializable("name")], DAVideoResource.prototype, "name", undefined);
o([s.serializable("vid")], DAVideoResource.prototype, "vid", undefined);
o([s.serializable("fps")], DAVideoResource.prototype, "fps", undefined);
o([s.serializable("width")], DAVideoResource.prototype, "width", undefined);
o([s.serializable("height")], DAVideoResource.prototype, "height", undefined);
o(
  [s.serializable("duration")],
  DAVideoResource.prototype,
  "duration",
  undefined,
);
o(
  [s.serializable("aigc_video", () => DAAIGCVideo)],
  DAVideoResource.prototype,
  "aigcVideo",
  undefined,
);
o(
  [s.serializable("cover_image_url")],
  DAVideoResource.prototype,
  "coverImage",
  undefined,
);
o(
  [s.serializable("source_start_ms")],
  DAVideoResource.prototype,
  "sourceStartMs",
  undefined,
);
o(
  [s.serializable("source_duration_ms")],
  DAVideoResource.prototype,
  "sourceDurationMs",
  undefined,
);
