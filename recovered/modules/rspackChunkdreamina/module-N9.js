import r from "uR";
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
export class DAVideoGenV2VInsertFrame extends r.DANode {
  constructor() {
    super(...arguments);
    this.enable = undefined;
    this.targetFps = undefined;
    this.originFps = undefined;
    this.durationMs = undefined;
  }
}
o(
  [a.serializable("enable")],
  DAVideoGenV2VInsertFrame.prototype,
  "enable",
  undefined,
);
o(
  [a.serializable("target_fps")],
  DAVideoGenV2VInsertFrame.prototype,
  "targetFps",
  undefined,
);
o(
  [a.serializable("origin_fps")],
  DAVideoGenV2VInsertFrame.prototype,
  "originFps",
  undefined,
);
o(
  [a.serializable("duration_ms")],
  DAVideoGenV2VInsertFrame.prototype,
  "durationMs",
  undefined,
);
