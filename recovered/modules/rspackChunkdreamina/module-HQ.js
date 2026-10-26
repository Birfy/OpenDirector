import { DAReqImageInfo } from "./module-M0.js";
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
export class DATargetImageInfo extends a.Serializable {
  constructor() {
    super(...arguments);
    this.ratioType = undefined;
    this.width = undefined;
    this.height = undefined;
    this.format = undefined;
    this.resolutionType = undefined;
    this.intelligentRatio = undefined;
  }
}
o(
  [a.serializable("ratioType")],
  DATargetImageInfo.prototype,
  "ratioType",
  undefined,
);
o([a.serializable("width")], DATargetImageInfo.prototype, "width", undefined);
o([a.serializable("height")], DATargetImageInfo.prototype, "height", undefined);
o([a.serializable("format")], DATargetImageInfo.prototype, "format", undefined);
o(
  [a.serializable("resolutionType")],
  DATargetImageInfo.prototype,
  "resolutionType",
  undefined,
);
o(
  [a.serializable("intelligentRatio")],
  DATargetImageInfo.prototype,
  "intelligentRatio",
  undefined,
);
export class DATargetImageInfoUtil {
  static convertToDAReqImageInfo(e) {
    if (e === undefined) {
      return;
    }
    let t = new DAReqImageInfo();
    t.width = e.width;
    t.height = e.height;
    t.resolutionType = e.resolutionType;
    t.format = e.format;
    return t;
  }
}
