import { DALinkableResource, DAResourceSourceFrom } from "./module-Pb.js";
import a from "Rd";
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
export class DAAudioResource extends DALinkableResource {
  constructor() {
    super(...arguments);
    this.sourceFrom = DAResourceSourceFrom.none;
    this.vid = "";
    this.duration = 0;
    this.name = "";
    this.sourceStartMs = undefined;
    this.sourceDurationMs = undefined;
  }
  afterInit() {
    super.afterInit();
    this.type = "audio";
  }
  getDurationSecond() {
    return a.Int.toFloat64(this.duration) / 1000;
  }
  setDurationSecond(e) {
    this.duration = a.Float64.toInt(1000 * e);
  }
  getDurationMilliSecond() {
    return this.duration;
  }
  setDurationMilliSecond(e) {
    this.duration = e;
  }
}
o(
  [a.serializable("source_from")],
  DAAudioResource.prototype,
  "sourceFrom",
  undefined,
);
o([a.serializable("vid")], DAAudioResource.prototype, "vid", undefined);
o(
  [a.serializable("duration")],
  DAAudioResource.prototype,
  "duration",
  undefined,
);
o([a.serializable("name")], DAAudioResource.prototype, "name", undefined);
o(
  [a.serializable("source_start_ms")],
  DAAudioResource.prototype,
  "sourceStartMs",
  undefined,
);
o(
  [a.serializable("source_duration_ms")],
  DAAudioResource.prototype,
  "sourceDurationMs",
  undefined,
);
