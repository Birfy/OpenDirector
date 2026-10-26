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
export class DAVideoGenV2VLabSr extends r.DANode {
  constructor() {
    super(...arguments);
    this.enable = undefined;
    this.srFps = undefined;
    this.srDurationMs = undefined;
  }
}
o(
  [a.serializable("enable")],
  DAVideoGenV2VLabSr.prototype,
  "enable",
  undefined,
);
o([a.serializable("sr_fps")], DAVideoGenV2VLabSr.prototype, "srFps", undefined);
o(
  [a.serializable("sr_duration_ms")],
  DAVideoGenV2VLabSr.prototype,
  "srDurationMs",
  undefined,
);
