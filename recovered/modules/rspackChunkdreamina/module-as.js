import r from "Ut";
import a from "./module-Rd.js";
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
export class ServerAudioResource extends a.Serializable {
  constructor() {
    super(...arguments);
    this.vid = undefined;
    this.duration = 0;
    this.link = undefined;
    this.sourceStartMs = undefined;
    this.sourceDurationMs = undefined;
  }
  static fromDAAudioResource(e, t) {
    let i = new ServerAudioResource();
    switch (e.sourceFrom) {
      case r.DAResourceSourceFrom.link:
        break;
      case r.DAResourceSourceFrom.upload:
      case r.DAResourceSourceFrom.produced:
      case r.DAResourceSourceFrom.none:
        i.vid = e.vid;
    }
    i.duration = e.getDurationMilliSecond();
    i.sourceStartMs = e.sourceStartMs;
    i.sourceDurationMs = e.sourceDurationMs;
    return i;
  }
}
o([a.serializable("vid")], ServerAudioResource.prototype, "vid", undefined);
o(
  [a.serializable("duration")],
  ServerAudioResource.prototype,
  "duration",
  undefined,
);
o([a.serializable("link")], ServerAudioResource.prototype, "link", undefined);
o(
  [a.serializable("source_start_ms")],
  ServerAudioResource.prototype,
  "sourceStartMs",
  undefined,
);
o(
  [a.serializable("source_duration_ms")],
  ServerAudioResource.prototype,
  "sourceDurationMs",
  undefined,
);
