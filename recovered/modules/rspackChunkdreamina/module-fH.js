import r from "Au";
import a from "Ut";
import n from "./module-Rd.js";
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
export class ServerVideoResource extends n.Serializable {
  constructor() {
    super(...arguments);
    this.vid = undefined;
    this.fps = 0;
    this.width = 0;
    this.height = 0;
    this.duration = 0;
    this.link = undefined;
    this.aigcVideo = undefined;
    this.sourceStartMs = undefined;
    this.sourceDurationMs = undefined;
  }
  static fromDAVideoResource(e, t) {
    let i = new ServerVideoResource();
    switch (e.sourceFrom) {
      case a.DAResourceSourceFrom.link:
        break;
      case a.DAResourceSourceFrom.upload:
      case a.DAResourceSourceFrom.produced:
      case a.DAResourceSourceFrom.none:
        i.vid = e.vid;
    }
    i.fps = e.fps;
    i.width = e.width;
    i.height = e.height;
    i.duration = e.getDurationMilliSecond();
    i.aigcVideo = e.aigcVideo;
    i.sourceStartMs = e.sourceStartMs;
    i.sourceDurationMs = e.sourceDurationMs;
    return i;
  }
}
o([n.serializable("vid")], ServerVideoResource.prototype, "vid", undefined);
o([n.serializable("fps")], ServerVideoResource.prototype, "fps", undefined);
o([n.serializable("width")], ServerVideoResource.prototype, "width", undefined);
o(
  [n.serializable("height")],
  ServerVideoResource.prototype,
  "height",
  undefined,
);
o(
  [n.serializable("duration")],
  ServerVideoResource.prototype,
  "duration",
  undefined,
);
o([n.serializable("link")], ServerVideoResource.prototype, "link", undefined);
o(
  [n.serializable("aigc_video", () => r.DAAIGCVideo)],
  ServerVideoResource.prototype,
  "aigcVideo",
  undefined,
);
o(
  [n.serializable("source_start_ms")],
  ServerVideoResource.prototype,
  "sourceStartMs",
  undefined,
);
o(
  [n.serializable("source_duration_ms")],
  ServerVideoResource.prototype,
  "sourceDurationMs",
  undefined,
);
