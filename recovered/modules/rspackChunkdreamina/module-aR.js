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
export class DAVideoGenV2VSuperResolution extends r.DANode {
  constructor() {
    super(...arguments);
    this.enable = undefined;
    this.targetWidth = undefined;
    this.targetHeight = undefined;
    this.originWidth = undefined;
    this.originHeight = undefined;
    this.resolution = undefined;
    this.aigcSr = undefined;
  }
}
o(
  [a.serializable("enable")],
  DAVideoGenV2VSuperResolution.prototype,
  "enable",
  undefined,
);
o(
  [a.serializable("target_width")],
  DAVideoGenV2VSuperResolution.prototype,
  "targetWidth",
  undefined,
);
o(
  [a.serializable("target_height")],
  DAVideoGenV2VSuperResolution.prototype,
  "targetHeight",
  undefined,
);
o(
  [a.serializable("origin_width")],
  DAVideoGenV2VSuperResolution.prototype,
  "originWidth",
  undefined,
);
o(
  [a.serializable("origin_height")],
  DAVideoGenV2VSuperResolution.prototype,
  "originHeight",
  undefined,
);
o(
  [a.serializable("resolution")],
  DAVideoGenV2VSuperResolution.prototype,
  "resolution",
  undefined,
);
o(
  [a.serializable("aigc_sr")],
  DAVideoGenV2VSuperResolution.prototype,
  "aigcSr",
  undefined,
);
